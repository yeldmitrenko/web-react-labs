import { Wrapper, Image, TextWrapper, Text } from "./VoucherItems.styles";
import GoldCreekPond from "../../icons/GoldCreekPond.jpg";
import AppenzellDistrict from "../../icons/AppenzellDistrict.jpg";
import Uttarakhand from "../../icons/Uttarakhand.jpg";
import { Label } from "../Home/Home.styles";

export const VoucherItems = () => {
    return (
        <div>
            <Wrapper>
                <Image src={GoldCreekPond}/>
                <TextWrapper>
                    <Label>Gold Creek Pond</Label>
                    <Text>USA</Text>
                </TextWrapper>
            </Wrapper>
            <Wrapper>
                <Image src={AppenzellDistrict} style={{width: '700px'}}></Image>
                <TextWrapper style={{textAlign: 'right'}}>
                    <Label>Appenzell District</Label>
                    <Text>Switzerland</Text>
                </TextWrapper>
            </Wrapper>
            <Wrapper>
                <Image src={Uttarakhand}></Image>
                <TextWrapper style={{textAlign: 'right'}}>
                    <Label>Uttarakhand</Label>
                    <Text>India</Text>
                </TextWrapper>
            </Wrapper>
        </div>
    );
}