import React from 'react';
import './FoodLanding.css';
import myData from '../../data';
import { useState } from 'react';
import { useEffect } from 'react';
import FoodCategory from '../FoodCategory/FoodCategory';

const FoodLanding = () => {
    const [foodItem, setFoodItem] = useState([]);




    useEffect(() => {

        const data = myData.filter(food => food.category === "breakfast");
        setFoodItem(data);


    }, [])


    const handleBreakFast = () => {

        const data = myData.filter(food => food.category === "breakfast");
        setFoodItem(data);


    }

    const handleLunch =() =>{
        const data = myData.filter(food => food.category === "lunch");
        setFoodItem(data);
    }
    const handleDinner= ()=>{
        const data = myData.filter(food => food.category === "dinner");
        setFoodItem(data);
    }
    return (
        <div className="container">
            <div>
                <div className="d-flex justify-content-center">

                    <button onClick={handleBreakFast} className="menuButton">Breakfast</button>
                    <button  onClick={handleLunch} className="menuButton">Lunch</button>
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
                    <button >Checkout Your Food</button>
                </div>
            </div>

        </div>
    );
};

export default FoodLanding;