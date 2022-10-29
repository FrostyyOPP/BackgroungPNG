import React from 'react'
import { LatestSlidesss } from '../../Components/LatestSlidesss/LatestSlidesss'
import { Post } from '../../Components/Post/Post'
import { SubcatSlides } from '../../Components/SubcatSlides/SubcatSlides'
import Carousel from 'react-bootstrap/Carousel';

export const Backgrounds = () => {
  return (
    <div className='container'>
         <div className="latest">
        <Carousel slide={false}>
      <Carousel.Item  interval={2500}>
       <LatestSlidesss 
       imgURL={'https://burst.shopifycdn.com/photos/ukulele-on-blue-background.jpg?width=925&format=pjpg&exif=1&iptc=1'} />

      </Carousel.Item>
      <Carousel.Item  interval={2500}>
       <LatestSlidesss 
       imgURL={'https://burst.shopifycdn.com/photos/two-juicy-orange-slices-against-red-background.jpg?width=925&format=pjpg&exif=1&iptc=1'}/>

       
      </Carousel.Item>
      <Carousel.Item  interval={2500}>
        <LatestSlidesss 
        imgURL={'https://burst.shopifycdn.com/photos/ahand-holding-a-cigarette-on-blue-background.jpg?width=925&format=pjpg&exif=1&iptc=1'}/>

       
      </Carousel.Item>
    </Carousel>
        </div>

        <div className="wallpapers-posts mt-5">
            <h1>Download HD Backgrounds</h1>
            <p className='mt-2'>Looking for Backgrounds images for your next project? Burst has curated royalty-free Backgrounds and <br /> backdrops. All photos are in HD format and free to download</p>
        </div>
        <div className="most-search">
            <h5 className='ms-text'>Most Searches :-</h5>
            <SubcatSlides />
        </div>

        <div className="posts">
            <Post postImg={'https://images.unsplash.com/photo-1666845267403-191d298cf198?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1033&q=80'} 
            postName={'Sea Side'}/>
            <Post postImg={'https://images.unsplash.com/photo-1666845267403-191d298cf198?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1033&q=80'} 
            postName={'Sea Side'}/>
            <Post postImg={'https://images.unsplash.com/photo-1666845267403-191d298cf198?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1033&q=80'} 
            postName={'Sea Side'}/>
            <Post postImg={'https://images.unsplash.com/photo-1666845267403-191d298cf198?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1033&q=80'} 
            postName={'Sea Side'}/>
            <Post postImg={'https://images.unsplash.com/photo-1666845267403-191d298cf198?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1033&q=80'} 
            postName={'Sea Side'}/>
            <Post postImg={'https://images.unsplash.com/photo-1666845267403-191d298cf198?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1033&q=80'} 
            postName={'Sea Side'}/>
            <Post postImg={'https://images.unsplash.com/photo-1666845267403-191d298cf198?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1033&q=80'} 
            postName={'Sea Side'}/>
            <Post postImg={'https://images.unsplash.com/photo-1666845267403-191d298cf198?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1033&q=80'} 
            postName={'Sea Side'}/>
            <Post postImg={'https://images.unsplash.com/photo-1666845267403-191d298cf198?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1033&q=80'} 
            postName={'Sea Side'}/>
            <Post postImg={'https://images.unsplash.com/photo-1666845267403-191d298cf198?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1033&q=80'} 
            postName={'Sea Side'}/>
            <Post postImg={'https://images.unsplash.com/photo-1666845267403-191d298cf198?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1033&q=80'} 
            postName={'Sea Side'}/>
        </div>
    </div>
  )
}
