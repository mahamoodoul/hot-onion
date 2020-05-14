import React from 'react';
import { useForm } from 'react-hook-form';
import './Shipment.css';
const Shipment = (props) => {
    const { register, handleSubmit, errors } = useForm();
   
    return (
        <div className="formReforming">
            <form className="ship-form" onSubmit={handleSubmit((props.getUserDetails))}>

                <h3>Edit Delivery Details</h3>
                <hr />
                <input name="door"  ref={register({ required: true })} placeholder="Enter your  Area"  />
                {errors.door && <span className="error">Name is required</span>}



                <input name="Address" ref={register({ required: true })} placeholder="Enter your Address" />
                {errors.Address && <span className="error">Address is required</span>}

                <input name="flat" ref={register({ required: true })} placeholder="Enter your Flat No" />
                {errors.flat && <span className="error">Flat is required</span>}



                <input name="name" ref={register({ required: true })} placeholder="Enter your Business Name" />
                {errors.name && <span className="error">Business Name is required</span>}

                <textarea name="instructor" ref={register({ required: true })} placeholder="Add Delivery Instructor" rows="4" cols="50">

                </textarea>
                {errors.instructor && <span className="error">Add Delivery Instructor is required</span>}


                <input className="shipmentBtn" type="submit" value="Submit & Continue" />
            </form>
        </div>
    );
};

export default Shipment;