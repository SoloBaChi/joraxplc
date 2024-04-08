import React from 'react';
import Slider from 'react-slick';

function Testimonial(props) {
const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:2000,
        pauseOnHover:false,
        appendDots:(dots) => {
        return <ul style={{marginBottom:"-30px"}}>{dots}</ul>
        }
      }
    return (
        <section className='testimonials-section' id={"testimonials"}>
            <h2>customer testimonials</h2>
            <div className="card-container">
                <Slider {...settings}>
                <figure className="card grid-iten">
                    <div className="top-section">
                        <p>
                        “Jorax Healthcare Company is the best online store to get original palm oil and they deliver in time.”
                        </p>
                    </div>
                    <div className="bottom-section">
                        <div className="img-container">
                            <img src={`/assets/testimonials/testi-1.svg`} alt="testimonial one" />
                        </div>
                        <h4>jane brown</h4>
                    </div>
                </figure>
                <figure className="card grid-iten">
                    <div className="top-section">
                        <p>
                        “If you are looking for a company to partner with in marketing undiluted palm kernel oil Jorax Healthcare is the answer.”
                        </p>
                    </div>
                    <div className="bottom-section">
                        <div className="img-container">
                            <img src={`/assets/testimonials/testi-2.svg`} alt="testimonial one" />
                        </div>
                        <h4>chidimma edward</h4>
                    </div>
                </figure>
                <figure className="card grid-iten">
                    <div className="top-section">
                        <p>
                        “Thank you Jorax Consultancy agents for guiding me with the drug informations I needed. I am excited contacting you.”
                        </p>
                    </div>
                    <div className="bottom-section">
                        <div className="img-container">
                            <img src={`/assets/testimonials/testi-3.svg`} alt="testimonial one" />
                        </div>
                        <h4>jane brown</h4>
                    </div>
                </figure>
                </Slider>
            </div>
        </section>
    );
}

export default Testimonial;