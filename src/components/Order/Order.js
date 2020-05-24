import React, { useEffect } from 'react';
import Shipment from './../Shipment/Shipment';
import Cart from '../Cart/Cart';
import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../Checkout/Checkout';
import { useAuth } from '../Login/useAuth';
import { getDatabaseCart, processOrder } from '../../utilities/databaseManager';

const Order = () => {


    const auth = useAuth();
    console.log(auth.user);
    

    const [userInfo, setUserInfo] = useState([]);
    const [orderId, setOrderId] = useState(null);
    const [nameEmail,setNameEmail]=useState([]);

    const getUserDetails = (data) => {

        setUserInfo(data);
    }

    // let shipmentInfo = Object.keys(userInfo).map((k) => userInfo[k]);
 

    const stripePromise = loadStripe('pk_test_hzAOqcMkqrUNkVutbLJYHrUT00nhXvanXe');
    useEffect(() =>{
       
        setNameEmail(auth.user)
    },[auth.user])

   console.log(nameEmail);
   
    
    const handlePlaceOrder = (payment) => {
        const savedCart = getDatabaseCart();
        const orderDetails = {
            NnameEmail: nameEmail,
            cart: savedCart,
            shipment: userInfo,
            payment: payment
        };
        fetch('http://localhost:4200/placeOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        })
            .then(res => res.json())
            .then(order => {
                console.log("Order successfully placed", order);
                setOrderId(order._id);
                processOrder(); //from local storage
                alert("Succesfully placed your order..Id is : " + order._id);

            })

    };

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
            <div className="row">
                 <div className="col-md-6" >
                    <h1>Payment Method Here</h1>
                    <Elements stripe={stripePromise}>
                        <CheckoutForm handlePlaceOrder={handlePlaceOrder} />
                    </Elements>
                    <br />
                    {
                        orderId && <div>
                            <h3>Thank you for shopping with us</h3>
                            <p>Your order id is: {orderId}</p>
                        </div>
                    }

                    </div>
                
                <div className="col-md-6">

                </div>

            </div>
        </div>
    );
};

export default Order;