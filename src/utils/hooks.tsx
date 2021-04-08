import {useEffect, useState} from "react";


interface useSliderParams {
  items: Array<string>,
  slideTimeout?: number,
  initialIndex?: number,
  tickCount?: number,
}

export const useSlider = ({items, slideTimeout = 5000, initialIndex = 0, tickCount = 50}: useSliderParams) => {
  const [currentSlideIndex, setCurrentSlide] = useState(initialIndex)
  const [progress, setProgress] = useState(0)

  const timeoutPerTick = slideTimeout / tickCount
  const tickIncrement = 100 / tickCount

  const prevSlideIndex = currentSlideIndex === 0
    ? items.length - 1
    : currentSlideIndex - 1

  const nextSlideIndex = (currentSlideIndex + 1) % (items.length)

  const onPrevSlide = () => {
    setProgress(0)
    setCurrentSlide(prevSlideIndex);
  }

  const onNextSlide = () => {
    setProgress(0)
    setCurrentSlide(nextSlideIndex);
  }

  useEffect(() => {
    const id = setInterval(() => {
      setProgress(p => p + tickIncrement)
    }, timeoutPerTick)

    return () => clearInterval(id)
  }, [tickIncrement, timeoutPerTick])

  useEffect(() => {
    if (progress >= 100) {
      onNextSlide()
      setProgress(0)
    }
  }, [progress])

  return {items, currentSlideIndex, prevSlideIndex, nextSlideIndex, onPrevSlide, onNextSlide, progress, timeoutPerTick}
}