import React from 'react';

const Hero = () => {
    return (
        <section id="hero">
            <div className="container">
                <div className="hero">
                    <h3>CLIENT-DEVELOPMENT DRIVEN</h3>
                    <h1>We Design. We Develop. We Ship. In The Same Day.</h1>
                    <p>We are committed to not making clients wait. We will deliver the work as quickly as possible.
                        Even on the same day. Even so, we do not reduce the quality of our work.</p>
                    <div className="hero-buttons">
                        <button className="btn-one">Send Quote</button>
                        <button className="btn-two">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;