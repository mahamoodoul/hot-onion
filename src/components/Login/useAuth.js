import React, { useContext, useEffect } from "react";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import firebaseConfig from "../../firebase.config";
import { useState, createContext } from "react";
import { Route, Redirect } from "react-router-dom";




firebase.initializeApp(firebaseConfig);


const AuthContext = createContext();


export const AuthContextProvider = (props) => {
  const auth = Auth();
  return <AuthContext.Provider value={auth}>{props.children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext);




export const PrivateRoute = ({ children, ...rest }) => {

  const auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
      }
    />
  );
}









const getUser = user => {
  const { email } = user;
  return {  email };
}

const Auth = () => {

  const [user, setUser] = useState(null);
  const [name,setName]=useState(null);



  const createAccount = (email, password, name) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(res => {
        firebase.database().ref('users/' + res.user.uid).set({
          firstName: name
        })
        console.log(res);
        return true;
      })
      .catch(err => {
        console.log(err.message);

      })
  }

var info={};
  const signInUser = (email, password) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(res => {


        firebase.auth().onAuthStateChanged((user) => {
          if (user) {
            firebase.database().ref('users/' + user.uid) //reference uid of logged in user like so
              .on('value', (snapshot) => {
                const data = snapshot.val() || [];
                console.log(data);
               setName(data);
               info.name=data.firstName;

              });
          }
        });
        const email=res.user.email;
       
         info.email=email;
         let userDetails = Object.keys(info).map((k) => info[k]);
          setUser(userDetails);
          console.log(user);
          


      })
      .catch(err => {
        console.log(err.message);
        const createdUser = { ...user };
        setUser(createdUser);
      })
      return name;
  }







  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        //  const currentUser = getUser(usr);
        setUser(user);
        // User is signed in.
      } else {
        // No user is signed in.
      }
    });


  },[])


  return {
    user,
    createAccount,
    signInUser
  }

}
export default Auth;


