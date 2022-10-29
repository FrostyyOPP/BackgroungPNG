import React from 'react'
import { LatestSlidesss } from '../../Components/LatestSlidesss/LatestSlidesss'
import { SubcatSlides } from '../../Components/SubcatSlides/SubcatSlides'
import Carousel from 'react-bootstrap/Carousel';

import './wallpapers.css'

export const Wallpapers = () => {
  return (
    <div className='container'>
        <div className="latest">
        <Carousel slide={false}>
      <Carousel.Item  interval={2500}>
       <LatestSlidesss 
       imgURL={'https://images.pexels.com/photos/13377187/pexels-photo-13377187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} />

      </Carousel.Item>
      <Carousel.Item  interval={2500}>
       <LatestSlidesss 
       imgURL={'https://images.unsplash.com/photo-1656836678116-c6766b8b3d8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'}/>

       
      </Carousel.Item>
      <Carousel.Item  interval={2500}>
        <LatestSlidesss 
        imgURL={'https://images.unsplash.com/photo-1665446302709-d94a4c212b99?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80'}/>

       
      </Carousel.Item>
    </Carousel>
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
