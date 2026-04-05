import React, {Suspense} from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Success from '../pages/Success';
import Loader from '../Components/Loader';

const Cart = React.lazy(() => import("../pages/Cart"));
const CheckOut = React.lazy(() => import("../pages/Checkout"));
const FoodDetail = React.lazy(() => import("../pages/FoodDetails"));
const Foods = React.lazy(() => import("../pages/Foods"));
const AppRoute = () => {
    return (
    <Suspense fallback={<Loader />}>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/foods" element={<Foods />} />
            <Route path="/foods/:id" element={<FoodDetail />} />
            <Route path="/checkout" element={<CheckOut />} />
            <Route path="*" element={<NotFound />} /> 
            <Route path="/success" element={<Success />} />  
        </Routes>
    </Suspense>
    )
}

export default AppRoute