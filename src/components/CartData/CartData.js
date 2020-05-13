import React from 'react';
import './CartData.css';
import { useState } from 'react';

const CartData = (props) => {
    const { count, setCount } = useState(1);

    console.log(props.products);
    const { name, price, image, quantity } = props.products;

    return (
        <div>

            <div className=" row caartItemDetails ">
                <div className="col-md-4">
                    <img className="imageDecoration" src={image} alt="foodimg" />
                </div>
                <div className="col-md-4 cartoption" style={{ paddingLeft: '50px', paddingTop: '15px' }}>
                    <p >{name.substring(0,15)}</p>
                    <p style={{color:'red', fontWeight:'bold'}}>${price}</p>
                    <p > <small>Delivery Free</small> </p>

                </div>
                <div className="col-md-4">
                    <div className="input-group qunatityDecoration">

                        <button type="button" className="quantity-left-minus btn btn-danger btn-number btnSizing" data-type="minus" data-field="">-</button>

                        <p className="quantity">{quantity}</p>

                        <button type="button" className="quantity-right-plus btn btn-success btn-number btnSizing" data-type="plus" data-field="">+</button>

                    </div>

                </div>




            </div>

        </div >

    );
};

export default CartData;