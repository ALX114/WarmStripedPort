import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Nav from './Nav'
import phones from './product.js'

ReactDOM.render(
  <React.StrictMode>
  <Nav name="Каталог" navUrl="./index.html"/>
  <Nav name="О нас"/>
  <Nav name="Контакты"/> 
  </React.StrictMode>,
  document.getElementById('navigation')
);

ReactDOM.render(
  <React.StrictMode>
  
  <Nav name="Корзина" navUrl="./cart.html" urlImg={"https://pngimg.com/uploads/shopping_cart/shopping_cart_PNG66.png"}/>
  </React.StrictMode>,
  document.getElementById('navheader')
);

function ProductItem(){
  const productItem = phones.map(i =>
       <App name={i.title} price={i.price} imgLink={i.images[0]} desc={i.description} id={i.id} prodUrl="phone.html"/>
       
    )
  return(productItem);
}


ReactDOM.render(
  <React.StrictMode>
    
      <ProductItem />
    
  </React.StrictMode>,
  document.getElementById('root')
)