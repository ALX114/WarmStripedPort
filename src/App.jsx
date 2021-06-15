import React from 'react';
import cart from './script.js';

function App(props) {
  return (
    <div className="product">
      <div><img className="productImg" onClick={document.cookie = "phoneID =" + props.id} src={props.imgLink} href={props.prodUrl}/></div>
      <a onClick={
        document.cookie = "phoneID =" + props.id
      } href={props.prodUrl}>
        <p> {props.name } </p>
      </a>
      <a>
        {props.desc}
      </a>
      <a className="price"> {props.price} руб <button className="buyBtn" href={props.buyBtn} onClick={()=>{

        if(!(cart[props.name])){
          cart[props.name] = {"value" : 1, "price" : props.price,"imgLink" : props.imgLink};
          localStorage.setItem(props.name, JSON.stringify(cart[props.name]))
          alert("Вы добавили в корзину " + props.name + "!")
        }else{
          cart[props.name]["value"]++;
          localStorage.setItem(props.name, JSON.stringify(cart[props.name]))
          alert("Вы добавили еще один " + props.name + "!")
        }

      }}> {"Купить"} </button> </a>
      
    </div>
  );
}



export default App;