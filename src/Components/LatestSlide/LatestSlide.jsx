import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './latestslide.css'
export const LatestSlide = () => {
    
  return (
<div className="lat-slides">
    
<Carousel slide={false}>
      <Carousel.Item  interval={2500}>
        <img
          className="d-block lat-img "
          src="https://images.pexels.com/photos/13377187/pexels-photo-13377187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item  interval={2500}>
        <img
          className="d-block lat-img "
          src="https://images.unsplash.com/photo-1656836678116-c6766b8b3d8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item  interval={2500}>
        <img
          className="d-block lat-img"
          src="https://images.unsplash.com/photo-1665446302709-d94a4c212b99?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
          </div>
  )
}
