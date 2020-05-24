import React, { useState } from 'react';
import { useAuth } from '../Login/useAuth';
import map from '../../images/map.png';
import './Delivery.css';
import delivery from '../../images/delivery.PNG';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import man from '../../images/ICON/man.png';

const Delivery = () => {

    // const [name,setName]=useState(null);
    const auth = useAuth();

    if (auth.user) {
       var name=auth.user.name
    }
    else{
         name="null"
    }





    return (
        <div className="container">
            <div className="d-flex justify-content-center">

                <button className="menuButton">Breakfast</button>
                <button className="menuButton">Lunch</button>
                <button className="menuButton">Dinner</button>
            </div>
            <div className="row contentLayout">
                <div className="col-md-6 imageContent">
                    <img className="mapImage" src={map} alt="map" />
                </div>
                <div className="col-md-6">
                    <div className="deliveryContent">
                        <div className="contentPosition">
                            <div className="d-flex justify-content-start imagePosition">
                                <img className="deliveryImage" src={delivery} alt="delivery" />
                            </div>

                            <div className="deliveryAddress ">
                                <p className="d-flex justify-content-start"><FontAwesomeIcon icon={faCircle} color="red" />Your Location</p>
                                <p className="d-flex justify-content-start"> <small>square hospital</small> </p>
                                <p className="d-flex justify-content-start"><FontAwesomeIcon icon={faCircle} color="red" /> Your Address</p>
                                <p className="d-flex justify-content-start"> <small>sukrabad </small> </p>
                            </div>
                            <div>
                                <h3 className="d-flex justify-content-start">09:30</h3>
                                <p> <small className="d-flex justify-content-start">Estimated Delivery Time</small></p>
                            </div>
                            <div className="userInfo">
                                <div className="userImage">
                                    <img className="d-flex justify-content-start" src={man} alt="man " />
                                </div>

                                <div className="userName">
                                    <p className="useralign">{name}</p>
                                    <p className="useralign"><small>Your Rider</small></p>
                                </div>

                            </div>
                            <div className="d-flex justify-content-start">
                                <button className="contactBtn">Contact</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Delivery;