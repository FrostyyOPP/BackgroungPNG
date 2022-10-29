import React from 'react'
import { SearchBar } from '../../Components/Search-Bar/SearchBar'
import { Slider } from '../../Components/Slider/Slider'
import Wallpapers from '../../Components/Wallpapers/Wallpapers'

export const Home = () => {
  return (
    <div>
        <SearchBar/>    
        <Slider />
        <Wallpapers />
    </div>
  )
}
