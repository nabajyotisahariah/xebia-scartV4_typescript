export const LOGIN_USER_INITIATE = "LOGIN_USER_INITIATE";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_FAILURE = "LOGIN_USER_FAILURE";
export const LOGIN_USER_REQUEST = "LOGIN_USER_REQUEST";
export const LOGOUT_USER_REQUEST = "LOGOUT_USER_REQUEST";


export interface LoginActionLoading {
    type: typeof LOGIN_USER_INITIATE
  }
  
  export interface LoginActionSuccess {
    type: typeof LOGIN_USER_SUCCESS,
    payload:any
  }
  
  export interface LoginActionFailure {
    type: typeof LOGIN_USER_FAILURE,
    payload:any
  }
  
  export interface LoginActionRequest  {
    type: typeof LOGIN_USER_REQUEST
  }
  
  export interface LogoutActionRequest {
    type: typeof LOGOUT_USER_REQUEST
  }
  
  export type LoginActionTypes = LoginActionLoading | LoginActionSuccess | LoginActionFailure | LoginActionRequest | LogoutActionRequest;