import React from 'react'
import './latslidesss.css';

export const LatestSlidesss = ({ imgURL }) => {
  return (
    <div>
         <img
          className="d-block lat-img "
          src={ imgURL}
          alt="First slide"
        />
    </div>
  )
}
