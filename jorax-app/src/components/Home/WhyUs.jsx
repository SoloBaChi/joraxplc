import React from 'react';

function WhyUs(props) {
    return (
        <section className='why-us-section'>
           <h2>why you should choose us</h2> 
           <div className="card-container grid-container-3">
            <figure className="card">
                <div className="img-container">
                    <img src={`/assets/images/empowerment-icon.svg`} alt="empowerment" />
                </div>
                <h5>empowerment</h5>
                <p>
                We are dedicated to empowering women in rural areas who are skilled in palm oil production, by providing them with meaningful employment opportunities in palm oil production. Our commitment to their empowerment extends beyond financial support, extra training on standards, embracing a holistic approach that nurtures their skills and contributes to personal growth.
                </p>
            </figure>
            <figure className="card">
                <div className="img-container">
                    <img src={`/assets/images/preservation-icon.svg`} alt="preservation" />
                </div>
                <h5>Preservation of Tradition</h5>
                <p>
                At Jorax Healthcare, we cherish and preserve the native and traditional methods of palm oil production. Our core values emphasize the importance of sustaining cultural heritage, ensuring that each drop of Jorax Premium Palm Oil reflects the authenticity and richness of time-honored practices.
                </p>
            </figure>
            <figure className="card">
                <div className="img-container">
                    <img src={`/assets/images/excellence-icon.svg`} alt="excellence" />
                </div>
                <h5>quality excellence</h5>
                <p>
                We uphold a steadfast commitment to quality, meticulously avoiding additives in our palm oil production. Our dedication to excellence guarantees that every bottle of Jorax oil delivers a pure and natural Palm oil, reflecting the uncompromising standards we set for ourselves. 
                </p>
            </figure>
           </div>
        </section>
    );
}

export default WhyUs;