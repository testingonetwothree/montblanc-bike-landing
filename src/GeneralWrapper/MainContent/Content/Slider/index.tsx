import React from 'react'
import {Button} from "../../../../shared/Button";
import './styles.css'

interface IProps {
  onPrevSlide?: () => void
  onNextSlide?: () => void
  prevSlideIndex?: number
  nextSlideIndex?: number
  progress?: number
  progressTick?: number
  text?: string
}


export const Slider: React.FC<IProps> = ({
                                           onPrevSlide,
                                           onNextSlide,
                                           prevSlideIndex = 0,
                                           nextSlideIndex = 0,
                                           progress = 0,
                                           progressTick,
                                           text
                                         }) => {

  return (
    <div className="content__wrapper_info">
      <div className="content__info">

        <div className="content__info_slider">
          <Button className="content__info_slider-text-wrapper" onClick={onPrevSlide}>
            <div className="content__info_slider-text-wrapper-button">{`<`}</div>
            <div className="content__info_slider-text-wrapper-button">{prevSlideIndex + 1}</div>
          </Button>
          <div className="content__info_slider-line">
            <div
              className="content__info_slider-line-color"
              style={{
                right: `${100 - progress}%`, transition: `linear ${progressTick}ms`
              }}
            />
          </div>
          <Button className="content__info_slider-text-wrapper" onClick={onNextSlide}>
            <div className="content__info_slider-text-wrapper-button">{nextSlideIndex + 1}</div>
            <div className="content__info_slider-text-wrapper-button">{`>`}</div>
          </Button>
        </div>

        {text
          ? <div className="content__info_text">{text}</div>
          : null}
      </div>
    </div>
  )
}