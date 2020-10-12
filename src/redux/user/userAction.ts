import {LOGIN_USER_INITIATE, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE, LOGOUT_USER_REQUEST, LoginActionTypes} from './userType'
import axios from 'axios';
import { Dispatch } from 'redux';
import { LoginResponse } from '../../model/LoginResponse';
import { AppActions } from '../../model/actions';
//const axios = require('axios');


export const loginInitiateAction = () : AppActions => {
    return {
        type : LOGIN_USER_INITIATE
    }
}

export const successRequestAction = (users : any) : AppActions => {
    return {
        type : LOGIN_USER_SUCCESS,
        payload : users
    }
}

export const failureRequestAction = (err:string) : LoginActionTypes => {
    return {
        type : LOGIN_USER_FAILURE,
        payload : err
    }
}

export const loginAction  = (username:string, password:string) : any => async (dispatch:Dispatch<LoginActionTypes>) => {
    try {
        dispatch({type : LOGIN_USER_INITIATE});

        const response = await axios.get('https://xebiascart.herokuapp.com/users?username=amigo');  
        const user = response.data[0];

        //console.log("asyncLoginAction ",user," == ",user.username, " = ",user.password," == ",username," = ",password)
        if(user.username == username && user.password == password) {
            
            localStorage.setItem("userInfo", JSON.stringify(user))
                /*return dispatch( {
                    type : LOGIN_USER_SUCCESS,
                    payload : user
                });*/
                return successRequestAction(user);
        }
        else {
            /*return dispatch({
                type : LOGIN_USER_FAILURE,
                payload : "Login Failed"
            });*/
            return failureRequestAction("Login Failed");
        } 
        
        
    }catch(e) {
        /*return dispatch({
            type : LOGIN_USER_FAILURE,
            payload : "Login Failed"
        });*/
        return failureRequestAction("Login Failed");
    }
}

/*export const logoutAction  = () : any => {    
    return (dispatch:Dispatch<LoginActionTypes>) => {
        dispatch({type:LOGOUT_USER_REQUEST});
        localStorage.setItem("userInfo", "null");
    } 
}*/

export const logoutAction  = () : any => (dispatch:Dispatch<LoginActionTypes>) => {
    dispatch({type:LOGOUT_USER_REQUEST});
    localStorage.setItem("userInfo", "null");

}
