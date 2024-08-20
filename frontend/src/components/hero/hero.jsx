import React from 'react'
import './hero.css'
import handicon from '../assets/handicon.png'
import rightarrow from '../assets/rightarrow.png'
import candle from '../assets/candle.jpeg'
import candlegift from '../assets/candlegift.png'

const Hero = () => {
    return (
        <div className='hero'>


            <div className="hero-left">
                <h2>New arrivals only</h2>
                <div>
                    <div className='hero-hand-icon'>
                        <p>new</p>
                        <img src={handicon} alt=""/>
                    </div>
                    <p>colllections</p>
                    <p>for everyone</p>
                </div>

                <div className="hero-latest-button">
                    <div>Latest collection</div>
                    <img src={rightarrow} alt=""/>
                </div>

            </div>



            


            <div className="hero-right">
                <img src={candlegift} alt=""/>

            </div>
        </div>
    )
}

export default Hero;