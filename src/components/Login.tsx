import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { LoginResponse, LoginResponse1 } from "../model/LoginResponse";
import { loginAction } from "./../redux";
//import common from "./common";
//console.log("como ", common);

//https://dzone.com/articles/react-redux-hooks-with-typescript-in-20204
// https://www.youtube.com/watch?v=3d9XqFmCmQw - Setting up React from scratch with Redux and TypeScript" without Hooks

// https://www.youtube.com/watch?v=SVuwCTiG5YA - Redux TypeScript Types for Beginners
//https://www.youtube.com/watch?v=01hxWBrVBbI - Redux TypeScript Redux Thunk for Beginners
//https://github.com/Jon-Peppinck/webpack-typescript-redux 

interface ILoginProps {
  user ?: LoginResponse | null;
  history:any;
  loginTrigger : (username:string, password :string) => any
}

interface ILoginState {
  username : string;
  password : string;
}

class Login extends React.Component <ILoginProps, ILoginState> {

  constructor(props : any) {
    super(props);
    this.state = {
      username : "",
      password: "",
    };
  }

  componentDidMount = () => {
    /*if (localStorage.getItem("userInfo") != null && localStorage.getItem("userInfo") != "null") {
      this.props.history.push("/product");
    }*/
  }

  //a. Username: amigo |
  //b. Password: delta
  funcLogin = (username : string, password :string) => {
    var _that = this;
    console.log(" username ",username," password ",password," == ",this.props)
    this.props.loginTrigger(username, password).then((r:any) => {
      console.log(" payload ",r.payload)         
      if( r.payload != "Login Failed") {      
        _that.props.history.push("/product");
      }
    });
  };

  funcChangeUsername = ( value:string) => {
    if (value) {
      //console.log(" =funcChange== ", type, " ", this.state[type], " == ", value);
      this.setState({username: value });
    }
  };

  
  funcChangePassword = ( value:string) => {
    if (value) {
      this.setState({password: value });
    }
  };

  render() {

    const { username, password } = this.state;
    //const { user, loginTrigger } = this.props;
    const { user } = this.props;
    //console.log("user ",user)

    return (
      <div className="loginpage">
        <h1>Login page</h1>
        <input type="text" name="username" value={username} onChange={(e) => this.funcChangeUsername(e.target.value)}/>
        {" "}
        <br />
        <input type="password" name="password" value={password} onChange={(e) => this.funcChangePassword(e.target.value)}/>
        {" "}
        <br />
        <button onClick={() => this.funcLogin(username, password)}>Login{" "}</button>
        {user && user.error ? <div style={{"color":"red"}}>Error {user.error}</div>: null}  
      </div>
    );
  }
}

const mapsStateToProps = (state:any) => {
  return {
    user: state.user,
  };
};

const mapsDispatchToProps = (dispatch : Dispatch) => {
  return {
    loginTrigger: (username:string, password:string) : LoginResponse => dispatch(loginAction(username, password)),
  };
};

export default connect(mapsStateToProps, mapsDispatchToProps)(Login);
