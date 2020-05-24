import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import myData from '../../data';
import './FoodDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import { addToDatabaseCart } from '../../utilities/databaseManager';



const FoodDetails = () => {

    const { id } = useParams();
    const [details, setDetails] = useState([]);
    const [qunatity, setQuantity] = useState(1);

    useEffect(() => {
        fetch('http://localhost:4200/foodDetails/' + id)
            .then(res => res.json())
            .then(data => {
                setDetails(data);
            })
    }, [id]);

    console.log(details);
    const img = details.image;
    console.log(img);
    
    const itemDetails = myData.find(fdKey => fdKey.id === id);
    

    const foodOrder = () => {
        addToDatabaseCart(itemDetails.id, qunatity);
    }

    return (
        <div className="container">

            <div className="d-flex justify-content-center">

                <button className="menuButton">Breakfast</button>
                <button className="menuButton">Lunch</button>
                <button className="menuButton">Dinner</button>

            </div>

            <div className="row foodDetailsSize">
                <div className="col-md-6">
                    <h1 className="foodName">{details.name} </h1>

                    <p>{details.details}. Food is any substance consumed to provide nutritional support for an organism. Food is usually of plant or animal origin, and contains essential nutrients, such as carbohydrates, fats, proteins, vitamins, or minerals.</p>
                    <div className="row">

                        <div className="col-md-6">
                            <h1 className="foodName">${details.price}</h1>
                        </div>
                        <div className="col-md-6  cartQuantity">

                            <div className="input-group">

                                <button onClick={() => setQuantity(qunatity - 1)} style={{ marginLeft: '5px' }} type="button" className="quantity-left-minus btn btn-danger btn-number btnSize" data-type="minus" data-field="">-</button>

                                <p className="quantity">{qunatity}</p>

                                <button onClick={() => setQuantity(qunatity + 1)} type="button" className="quantity-right-plus btn btn-success btn-number btnSize" data-type="plus" data-field="">+</button>

                            </div>

                        </div>

                    </div>

                    <button onClick={foodOrder} className="productAddButton"><FontAwesomeIcon icon={faShoppingCart} /> Add</button>

                </div>


                <div className="col-md-6">
                    <img className="imageDetailsSize" src={require("../../images/" + itemDetails.image)} alt="foodimage" />
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;