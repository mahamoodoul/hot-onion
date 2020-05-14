import React from 'react';
import Shipment from './../Shipment/Shipment';
import Cart from '../Cart/Cart';
import { useState } from 'react';

const Order = () => {
    const [userInfo,setUserInfo]=useState([]);

    const getUserDetails=(data)=>{

        setUserInfo(data);    
    }
    console.log(userInfo);
    
    return (
        <div className="container">
            <div className="d-flex justify-content-center">

                <button className="menuButton">Breakfast</button>
                <button className="menuButton">Lunch</button>
                <button className="menuButton">Dinner</button>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <Shipment getUserDetails={getUserDetails}></Shipment>
                </div>
                <div className="col-md-6">
                    <Cart userInfo={userInfo}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Order;