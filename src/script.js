var cart = {};




for(let i = 0; i < localStorage.length; i++ ){
  let key = localStorage.key(i);
  cart[key] = JSON.parse(localStorage.getItem(key));
}



export default cart;

