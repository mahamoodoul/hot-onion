import React from 'react';
import './Cart.css';
import myData from '../../data';
import { useState } from 'react';
import { getDatabaseCart } from '../../utilities/databaseManager';
import { useEffect } from 'react';
import CartData from '../CartData/CartData';

const Cart = () => {


    const [cartFood, setCartFood] = useState([]);



    useEffect(() => {
        const data = myData;
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const previousCart = productKeys.map(existingkey => {
            const product = data.find(fd => fd.id === existingkey);
            product.quantity = savedCart[existingkey];
            return product;
        })
        setCartFood(previousCart);

    }, []);

    console.log(cartFood);
    var price = 0;
    var totalprice = 0;
    for (let i = 0; i < cartFood.length; i++) {
        price = Number(cartFood[i].price) * Number(cartFood[i].quantity);
        totalprice = totalprice + price;
         
    }
    
    console.log(totalprice);
    const deliverFee = 5;
    const tax = 4.50;
    const formatNumber =(num ) =>{
        const precision=num.toFixed(2);
        return Number(precision);
    }
    const total=formatNumber(totalprice);
    const fee=formatNumber(deliverFee);
    const vat= formatNumber(tax);
    

    var totalPriceWithAll= (total)+(fee)+(vat);


    return (
        <div>
            <div className="cartDetails">
                <div >
                    <p>From <span >Gulshan Plaza Restura GPR</span></p>
                    <p>Arriving in 20-30 min</p>
                    <p>107 Road No. 8 </p>
                </div>
                {
                    cartFood.map(fd => <CartData key={fd.id} products={fd} ></CartData>)
                }
                <div className="cartPayment">
                    <div className="row">
                        <div className="col-md-6">
                            <p> <small>Subtotal : {cartFood.length} Item </small>  </p>
                            <p> <small>Delivery Fee</small></p>
                            <p> <small>Taxt & Vat</small></p>
                            <h5>Total</h5>

                        </div>
                        <div className="col-md-6 cartValue">
                            <p> <small>$ {total}</small></p>
                            <p> <small>$ {fee}</small></p>
                            <p> <small>$ {vat}</small></p>
                            <h5>$ {totalPriceWithAll}</h5>

                        </div>

                    </div>

                    <button className="placeOrderBtn">Place Order</button>



                </div>

            </div>

        </div>
    );
};

export default Cart;