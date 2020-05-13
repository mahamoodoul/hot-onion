import React from 'react';
import Shipment from './../Shipment/Shipment';
import Cart from '../Cart/Cart';

const Order = () => {
    return (
        <div className="container">
            <div className="d-flex justify-content-center">

                <button className="menuButton">Breakfast</button>
                <button className="menuButton">Lunch</button>
                <button className="menuButton">Dinner</button>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <Shipment></Shipment>
                </div>
                <div className="col-md-6">
                    <Cart></Cart>
                </div>
            </div>
        </div>
    );
};

export default Order;