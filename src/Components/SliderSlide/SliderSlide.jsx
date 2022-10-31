import React from 'react'

export const SliderSlide = ({ Slideimg, Slidename}) => {
  return (
    <div className='slide'>
        <img src={Slideimg} alt="" />
        <h2>{Slidename}</h2>
    </div>
  )
}
