import React from 'react';
import './App.css';



function App(props) {
  return (
    <div className="product">
      <div><img className="productImg" src={props.imgLink} /></div>
      <a href={props.prodUrl}>
        <p> {props.name } </p>
      </a>
      <a className="price"> {props.price} </a>
      <a className="buyBtn" href={props.buyBtn}> {"Купить"} </a>
    </div>
  );
}



export default App;