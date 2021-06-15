import React from 'react'
import ReactDOM from 'react-dom'
import phones from './product.js'

function PhoneView(){
    
    
    let phoneID = getCookie("phoneID");

    return(
      <div>
      <div>
      Название:  {phones[phoneID].title}
      </div>
      <Images id={phoneID}/>
      <a className="desc">
        <p>Бренд: {phones[phoneID].brand}</p>
        <p>Процессор: {phones[phoneID].cpu} </p>
        <p>Батарея: {phones[phoneID].battery}</p>
        <p>Экран: {phones[phoneID].display}</p>
        <p>Камера: {phones[phoneID].camera}</p>
        <p>Встроенная память: {phones[phoneID].memory}</p>
        <p>Стоимость: {phones[phoneID].price} рублей</p>
      </a>
    </div>)
}

function Images(props){
  
   const items = phones[props.id].images.map((i)=><img className="viewImage" src={i}/>)

  return(items)
}


function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}


ReactDOM.render(
  <div className="product">
    
    <PhoneView />

  </div>
  ,document.getElementById("phoneview"))
