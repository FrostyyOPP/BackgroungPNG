import React from 'react'
import { SearchBar } from '../../Components/Search-Bar/SearchBar'
import { Slider } from '../../Components/Slider/Slider'
import { Post } from '../../Components/Post/Post'
import { Wallpapers } from '../Wallpapers/Wallpapers'


export const Home = () => {
  return (
    <div>
      <SearchBar/>  
      <div className="container">
        <Slider />
        
        
    <div className="wallpapers-posts mt-5">
        <h1>Download HD Recent Posts</h1>
        <p className='mt-2'>Looking for images for your next project? Burst has curated royalty-free images and <br /> backdrops. All photos are in HD format and free to download</p>
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

            </div>
  )
}
