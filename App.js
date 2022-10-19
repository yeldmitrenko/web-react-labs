import './App.css';
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Footer } from "./components/Footer/Footer";
import { Catalog } from './components/Catalog/Catalog'; 
import { Cart } from './components/Cart/Cart';
import {BrowserRouter, Switch, Route,} from "react-router-dom";
import { SuccessOrder } from "./components/SuccessOrder/SuccessOrder";
import { Checkout } from "./components/Checkout/Checkout";

function App() {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route exact path="/">
                        <Header/>
                        <Home/>
                    </Route>
                    <Route path="/catalog">
                        <Catalog/>
                    </Route>
                    <Route path="/cart">
                        <Header/>
                        <Cart/>
                    </Route>
                    <Route path="/checkout">
                        <Checkout />
                    </Route>
                    <Route path="/success">
                        <SuccessOrder />
                    </Route>
                </Switch>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
