import React from 'react';
import './FoodCategory.css';
import { Link } from 'react-router-dom';
// import bf from '../../images/Breakfast';


const FoodCategory = (props) => {
    const { name, image, details, price, id } = props.foodItem;
    // console.log(image);
    // console.log(bf);
    // const filePath = `../../images/${image}`;

    // const imgPath=`../../images/Breakfast/breakfast1.png`;
    
    return (
        <div>
            <div className="col-md-4 ">
                <Link to={"/food/" + id}>
                    <div className="card foodCardPosition" style={{ width: '18rem', border: 'none' }}>
                        <img src={require( "../../images/" + image )} className="card-img-top foodImage" alt="foooditem" />

                        <div className="card-body itemDetails ">
                            <p className="d-flex justify-content-center details">{name}</p>
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


// {`../img/${img.code}.jpg`}