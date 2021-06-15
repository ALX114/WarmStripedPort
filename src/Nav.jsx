import React from 'react';
import './App.css';

function Nav(props){
  return(
    <a className="btn" href={props.navUrl}>
      {props.name} <img className="img" src={props.urlImg}/>
    </a>
  )
}

export default Nav;