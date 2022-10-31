import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./slider.css";

const trends = [
  {
    id: 1,
    name: "Cat",
    img: "https://images.pexels.com/photos/13313434/pexels-photo-13313434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    name: "Plating",
    img: "https://images.pexels.com/photos/13805184/pexels-photo-13805184.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    name: "Nature",
    img: "https://images.pexels.com/photos/14036661/pexels-photo-14036661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 4,
    name: "Desert",
    img: "https://images.pexels.com/photos/12652679/pexels-photo-12652679.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 5,
    name: "Hallowean",
    img: "https://images.pexels.com/photos/14018448/pexels-photo-14018448.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 6,
    name: "Vintage Car",
    img: "https://images.pexels.com/photos/13905462/pexels-photo-13905462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

export const Slider = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  return (
    <div className="mt-3">
      <h2 className="slider-head">Trending</h2>

      <Carousel responsive={responsive}>
        {trends.map((trend) => (
          <div className="slide" key={trend.id}>
            <img className="slider-img" src={trend.img} alt="" />
            <h2 className="slider-topic">{trend.name}</h2>
          </div>
        ))}

        {/*            
            <div className="slide">
                <img className='slider-img' src="https://images.pexels.com/photos/13313434/pexels-photo-13313434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <h2 className='slider-topic'>CAT</h2>
            </div>
            <div className="slide">
                <img className='slider-img' src="https://images.pexels.com/photos/13313434/pexels-photo-13313434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <h2 className='slider-topic'>CAT</h2>
            </div>
            <div className="slide">
                <img className='slider-img' src="https://images.pexels.com/photos/13313434/pexels-photo-13313434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <h2 className='slider-topic'>CAT</h2>
            </div>
            <div className="slide">
                <img className='slider-img' src="https://images.pexels.com/photos/13313434/pexels-photo-13313434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <h2 className='slider-topic'>CAT</h2>
            </div>
            <div className="slide">
                <img className='slider-img' src="https://images.pexels.com/photos/13313434/pexels-photo-13313434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <h2 className='slider-topic'>CAT</h2>
            </div>
            <div className="slide">
                <img className='slider-img' src="https://images.pexels.com/photos/13313434/pexels-photo-13313434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <h2 className='slider-topic'>CAT</h2>
            </div>
            <div className="slide">
                <img className='slider-img' src="https://images.pexels.com/photos/13313434/pexels-photo-13313434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <h2 className='slider-topic'>CAT</h2>
            </div>
            <div className="slide">
                <img className='slider-img' src="https://images.pexels.com/photos/13313434/pexels-photo-13313434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <h2 className='slider-topic'>CAT</h2>
            </div> */}
      </Carousel>
    </div>
  );
};
