import React from 'react';
import './FoodLanding.css';
import { useState } from 'react';
import { useEffect } from 'react';
import FoodCategory from '../FoodCategory/FoodCategory';
import { Link } from 'react-router-dom';
import { getDatabaseCart } from '../../utilities/databaseManager';
import { useAuth } from '../Login/useAuth';


const FoodLanding = () => {

    const auth=useAuth();
    console.log(auth.user);
    
    const [foodItem, setFoodItem] = useState([]);
    const [cart, setCart] = useState([]);
    const [totalFood,setTotalFood]=useState([]);

    useEffect(() => {
        fetch('http://localhost:4200/product')
            .then(res => res.json())
            .then(data => {
                setTotalFood(data);

            })
    }, [])



    useEffect(() => {

        const data = totalFood.filter(food => food.category === "breakfast");
        setFoodItem(data);
        const saveCart = getDatabaseCart();
        setCart(saveCart);

    }, [totalFood])


    let cartItem = Object.keys(cart).map((k) => cart[k]);
    // console.log(cartItem.length);



    const handleBreakFast = () => {

        const data = totalFood.filter(food => food.category === "breakfast");
        setFoodItem(data);
    }

    const handleLunch = () => {
        const data = totalFood.filter(food => food.category === "lunch");
        setFoodItem(data);
    }
    const handleDinner = () => {
        const data = totalFood.filter(food => food.category === "dinner");
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