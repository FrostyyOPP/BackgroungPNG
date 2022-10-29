import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "./slider.css"

export const Slider = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 6
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 4
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div className='mt-3'>
            <h2 className='slider-head'>Trending</h2>

            <Carousel responsive={responsive}>
                <div className='slide'>
                    <img className='slider-img' src="https://images.pexels.com/photos/13313434/pexels-photo-13313434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="cat" />
                    <h3 className='slider-topic'>Cat</h3>
                </div>
                <div className='slide'>
                    <img className='slider-img' src="https://images.pexels.com/photos/13805184/pexels-photo-13805184.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Plating" />
                    <h3 className='slider-topic'>Plating</h3>
                </div>
                <div className='slide'>
                    <img className='slider-img' src="https://images.pexels.com/photos/14036661/pexels-photo-14036661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Nature" />
                    <h3 className='slider-topic'>Nature</h3>
                </div>
                <div className='slide'>
                    <img className='slider-img' src="https://images.pexels.com/photos/12652679/pexels-photo-12652679.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Desert" />
                    <h3 className='slider-topic'>Desert</h3>
                </div>
                <div className='slide'>
                    <img className='slider-img' src="https://images.pexels.com/photos/14018448/pexels-photo-14018448.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Hallowaean" />
                    <h3 className='slider-topic'>Halowean</h3>
                </div>
                <div className='slide'>
                    <img className='slider-img' src="https://images.pexels.com/photos/13905462/pexels-photo-13905462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="car" />
                    <h3 className='slider-topic'>Vintage Car</h3>
                </div>
            </Carousel>;
        </div>
    )
}
