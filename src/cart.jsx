import React from 'react';
import ReactDOM from 'react-dom'
import './App.css';

var itemList = [];
const value = "value", name = "name", price ="price"

let sum = 0;
function ItemList(){
  
  
  for(let i = 0; i < localStorage.length; i++ ){
  let key = localStorage.key(i);
  let obj = JSON.parse(localStorage.getItem(key));
  obj["name"] = key;
  obj["id"] = i+1;
  obj["sum"] = parseInt(obj["price"]) * parseInt(obj["value"])
  
  itemList[i] = obj
  sum += obj["sum"];
  }
  
  setCookie('sum',sum/2);
  const items = itemList.map((item)=>
    <div className="cartItem" id={item.name}>
      <a>{item.id}</a><img className="cartImg" src={item.imgLink}></img> <a>{item.name}</a><a> по цене {item.price}</a> <a>в количестве {item.value}</a><a>сумма равна {item.sum} руб</a>
    </div>
  );


  return(
    <div>
    {items}
    
    <div id="sum"><a>сумма тележки: {sum} руб</a></div>
    
    </div>
    )
  
  /*const cartItem = cartList.map((item)=>{
    <li>{item}</li>
  })
  return(
    <ul>{cartItem}</ul>
  )*/
}



ReactDOM.render(
  <ItemList />,
  document.getElementById('cart')
);

function setCookie(name, value, options = {}) {

  options = {
    path: '/',
    // при необходимости добавьте другие значения по умолчанию
    ...options
  };

  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }

  let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

  for (let optionKey in options) {
    updatedCookie += "; " + optionKey;
    let optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += "=" + optionValue;
    }
  }

  document.cookie = updatedCookie;
}
