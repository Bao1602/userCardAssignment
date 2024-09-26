import React from 'react'
import './Banner.css';

const gameImage = "https://static.bandainamcoent.eu/high/elden-ring/elden-ring/00-page-setup/elden-ring-new-header-mobile.jpg"
const Banner = () => {
  return (
    <section className='banner-container'>
        <img src={gameImage} alt="wukoong" />
        <div className='banner-content'>
            <h1 className='banner-title'>Buy the game TODAY!</h1>
            <p className='banner-subtitle'>Over 25 million copies sold on Steam !</p>
        </div>
    </section>
  )
}

export default Banner