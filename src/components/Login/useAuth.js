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
  console.log(auth);



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









const Auth = () => {

  const [user, setUser] = useState(null);
 



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

 

  const signInUser = (email, password) => {

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(res =>{
      console.log(res);
      const createdUser= {...user};
      setUser(createdUser);
    })
    .catch(err =>{
      console.log(err.message);
      const createdUser= {...user};
      setUser(createdUser);
    })

  }



  const signOutuser = () => {
    firebase.auth().signOut().then(function () {
      setUser(null);
      return true;
    }).catch(function (error) {
      // An error happened.
      console.log(error);
      return false;
    });
  }





  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (usr) {
      if (usr) {
          firebase.database().ref('users/' + usr.uid) //reference uid of logged in user like so
            .on('value', (snapshot) => {
              const data = snapshot.val() || [];

              const nameValue = data.firstName;
              const email = usr.email;
              const id = usr.uid
              const userValue = { email, name: nameValue, uid: id };
              setUser(userValue);
            });
      } 
    });


  }, [])


  return {
    user,
    createAccount,
    signInUser,
    signOutuser

  }

}
export default Auth;


