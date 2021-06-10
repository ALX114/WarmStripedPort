import React from 'react';
import ReactDOM from 'react-dom'
import './App.css';

var itemList = [];
const value = "value", name = "name", price ="price"

function ItemList(){
  let sum = 0;
  for(let i = 0; i < localStorage.length; i++ ){
  let key = localStorage.key(i);
  let obj = JSON.parse(localStorage.getItem(key));
  obj["name"] = key;
  obj["id"] = i;
  obj["sum"] = parseInt(obj["price"]) * parseInt(obj["value"])
  console.log(obj);
  itemList[i] = obj
  sum += obj["sum"];
  }
  
  
  const items = itemList.map((item)=>
    <div className="cartItem" id={item.name}>
      <a>{item.id}</a> <a>{item.name}</a> <a>{item.value}</a><a>сумма равна {item.sum} руб</a>
    </div>
  );


  return(
    <div>
    {items}
    <div>сумма тележки: {sum} руб</div>
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
/*
const listItems = numbers.map((number) =>
    <li>{number}</li>
  );
  return (
    <ul>{listItems}</ul>
  );


  for(let i = 0; i < localStorage.length; i++ ){
  let key = localStorage.key(i);
  cart[key] = JSON.parse(localStorage.getItem(key));
}

  */