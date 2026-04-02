import { useEffect, useState, type FC } from 'react';
import { BorderDown, FormContainer } from './OrderForm.styled';
import { Courier } from '../../../Helper';
import type { CheckFormOrder, DataForm } from '../../../types';
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
        <PayDataField submit={submit} setCheckFormOrdr={setCheckFormOrdr} />
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
