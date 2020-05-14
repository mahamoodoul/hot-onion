import React from 'react';
import './Login.css';
import { useForm } from 'react-hook-form';
import logo from '../../images/logo2.png';
import "firebase/auth";
import * as firebase from "firebase/app";
import firebaseConfig from "../../firebase.config";
import { useAuth } from './useAuth';





const Login = () => {

    const { register, handleSubmit, errors } = useForm();
    const auth=useAuth();
    console.log(auth.user);


    

   const handleChange =() =>{
       console.log("hello");
      
   }

   const onSubmit=data=>{
       console.log(data.email);
       auth.createAccount(data.email,data.password,data.name);
        
       
   }
//    const onsubmithandeler=()=>{
//     // e.preventDefault();
//     console.log("clicked");
//     // this.props.history.push('/create');

 
    
//    }
  
    return (
        <div className="container">
        
            <div className="loginPage ">

                <div className="loginLogo">
                    <img src={logo} alt="loginLogo" />
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="login-form ">


                        <input name="name" ref={register({ required: true })} placeholder="Enter your  Name" />
                       
                        {errors.name && <span className="error">Name is required</span>}

                        <br />

                        <input name="email"  onBlur={handleChange} type="email" ref={register({ required: true })} placeholder="Enter your Email" />
                      
                        {errors.email && <span  className="error">Email is required</span>}
                        <br />
                        <input name="password"  onBlur={handleChange} type="password" ref={register({ required: true })} placeholder="Enter your Password" />
                        
                        {errors.password && <span className="error">Passd is required</span>}


                        <br />
                        <input name="retypePassword"  onBlur={handleChange} type="password" ref={register({ required: true })} placeholder="Enter your Password Again" />
                      
                        {errors.retypePassword && <span className="error">Passd is required </span>}
                        <br/>
                        <input  className="btn" type="submit" value="Sign In"/>
                        <br/>

                       
                    </div>
                </form>
               
            </div>
              
           
            
            
        </div >
    );
};

export default Login;