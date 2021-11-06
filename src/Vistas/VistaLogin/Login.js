import React, {useCallback, useContext} from 'react';
import {Contenedor} from "./Login.styles"
//import { FirebaseAuth } from "react-firebaseui";
import  {auth} from "../../services/firebase"
import { AuthContext } from "../../Context";
import { withRouter, Redirect } from "react-router-dom";
import {signInWithEmailAndPassword} from "@firebase/auth";


const SignIn = ({history}) => {
  //Obtenemos el estado del user en el context
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await 
          signInWithEmailAndPassword(auth,email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );
    const {currentUser} = useContext(AuthContext);
     if (currentUser){
       return <Redirect to ="/" />;
     }
    return (
      <div>
      <h1>Log in</h1>
      <form onSubmit={handleLogin}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">Log in</button>
      </form>
      
    </div>

  );
};

export default SignIn;