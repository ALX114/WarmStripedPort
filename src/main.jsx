import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Nav from './Nav'

ReactDOM.render(
  <React.StrictMode>
  <Nav name="Наши товары" navUrl="./index.html"/>
  <Nav name="О нас"/>
  <Nav name="Контакты"/>
  <Nav name="Корзина" navUrl="./cart.html"/>
  </React.StrictMode>,
  document.getElementById('navigation')
);

ReactDOM.render(
  <React.StrictMode>
    
      <App name="Тест" price="0" imgLink="" prodUrl=""/>
      <App name="Тест" price="0" imgLink="" prodUrl=""/>
      <App name="Игрушка" price="120" imgLink="https://www.toydico.com/media/catalog/product/cache/2/image/650x650/9df78eab33525d08d6e5fb8d27136e95/f/y/fyx40_c_19_0001.jpg" prodUrl=""/>
      <App name="Тест" price="0" imgLink="" prodUrl=""/>
      <App name="Тест" price="0" imgLink="" prodUrl=""/>
      <App name="Тест" price="0" imgLink="" prodUrl=""/>
      <App name="Тест" price="0" imgLink="" prodUrl=""/>
      <App name="Игрушка" price="120 руб" imgLink="https://www.toydico.com/media/catalog/product/cache/2/image/650x650/9df78eab33525d08d6e5fb8d27136e95/f/y/fyx40_c_19_0001.jpg" prodUrl=""/>
      <App name="Тест" price="0" imgLink="" prodUrl=""/>
      <App name="Тест" price="0" imgLink="" prodUrl=""/>
      <App name="Тест" price="0" imgLink="" prodUrl=""/>
      <App name="Тест" price="0" imgLink="" prodUrl=""/>
      <App name="Тест" price="0" imgLink="" prodUrl=""/>
      <App name="Тест" price="0" imgLink="" prodUrl=""/>
      <App name="Тест" price="0" imgLink="" prodUrl=""/>
      <App name="Игрушка" price="120 руб" imgLink="https://www.toydico.com/media/catalog/product/cache/2/image/650x650/9df78eab33525d08d6e5fb8d27136e95/f/y/fyx40_c_19_0001.jpg" prodUrl=""/>
      <App name="Тест" price="0" imgLink="" prodUrl=""/>
      <App name="Тест" price="0" imgLink="" prodUrl=""/>
      <App name="Тест" price="0" imgLink="" prodUrl=""/>
      <App name="Тест" price="0" imgLink="" prodUrl=""/>
      <App name="Игрушка" price="120 руб" imgLink="https://www.toydico.com/media/catalog/product/cache/2/image/650x650/9df78eab33525d08d6e5fb8d27136e95/f/y/fyx40_c_19_0001.jpg" prodUrl=""/>
      <App name="Тест" price="0" imgLink="" prodUrl=""/>
      <App name="Тест" price="0" imgLink="" prodUrl=""/>
      <App name="Тест" price="0" imgLink="" prodUrl=""/>
      <App name="Игрушка" price="120 руб" imgLink="https://www.toydico.com/media/catalog/product/cache/2/image/650x650/9df78eab33525d08d6e5fb8d27136e95/f/y/fyx40_c_19_0001.jpg" prodUrl=""/>
      <App name="Тест" price="0" imgLink="" prodUrl=""/>
      <App name="Тест" price="0" imgLink="" prodUrl=""/>
      <App name="Тест" price="0" imgLink="" prodUrl=""/>
    
  </React.StrictMode>,
  document.getElementById('root')
)