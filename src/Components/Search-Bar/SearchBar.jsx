import React from 'react'
import "./searchbar.css";

export const SearchBar = () => {
  return (
    <div className='search'>
        <h1 className='search-logo'>BACKGROUND PNG!</h1>
        <p className='search-subhead'>Download Latest Wallpapers,Background and PNGs for Free..</p>
        <form action="" className='search-form d-flex'>
            <input type="text" className='searchbar-input'placeholder='Search...' />
            <div className="button">
            <button className='searchbar-btn' type='submit'>Search</button>
            </div>
        </form>
    </div>
  )
}
