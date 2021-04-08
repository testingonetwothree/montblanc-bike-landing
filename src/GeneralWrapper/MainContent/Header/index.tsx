import React from 'react'
import {Link} from "react-router-dom";
import {Navigation} from "../../../shared/Navigation";
import {Logo} from "../../../shared/Logo";
import './styles.css'
import background_top from '../../../assets/images/Gold.png'


const navigationTabs = [
  {name: 'Bikes', link: '/bikes'},
  {name: 'Accessories', link: '/accessories'},
  {name: 'New Tech', link: '/new-tech'},
  {name: 'Explore', link: '/explore'},
]

export const Header = () => (
  <header className="header">
    <Link to="/">
      <Logo/>
    </Link>
    <nav className="header__navigation">
      {navigationTabs.map((text, i) => (
        <Navigation key={i} className="header__tabs_tab" name={text.name} link={text.link}/>
      ))}
    </nav>
    <div className="header__image">
      <img className="header__image_inner" alt="Загрузка" src={background_top} draggable={false}/>
    </div>
  </header>
)