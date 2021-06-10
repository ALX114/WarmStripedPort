import React from 'react';
import './App.css';
import cart from './script.js';


function App(props) {
  return (
    <div className="product">
      <div><img className="productImg" src={props.imgLink} /></div>
      <a href={props.prodUrl}>
        <p> {props.name } </p>
      </a>
      <a className="price"> {props.price} руб </a>
      <button className="buyBtn" href={props.buyBtn} onClick={()=>{
        if(!(cart[props.name])){
          cart[props.name] = {"value" : 1, "price" : props.price};
          localStorage.setItem(props.name, JSON.stringify(cart[props.name]))
          console.log(localStorage.getItem(props.name))
          
        }else{
          cart[props.name]["value"]++;
          localStorage.setItem(props.name, JSON.stringify(cart[props.name]))
          console.log(localStorage.getItem(props.name))
          
        }
        console.log(cart)
      }}> {"Купить"} </button>
    </div>
  );
}



export default App;