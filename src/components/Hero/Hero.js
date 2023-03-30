import React from 'react';
import hero from '../../hero-image.jpg';
import "./Hero.css";

function Hero() {
    return (
        <section className='hero'>
            <div className='container'>
                <div className='hero-content'>
                    <div className='hero-text'>
                        <h1>Little Lemon</h1>
                        <h2>Chicago</h2>
                        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                        <button className='btn-reserve'>Reserve a table</button>
                    </div>
                    <div className='hero-image'>
                        {/* <img src={hero} alt="Little Lemon Restaurant" style={{maxWidth: "50%", height: "auto"}}/> */}
                        <img src={hero} alt="Little Lemon Restaurant"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;