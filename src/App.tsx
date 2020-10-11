import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import store from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProductListing from './components/ProductListing';

function App(){
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Route  path="/">
            <Route path="/" exact component={Login} />  
            <Route path="/product" exact component={ProductListing}/>        
          </Route> 
        </Router>  
        {/*<Login/>
        <Header1 firstName="Nabayoti"/>*/}           
       </div>
    </Provider>
  );
}

export default App;
