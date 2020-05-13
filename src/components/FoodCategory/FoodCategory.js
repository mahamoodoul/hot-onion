import React from 'react';
import './FoodCategory.css';
import { Link } from 'react-router-dom';

const FoodCategory = (props) => {
    const { name, image, details, price,id } = props.foodItem;
    return (
        <div>
            <div className="col-md-4 ">
                <Link to={"/food/"+id}>
                    <div className="card foodCardPosition" style={{ width: '18rem', border:'none' }}>
                        <img src={image} className="card-img-top foodImage" alt="foooditem" />

                        <div className="card-body itemDetails ">
                            <p  className="d-flex justify-content-center details">{name}</p>
                            <p className="d-flex justify-content-center"><small>{details}</small> </p>
                            <h4 className="d-flex justify-content-center">${price}</h4>
                        </div>
                    </div>
                    </Link>
            </div>



        </div>
    );
};

export default FoodCategory;