import React from 'react'
import logo from "../assets/images/logo.svg";
import gear from "../assets/images/Vector.png";


export const Logo = () => (
  <div className="header__logo">
    <img style={{ width: '100%' }} src={logo} alt="Logo" draggable={false}/>
    <div className="header__logo_gear">
      <img style={{ width: '100%' }} src={gear} alt="Logo_gear" draggable={false}/>
    </div>
  </div>
)