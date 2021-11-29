import { useState } from "react";
import {
    Wrapper,
    Text,
    Price, 
    Image,
    CounterWrapper,
    Counter,
    ButtonWrapper,
    Button
} from "../CartItem/CartItem.styles";
import { useDispatch } from "react-redux";
import { deleteItem } from "../redux/actions";
import { CloseOutlined } from '@ant-design/icons'
import GoldCreekPond from "../../icons/GoldCreekPond.jpg";
import AppenzellDistrict from "../../icons/AppenzellDistrict.jpg";
import Uttarakhand from "../../icons/Uttarakhand.jpg";
import Algeria from "../../icons/Algeria.jpg";


export function CartItem(item) {
    const [voucherAmount, updateAmount] = useState(1);
    const dispatch = useDispatch();

    function decreaseAmount() {
        if (voucherAmount > 1) {
            updateAmount(voucherAmount - 1);
        }
    }

    function increaseAmount() {
        updateAmount(voucherAmount + 1);
    }

    function returnImage(name) {
        if (name == "Gold Creek Pond") 
            return GoldCreekPond;
        if (name == "Appenzell District")
            return AppenzellDistrict;
        if (name == "Uttarakhand")
            return Uttarakhand;
        if (name == "Algeria")
            return Algeria;
    }

    function removeItem(name) {
        dispatch(deleteItem({name}))
    }

    return (
        <>
            <Wrapper>
                <Image src={returnImage(item.name)}/>
                <Text>{item.name}</Text>
                <CounterWrapper>
                    <ButtonWrapper>
                        <Button onClick={decreaseAmount}>-</Button>
                        <Counter>{voucherAmount}</Counter>
                        <Button onClick={increaseAmount}>+</Button>
                    </ButtonWrapper>
                </CounterWrapper>
                <Price>Price: {item.price * voucherAmount}</Price>
                <CloseOutlined style={{alignSelf: "flex-start"}} onClick={() => removeItem(item.name)}/>
            </Wrapper>
        </>
    );
}
