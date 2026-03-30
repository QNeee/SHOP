import type { NPBranch, NPWarehouse } from '../types';

export const getUserLocation = (): Promise<{ latitude: number; longitude: number }> => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Геолокація не підтримується цим браузером'));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        resolve({ latitude, longitude });
      },
      (error) => {
        reject(error);
      },
      { enableHighAccuracy: true },
    );
  });
};
const API_KEY = 'c14b9adbfb877330f94d82089e491b67';
interface NovaPoshtaCity {
  Description: string;
  Ref: string;
  AreasCenter: string;
}

interface NovaPoshtaResponse {
  success: boolean;
  data: NovaPoshtaCity[];
  errors: string[];
  warnings: string[];
}

export const getNovaPoshtaCities = async (city: string): Promise<NovaPoshtaCity[]> => {
  try {
    const response = await fetch('https://api.novaposhta.ua/v2.0/json/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        API_KEY,
        modelName: 'Address',
        calledMethod: 'getCities',
        methodProperties: {
          FindByString: city,
        },
      }),
    });

    const result: NovaPoshtaResponse = await response.json();

    if (!result.success) {
      console.error('Помилки API:', result.errors);
      return [];
    }

    return result.data;
  } catch (error) {
    console.error('Помилка запиту до Nova Poshta API:', error);
    return [];
  }
};
export const getPostamats = async (cityRef: string): Promise<NPWarehouse[]> => {
  try {
    const response = await fetch('https://api.novaposhta.ua/v2.0/json/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        API_KEY,
        modelName: 'AddressGeneral',
        calledMethod: 'getWarehouses',
        methodProperties: {
          CityRef: cityRef,
          WarehouseTypeRef: '9a68df0d-ff13-11e3-8c4a-0050568002cf', // Ref типу "Postomat"
        },
      }),
    });

    const result = await response.json();

    if (!result.success) {
      console.error('Помилки НП:', result.errors);
      return [];
    }

    return result.data.map((w: any) => ({
      Description: w.Description,
      Ref: w.Ref,
      Number: w.Number,
      CityRef: w.CityRef,
      WarehouseType: w.WarehouseType,
    }));
  } catch (err) {
    console.error('Помилка при отриманні поштоматів:', err);
    return [];
  }
};
export const getBranches = async (cityRef: string): Promise<NPBranch[]> => {
  try {
    const response = await fetch('https://api.novaposhta.ua/v2.0/json/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        API_KEY,
        modelName: 'AddressGeneral',
        calledMethod: 'getWarehouses',
        methodProperties: {
          CityRef: cityRef,
          WarehouseTypeRef: '',
        },
      }),
    });

    const result = await response.json();
    if (!result.success) {
      console.error('Помилки НП:', result.errors);
      return [];
    }

    return result.data
      .filter((w: any) => w.CategoryOfWarehouse === 'Branch')
      .map((w: any) => ({
        Description: w.Description,
        Ref: w.Ref,
        Number: w.Number,
        CityRef: w.CityRef,
        WarehouseType: w.WarehouseType,
      }));
  } catch (err) {
    console.error('Помилка при отриманні відділень:', err);
    return [];
  }
};
