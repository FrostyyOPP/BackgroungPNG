import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { SubSlide } from '../SubSlide/SubSlide';
import './subcat.css'

export const SubcatSlides = () => {
    const subCat = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 6
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6  
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 4
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2
        }
    };
  return (
    <div className='container related'>
        <Carousel responsive={subCat}>
           <SubSlide subName='Nature'/>
           <SubSlide subName='Deserts'/>
           <SubSlide subName='Dark'/>
           <SubSlide subName='Anime'/>
           <SubSlide subName='Cartoon'/>
           <SubSlide subName='Naruto'/>
           <SubSlide subName='Itachi'/>
           <SubSlide subName='Goku'/>
           <SubSlide subName='3D'/>
           <SubSlide subName='Vector'/>
            
        </Carousel>
    </div>
  )
}
