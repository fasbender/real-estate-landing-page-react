import React from 'react'

const Banner = () => {
  return (
    <div className='banner'>
        <img src={ process.env.PUBLIC_URL + './images/building.png' } alt="banner" />
        <div className='banner-header'>
          <h1>Find your dream home</h1>
          <p>This is where you can find a dream home of your choice without stress</p>
        </div>
        <div className='search'>
            <div className='search-title'>
              <p>Search the price you are looking for here</p>
            </div>
            <div className='search-grid'>
              <div>
                <input type="text" className='location' placeholder='Location' />
              </div>
              <div>
                <input type="text" className='type' placeholder='Type' />
              </div>
              <div>
                <input type="text" className='price' placeholder='Price' />
              </div>
              <div className='button-search-container'>
                <button className='button-search' type='button'>Search</button>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Banner