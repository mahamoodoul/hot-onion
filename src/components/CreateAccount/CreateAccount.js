import React from 'react';
import logo from '../../images/logo2.png';
import { useForm } from 'react-hook-form';
import { useAuth } from '../Login/useAuth';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";




const CreateAccount = () => {

    const history=useHistory();
    const { register, handleSubmit, errors } = useForm();
    const auth = useAuth()
    console.log(auth.user);
    



    const handleChange = () => {
        console.log("hello");
       

    }

    const onSubmit = data => {

       auth.signInUser(data.email, data.password)
       history.push('/order');
       
        // console.log('redirected now');
        // window.location.pathname='/order';
    
        // console.log(loggedInUser);
        // if(loggedInUser){
        //     history.push('/order');
        // }
       

    }

    return (
        <div className="container">

            <div className="loginPage ">

                <div className="loginLogo">
                    <img src={logo} alt="loginLogo" />
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="login-form ">




                        <input name="email" onBlur={handleChange} type="email" ref={register({ required: true })} placeholder="Enter your Email" />

                        {errors.email && <span className="error">Email is required</span>}
                        <br />
                        <input name="password" onBlur={handleChange} type="password" ref={register({ required: true })} placeholder="Enter your Password" />

                        {errors.password && <span className="error">Passd is required</span>}


                        <br />
                      

                            <input className="btn" type="submit" value="Sign In" />
                    

                        <br />


                    </div>
                </form>

            </div>




        </div >
    );
};

export default CreateAccount;