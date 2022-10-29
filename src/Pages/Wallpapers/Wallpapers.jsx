import React from 'react'
import { LatestSlide } from '../../Components/LatestSlide/LatestSlide'
import { SubcatSlides } from '../../Components/SubcatSlides/SubcatSlides'
import './wallpapers.css'

export const Wallpapers = () => {
  return (
    <div className='container'>
        <div className="latest">
        <LatestSlide />
        </div>

        <div className="wallpapers-posts mt-5">
            <h1>Download HD Wallpapers</h1>
            <p className='mt-2'>Looking for wallpapers images for your next project? Burst has curated royalty-free wallpapers and <br /> backdrops. All photos are in HD format and free to download</p>
        </div>
        <div className="most-search">
            <h5 className='ms-text'>Most Searches :-</h5>
            <SubcatSlides />
        </div>
    </div>
  )
}
