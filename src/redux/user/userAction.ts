import {LOGIN_USER_INITIATE, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE, LOGOUT_USER_REQUEST} from './userType'
import axios from 'axios';
import { Dispatch } from 'redux';
//const axios = require('axios');

export const loginInitiateAction = () => {
    return {
        type : LOGIN_USER_INITIATE
    }
}

export const successRequestAction = (users : any) => {
    return {
        type : LOGIN_USER_SUCCESS,
        payload : users
    }
}

export const failureRequestAction = (err:string) => {
    return {
        type : LOGIN_USER_FAILURE,
        payload : err
    }
}


export const loginAction  = (username:string, password:string) : any => {

    return (dispatch:Dispatch) => {

        dispatch(loginInitiateAction());
        return axios.get('https://xebiascart.herokuapp.com/users?username=amigo', {})
        .then( response => {

            //console.log(response);
            const user = response.data[0];

            //console.log("asyncLoginAction ",user," == ",user.username, " = ",user.password," == ",username," = ",password)
            if(user.username == username && user.password == password) {
                
                localStorage.setItem("userInfo", JSON.stringify(user))
                return dispatch( successRequestAction(user));
            }
            else {
                return dispatch( failureRequestAction("Login Failed"));
            } 
            
        })
        .catch( error => {
            console.log(error);
            return dispatch(failureRequestAction(error));
        })
        .finally(function () {
            // always executed
        });  
    }    
}

export const logoutAction  = () : any => {    
    return (dispatch:Dispatch) => {
        dispatch({type:LOGOUT_USER_REQUEST});
        localStorage.setItem("userInfo", "null");
    } 
}
