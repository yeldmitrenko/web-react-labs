import { CatalogItem } from "../CatalogItem/CatalogItem";
import { Wrapper } from "./Catalog.styles";
import GoldCreekPond from "../../icons/GoldCreekPond.jpg";
import AppenzellDistrict from "../../icons/AppenzellDistrict.jpg";
import Uttarakhand from "../../icons/Uttarakhand.jpg";
import Algeria from "../../icons/Algeria.jpg";
import { useEffect, useState } from 'react';
import { Filter } from "../Filter/Filter";
import axios from 'axios';
import CircularProgress from 'react-cssfx-loading/lib/CircularProgress';
import { Header } from "../Header/Header";
import { ItemPage } from "../ItemPage/ItemPage";


export function Catalog() {
    const [items, update] = useState(null);
    const [view, setView] = useState(null);
    useEffect(() => {
        axios.get(`http://localhost:8080/voucher`).then((response) => {
                update(response.data)});
    }, []);

    function updateItems(name, order, price, input) {
        console.log(name, order, price)
        axios.get(`http://localhost:8080/voucher/param`, {
            params:
                {
                    name: name,
                    order: order,
                    price: price
                }
        }).then((response) => {
            console.log(response.data)
            filterInput(response.data, input)
        });
    }

    function filterInput(array, input) {
        update(array.filter(item  => item.name.search(input.value) !== -1));
    }

    function toggleView(props) {
        setView(props);
    }

    function returnItems(items) {
        function createImage(name) {
            if (name == "Gold Creek Pond") 
                return GoldCreekPond;
            if (name == "Appenzell District")
                return AppenzellDistrict;
            if (name == "Uttarakhand")
                return Uttarakhand;
            if (name == "Algeria")
                return Algeria;
        }

        if (items)
            return <>
                <Filter function={updateItems}/>
                <Wrapper>
                    {items.map(item => (
                        <CatalogItem key={item.name} image={createImage(item.name)} name={item.name} price={item.price} 
                                    text={item.description} function={toggleView}/>))}
                </Wrapper>
            </>
        return <>
            <Filter function={updateItems}/>
            <Wrapper style={{padding: "200px"}}>
                <CircularProgress color="#000" width="100px" height="100px" duration="3s"/>
            </Wrapper>
        </>
    }

    if (view == null)
        return (returnItems(items))
    return (
        <>
            <Header/>
            <ItemPage item={view}/>
        </>
    )
}
