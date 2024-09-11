import React from 'react'
import './hero.css'
import handicon from '../assets/handicon.png'
import rightarrow from '../assets/rightarrow.png'
import candle from '../assets/candle.jpeg'
import candlegift from '../assets/candlegift.png'
import horrorcandle from '../assets/horrorcandle.jpg'
const Hero = () => {
    return (
        <div className='hero'>


            <div className="hero-left">
                <h2>Hallowen Special's</h2>
                <div>
                    <div className='hero-hand-icon'>
                        <p>For</p>
                        <img src={handicon} alt=""/>
                    </div>
                    <p>The Perfect</p>
                    <p>Dark Gift</p>
                </div>

                <div className="hero-latest-button">
                    <div>Explore Now</div>
                    {/* <img src={rightarrow} alt=""/> */}
                </div>

            </div>



            


            <div className="hero-right">
                <img src={horrorcandle} alt=""/>

            </div>
        </div>
    )
}

export default Hero;