import React from 'react';
import { Link } from 'react-router-dom';

function Services(props) {
    return (
        <section className='services-section' id={"services"}>
            <h2>how we can serve you</h2>
            <div className="flex-container-2">
                <div className="flex-item">
                    <div className="img-container">
                        <img src={`/assets/images/palm-fruit-photo.svg`} alt="palm fruit" />
                    </div>
                </div>
                <div className="flex-item">
                    <h3>jorax foods</h3>
                    <p>We offer quality, natural, and low cholesterol Palm Oil  that makes every meal a celebration.</p>
                    <div className="cta-btn-container">
                        <Link className='blank-cta-btn' to="/">order products</Link>
                    </div>
                </div>
            </div>
            <div className="flex-container-2">
            <div className="flex-item">
                    <h3>Jorax Pharmaceuticals</h3>
                    <p>We specialize in the distribution and marketing of Pharmaceuticals and medical devices in Nigeria.</p>
                    <div className="cta-btn-container">
                        <Link className='blank-cta-btn' to="/">order products</Link>
                    </div>
                </div>
                <div className="flex-item">
                    <div className="img-container">
                        <img src={`/assets/images/pharmacy-capsules.svg`} alt="capsules" />
                    </div>
                </div>
            </div>
            <div className="flex-container-2">
                <div className="flex-item">
                    <div className="img-container">
                        <img src={`/assets/images/consultancy-photo.svg`} alt="consultancy" />
                    </div>
                </div>
                <div className="flex-item">
                    <h3>jorax consultancy</h3>
                    <p>We provide drug information for medical practitioners, individuals, hospitals and professionals.</p>
                    <div className="cta-btn-container">
                        <Link className='blank-cta-btn' to="/">order products</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;