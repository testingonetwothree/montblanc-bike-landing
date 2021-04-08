import React from 'react'

import {useSlider} from "../../../utils/hooks";
import {Bikes} from "./Bikes";
import {Slider} from "./Slider";

import './styles.css'


interface IProps {
  items: Array<string>
}

export const Content = ({ items }: IProps) => {

  const {
    currentSlideIndex,
    prevSlideIndex,
    nextSlideIndex,
    onNextSlide,
    onPrevSlide,
    progress,
    timeoutPerTick
  } = useSlider({
    items,
    slideTimeout: 3000,
    tickCount: 30,
  })

  return (
    <div className="content">
      <Bikes
        currentSlide={items[currentSlideIndex]}
        nextSlide={items[nextSlideIndex]}
      />
      <Slider
        onPrevSlide={onPrevSlide}
        onNextSlide={onNextSlide}
        prevSlideIndex={prevSlideIndex}
        nextSlideIndex={nextSlideIndex}
        progress={progress}
        progressTick={timeoutPerTick}
        text={'The bike comes in all black, with a relatively modern appeal. Chrome accents in just the right places make the bike stand out, while the black-on-black satin text on the bike’s fork-guards helps highlight the company’s branding without being too direct or obvious.'}
      />
    </div>
  )
}

