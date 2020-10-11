import * as Type from './productType'
import axios from 'axios';
import { Dispatch } from 'redux';
//const axios = require('axios');

export const productInitiateAction = () : any => {
    return {
        type : Type.PRODUCT_INITIATE
    }
}

export const productSuccessAction = (data:any) => {
    return {
        type : Type.PRODUCT_SUCCESS,
        payload : data
    }
}

export const productFaliureAction = (err:string) => {
    return {
        type : Type.PRODUCT_FAILURE,
        payload : err
    }
}


export const productRequestAction = () : any => {
    return (dispatch:Dispatch) => {
        dispatch(productInitiateAction());
        axios.get('https://xebiascart.herokuapp.com/products', {})
        .then( response => {
            console.log(response);
            if(response.status == 200) {
                const products = response.data;
                if(products) {
                    dispatch( productSuccessAction(products));
                }
                else {
                    dispatch( productFaliureAction("No data"));
                }
            }
            else {
                dispatch( productFaliureAction("No data"));
            }
            
            
        })
        .catch( error => {
            console.log(error);
            dispatch( productFaliureAction(error));
        })
        .finally(function () {
            // always executed
        });  
    }
}
//https://xebiascart.herokuapp.com/users?username=amigo - Login
//https://xebiascart.herokuapp.com/products - Product
//https://xebiascart.herokuapp.com/products?title=provogue - Autocomplete
//https://xebiascart.herokuapp.com/filters - Group Filter

export const searchRequestAction = (key:any) : any => {

    return (dispatch:Dispatch) => {
        return axios.get('https://xebiascart.herokuapp.com/products?title='+key, {})
        .then( response => {
            console.log("searchRequestAction ", response);
            if(response.status == 200) {
                const products = response.data;
                if(products) {
                    dispatch({type: Type.PRODUCT_SEARCH,
                              payload: products
                            });
                }
                
            }            
        })
        .catch( error => {
            console.log(error);
        })
    }
}

export const filterRequestAction = () : any=> {
    return (dispatch:Dispatch) => {
        axios.get('https://xebiascart.herokuapp.com/filters', {})
        .then( response => {
            console.log("filterRequestAction ", response);
            if(response.status == 200) {
                const products = response.data;
                if(products) {
                    dispatch( {
                        type: Type.PRODUCT_FILTER,
                        payload:products
                    });
                }
               
            }
        })
        .catch( error => {
            console.log(error);
        })
    }
}

export const addToCart = (item:string) : any => {
    return {
        type : Type.PRODUCT_ADDTOCART,
        payload : item
    }
}

export const addToCartFromStorage = (item:any) : any=> {
    return {
        type : Type.PRODUCT_ADDTOCART_STORAGE,
        payload : item
    }
}


export const clearCart = (item:any) => {
    return {
        type : Type.PRODUCT_CLEARCART,
        payload : item
    }
}