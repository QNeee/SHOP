import type { FC } from "react";
import acceptImage from "../../../assets/OrderAcceptImage.png";
import type { Ordered } from "../../../types";
import { initialOrdered, Paths, useIsmobileWidth } from "../../../Helper";
import { Border, OrderAcceptContainer, OrderedAcceptTextContainer, PurpleText } from "./OrderAccept.styled";
import { BasketButton } from "../../Basket/Basket.styled";
import { useNavigate } from "react-router-dom";
interface IOrderAccept {
    message: string;
    date: string;
    time: string | null;
    setOrdered: React.Dispatch<React.SetStateAction<Ordered>>
}
export const OrderAccept: FC<IOrderAccept> = ({ message, date, time, setOrdered }) => {
    const isMobile = useIsmobileWidth();
    console.log(isMobile);
    const navigate = useNavigate();
    return <>
        <OrderAcceptContainer>
            <h3>Заказ Оформлено</h3>
            <img src={acceptImage} alt={"accept"} />
            <OrderedAcceptTextContainer>
                <p>Доставка очікується: <PurpleText>{date}</PurpleText></p>
                {time ? <p>Час доставки: <PurpleText>{time}</PurpleText></p> : null}
                <p>{message}</p>
            </OrderedAcceptTextContainer>
            <BasketButton onClick={() => {
                navigate(Paths.catalog);
                setOrdered(initialOrdered)
            }}>Перейти в каталог</BasketButton>
        </OrderAcceptContainer>
        {isMobile ? <Border></Border> : null}
    </>
}