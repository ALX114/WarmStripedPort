import React from 'react'
import ReactDOM from 'react-dom'
import phones from './product.js'

function PhoneView(){
    
    
    let phoneID = getCookie("phoneID");
    console.log(phoneID);
    console.log(phones[phoneID])

    return(<div>
      <a>
      Название: {phones[phoneID].title}
      </a>
    </div>)
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
