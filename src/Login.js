import React from 'react'
import {Button} from '@material-ui/core'
import './Login.css'
import {auth, provider} from "./firebase"
import { useStateValue } from './StateProvider';
import { actionTypes} from "./reducer";
function Login() {
    const [{}, dispatch] = useStateValue();

    const signIn = () =>{
      auth.signInWithPopup(provider).then(result => {
          dispatch({
              type: actionTypes.SET_USER,
              user: result.user,
          });
      }).catch((error) => alert(error.message));  
    };

    return (
        <div className="login">
            <div className="login_container">
                <img src="https://pixel77.com/wp-content/uploads/2014/07/pixel77-free-vector-chat-icon-0522-400.jpg" alt="" />
                <div className="login_text">
                    <h1>Sign in to Anom-Chat</h1>
                </div>

                <Button onClick={signIn}>
                    Sign in with Google
                </Button>
            </div>
        </div>
    )
};

export default Login;
