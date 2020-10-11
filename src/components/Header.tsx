import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { logoutAction, clearCart } from "./../redux";
//import Search from "./Search";

//https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html

interface IHeaderProps {
    user : any;
    isLogin : boolean | null;
    userinfo : any;
    productCart : any;
    logoutAction : () => any;
    clearCart : () => void;
    history:any;
}

interface IHeaderState {

}

class Header extends React.Component <IHeaderProps, IHeaderState> {
  constructor(props: any) {
    super(props);
  }

  funcLogout = () => {
    this.props.logoutAction();
    this.props.clearCart();
    this.props.history.push("/");
  };

  render() {
    const { user, isLogin, userinfo, productCart } = this.props;

    console.log(" isLogin ", isLogin, " user ", user, " userinfo ", userinfo);
    return (
      <header>
        <div>Logo</div>
        {/*<div style={{"width": "50%"}}><Search/></div>*/}
        {isLogin ? (
          <p>
            {`Welcome ${userinfo.fullName}`} |{" "}
            <button onClick={() => this.funcLogout()}>Logout </button>
          </p>
        ) : (
          "Login"
        )}
        <br/>
        Cart {productCart} item
      </header>
    );
  }
}

const verifyIsLogin = () => {
  if (window) {
    if (localStorage.getItem("userInfo") != null && localStorage.getItem("userInfo") != "null") {
      return true;
    }
  }
  return null;
};

const userInfo = () => {
  if (window) {
    if (localStorage.getItem("userInfo") != null && localStorage.getItem("userInfo") != "null") {
      return JSON.parse(localStorage.getItem("userInfo")|| '{}');
    }
  }
  return null;
};

const mapsStateToProps = (state : any) => {
  return {
    user: state.user,
    productCart : state.products.addToCart.length, 
    isLogin: verifyIsLogin(),
    userinfo: userInfo(),
    
  };
};

const mapsDispatchToProps = (dispatch:Dispatch) => {
  return {
    logoutAction: () => dispatch(logoutAction()),
    clearCart: () => dispatch(clearCart({})),
  };
};

export default connect(mapsStateToProps, mapsDispatchToProps)(Header);
