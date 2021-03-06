import React from 'react';
import './Cart.css';
import { useState } from 'react';
import { getDatabaseCart } from '../../utilities/databaseManager';
import { useEffect } from 'react';
import CartData from '../CartData/CartData';
import { Link } from 'react-router-dom';

const Cart = (props) => {

    const [cartFood, setCartFood] = useState([]);
    const [products, setProducts] = useState([]);

    const userShippingInfo = props.userInfo;
    // console.log(userShippingInfo);
    // console.log(userShippingInfo.length);

    let user = Object.keys(userShippingInfo).map((k) => userShippingInfo[k]);

    useEffect(() => {
        fetch('http://localhost:4200/product')
            .then(res => res.json())
            .then(data => {
                setProducts(data);

            })
    }, [])



    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        if (products.length) {
            const previousCart = productKeys.map(existingkey => {
                const product = products.find(fd => fd.id === existingkey);
                product.quantity = savedCart[existingkey];
                return product;
            })
            setCartFood(previousCart);
        }

    }, [products]);





    var price = 0;
    var totalprice = 0;
    for (let i = 0; i < cartFood.length; i++) {
        price = Number(cartFood[i].price) * Number(cartFood[i].quantity);
        totalprice = totalprice + price;

    }

    // console.log(totalprice);
    const deliverFee = 5;
    const tax = 4.50;
    const formatNumber = (num) => {
        const precision = num.toFixed(2);
        return Number(precision);
    }
    const total = formatNumber(totalprice);
    const fee = formatNumber(deliverFee);
    const vat = formatNumber(tax);


    var totalPriceWithAll = (total) + (fee) + (vat);


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

                    <Link to="/delivery">
                        {
                            user.length > 0 ?

                                <button className="placeOrderBtn" enable="true"  >Place Order</button>
                                :
                                <button className="placeOrderBtn" disabled  >Place Order</button>

                        }
                    </Link>



                </div>

            </div>

        </div>
    );
};

export default Cart;