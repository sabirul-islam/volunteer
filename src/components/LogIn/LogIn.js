import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import { Button, Jumbotron } from 'react-bootstrap';

const LogIn = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleSignIn = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleProvider).then(function(result) {
            const {displayName, email} = result.user;
            const signedInUser = {name: displayName, email: email}
            setLoggedInUser(signedInUser);
            history.replace(from);

          }).catch(function(error) {
            const errorMessage = error.message;
            console.log(errorMessage);
          });
    }

    return (
        <div>
            <Jumbotron className='m-5'>
                <h1 className='mb-4 text-center'>Login With</h1>

                <p className='text-center'>
                <Button onClick={handleGoogleSignIn} pill variant="light">Continue With Google</Button>
                </p>

                <p className='mt-4 text-center'>
                Don't have an account? create an account
                </p>
            </Jumbotron>
        </div>
    );
};

export default LogIn;