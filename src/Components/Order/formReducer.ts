import { initialFormData } from '../../Helper';
import type { DataForm, PayData } from '../../types';

export type FormAction =
  | { type: 'SET_FIELD'; section: keyof DataForm; field: string; value: string }
  | { type: 'RESET' }
  | { type: 'SET_DATES'; start: Date; end: Date }
  | { type: 'SET_TIME'; time: string }
  | { type: 'SET_PAY'; payData: PayData };

export const formReducer = (state: DataForm, action: FormAction): DataForm => {
  switch (action.type) {
    case 'SET_FIELD':
      return {
        ...state,
        [action.section]: {
          ...state[action.section],
          [action.field]: action.value,
        },
      };
    case 'SET_DATES':
      return {
        ...state,
        deliveryData: {
          ...state.deliveryData,
          deliveryDateStart: action.start,
          deliveryDateEnd: action.end,
        },
      };
    case 'SET_TIME':
      return {
        ...state,
        deliveryData: {
          ...state.deliveryData,
          deliveryTime: action.time,
        },
      };
    case 'SET_PAY':
      return {
        ...state,
        payData: {
          ...action.payData,
        },
      };
    case 'RESET':
      return initialFormData;

    default:
      return state;
  }
};
