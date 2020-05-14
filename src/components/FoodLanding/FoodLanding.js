import React from 'react';
import './FoodLanding.css';
import myData from '../../data';
import { useState } from 'react';
import { useEffect } from 'react';
import FoodCategory from '../FoodCategory/FoodCategory';
import Cart from '../Cart/Cart';
import { Link } from 'react-router-dom';
import { getDatabaseCart } from '../../utilities/databaseManager';

const FoodLanding = () => {
    const [foodItem, setFoodItem] = useState([]);
    const [cart, setCart] = useState([]);


    useEffect(() => {

        const data = myData.filter(food => food.category === "breakfast");
        setFoodItem(data);
        const saveCart = getDatabaseCart();
        setCart(saveCart);

    }, [])

    let cartItem = Object.keys(cart).map((k) => cart[k]);
    console.log(cartItem.length);



    const handleBreakFast = () => {

        const data = myData.filter(food => food.category === "breakfast");
        setFoodItem(data);


    }

    const handleLunch = () => {
        const data = myData.filter(food => food.category === "lunch");
        setFoodItem(data);
    }
    const handleDinner = () => {
        const data = myData.filter(food => food.category === "dinner");
        setFoodItem(data);
    }
    return (
        <div className="container">
            <div>
                <div className="d-flex justify-content-center">

                    <button onClick={handleBreakFast} className="menuButton">Breakfast</button>
                    <button onClick={handleLunch} className="menuButton">Lunch</button>
                    <button onClick={handleDinner} className="menuButton">Dinner</button>
                </div>

            </div>
            <div className="foodItem">

                <div className="row">

                    {
                        foodItem.map(fd => <FoodCategory key={fd.id} foodItem={fd}></FoodCategory>)
                    }

                </div>

                <div className="d-flex justify-content-center">
                    <Link to="/order">
                        {
                            cartItem.length > 0 ?
                                <button className="placeOrderBtn" enable="true" >Checkout Your Food</button>
                                :
                                <button className="placeOrderBtn" disabled>Checkout Your Food</button>
                        }

                    </Link>

                </div>
            </div>

        </div>
    );
};

export default FoodLanding;