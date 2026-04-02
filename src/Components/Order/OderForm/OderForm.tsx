import { useEffect, useState, type FC } from 'react';
import { BorderDown, FormContainer } from './OrderForm.styled';
import { Courier, localStorageItemsKeys } from '../../../Helper';
import type {
  Actives,
  Card,
  CheckFormOrder,
  DataForm,
  PayData,
} from '../../../types';
import type { FormAction } from '../formReducer';
import { PickupDataField } from './OrderFormFields/PickupData/PickupDataField';
import { ContactDataField } from './OrderFormFields/ContactData/ContactDataField';
import { MessageDataField } from './OrderFormFields/MessageData/MessageDataField';
import { PayDataField } from './OrderFormFields/PayData/PayDataField';

interface IOrderFormProps {
  selected: string;
  submit: boolean;
  form: DataForm;
  dispatch: React.ActionDispatch<[action: FormAction]>;
  setCheckFormOrdr: React.Dispatch<React.SetStateAction<CheckFormOrder>>;
}

export const OrderForm: FC<IOrderFormProps> = ({
  selected,
  submit,
  form,
  dispatch,
  setCheckFormOrdr,
}) => {
  const [open, setOpen] = useState(false);
  const [cards, setCards] = useState<Card[]>(() => {
    let data = [];
    const localData = localStorage.getItem(localStorageItemsKeys.cards);
    if (localData) data = JSON.parse(localData);
    else data = [];
    return data;
  });
  const [actives, setActives] = useState<Actives>(() => {
    return {
      cardNumber: cards[0]?.cardNumber || '',
      containerId: '',
    };
  });
  useEffect(() => {
    const today = new Date();
    const weekLater = new Date();
    weekLater.setDate(today.getDate() + 7);
    dispatch({
      type: 'SET_DATES',
      start: today,
      end: weekLater,
    });
  }, []);
  useEffect(() => {
    if (cards.length > 0) {
      const card = cards[cards.length - 1];
      const payData: PayData = {
        cardNumber: card.cardNumber,
        date: card.image,
      };
      setActives((prev) => ({
        ...prev,
        cardNumber: card.cardNumber,
      }));
      dispatch({
        type: 'SET_PAY',
        payData,
      });
    }
  }, [cards]);

  // useEffect(() => {
  //   cardRefs.current[actives.cardNumber]?.scrollIntoView({
  //     behavior: 'smooth',
  //     block: 'center',
  //   });
  // }, [actives.cardNumber]);
  const onChangeInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const value = e.currentTarget.value;
    const [sectionStr, field] = e.currentTarget.name.split(',');
    const section = sectionStr as keyof DataForm;
    dispatch({
      type: 'SET_FIELD',
      section,
      field,
      value,
    });
  };
  return (
    <>
      <FormContainer>
        <ContactDataField
          dispatch={dispatch}
          setCheckFormOrdr={setCheckFormOrdr}
          onChangeInput={onChangeInput}
          submit={submit}
          contactData={form.contactData}
        />
        {selected === Courier.key ? (
          <PickupDataField
            setOpen={setOpen}
            open={open}
            dispatch={dispatch}
            setCheckFormOrdr={setCheckFormOrdr}
            onChangeInput={onChangeInput}
            adress={form.deliveryAdress}
            submit={submit}
          />
        ) : null}
        <MessageDataField
          message={form.deliveryData.message}
          onChangeInput={onChangeInput}
        />
        <PayDataField
          actives={actives}
          setCards={setCards}
          submit={submit}
          setCheckFormOrdr={setCheckFormOrdr}
          cards={cards}
          setActives={setActives}
        />
      </FormContainer>
      <BorderDown />
      <div
        style={{
          marginTop: '30px',
          height: '1px',
        }}
      />
    </>
  );
};
