import React from 'react'
import { LatestSlidesss } from '../../Components/LatestSlidesss/LatestSlidesss'
import { SubcatSlides } from '../../Components/SubcatSlides/SubcatSlides'
import Carousel from 'react-bootstrap/Carousel';
import { Post } from '../../Components/Post/Post'


export const Pngs = () => {
  return (
    <div className='container'> 
        <div className="latest">
    <Carousel slide={false}>
  <Carousel.Item  interval={2500}>
   <LatestSlidesss 
   imgURL={'https://img.freepik.com/free-vector/eucalyptus-leaves-branches-aromatic-herb_107791-13578.jpg?w=1380&t=st=1667009034~exp=1667009634~hmac=7a9c54cf021eb226b2302a4cbd914252853a3270f1c61aa3de23f1c38587b2e1'} />

  </Carousel.Item>
  <Carousel.Item  interval={2500}>
   <LatestSlidesss 
   imgURL={'https://img.freepik.com/free-vector/decorative-happy-diwali-banner-with-hanging-lights-diya_1017-34335.jpg?w=1380&t=st=1667008947~exp=1667009547~hmac=289732c7c7ca2e36eb81b753f426470f579e8e6855a49a3e951247d9405b8e0b'}/>

   
  </Carousel.Item>
  <Carousel.Item  interval={2500}>
    <LatestSlidesss 
    imgURL={'https://img.freepik.com/free-vector/background-design-with-mandalas-pattern_1308-70343.jpg?w=1380&t=st=1667008949~exp=1667009549~hmac=defb899c487824ca8f0e609a8d5bedeea2bff807cbab6924c9441962b23d86b8'}/>

   
  </Carousel.Item>
</Carousel>
    </div>

    <div className="wallpapers-posts mt-5">
        <h1>Download HD PNGs</h1>
        <p className='mt-2'>Looking for Pngs images for your next project? Burst has curated royalty-free Pngs and <br /> backdrops. All photos are in HD format and free to download</p>
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
        </div></div>
  )
}
