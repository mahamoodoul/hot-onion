import React from 'react';
import { useAuth } from '../Login/useAuth';
import myData from '../../data';
const Delivery = () => {
    // const auth = useAuth();
    const dataAdd=() =>{
        // const product=myData;
        //     console.log('before post',product);

        //     fetch('http://localhost:4200/addProducts',{
        //         method: 'POST',
        //         headers: {
        //             'Content-Type' : 'application/json'
        //         },
        //         body : JSON.stringify(product)
        //     })
        //     .then(res =>res.json())
        //     .then(data =>{
        //         console.log("Post Success",data);
                
        //     })
        console.log("clicked");
        
        
    }

    return (
        <div>
            <button onClick={dataAdd}>data add</button>
        </div>
    );
};

export default Delivery;