import React from 'react'
import './styles.css'
import moto_logo from "../../../../assets/images/MONTBLANC MOTORCYCLE.svg";
import japanese_symbols from "../../../../assets/images/japanese.png";


interface IProps {
  currentSlide: string
  nextSlide: string
}

export const Bikes: React.FC<IProps> = ({currentSlide, nextSlide}) => {
  return (
    <div className="content__main-wrapper">
      <div className="content__wrapper_images">
        <div className="content__image_current-wrapper">
          <img className="content__image-current" src={currentSlide} alt="Загрузка" draggable={false}/>
          <div className="content__image-box-shadow-right"/>
        </div>
        <img className="content__image_logo" src={moto_logo} alt="Загрузка" draggable={false}/>
      </div>
      <div className="content__image_next-wrapper">
        <img className="content__image-next" src={nextSlide} alt="Загрузка" draggable={false}/>
        <div className="content__image-box-shadow-left"/>
      </div>
      <div>
        <img className="content__wrapper_japanese" src={japanese_symbols} alt="Загрузка" draggable={false}/>
      </div>
    </div>
  )
}