import React from 'react';
import './App.css';

function Nav(props){
  return(
    <a className="btn" href={props.navUrl}>
      {props.name}
    </a>
  )
}

export default Nav;