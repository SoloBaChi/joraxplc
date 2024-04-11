import React, { useState } from "react";
// import { Link } from "react-router-dom";
import Footer from "../footer/Footer";
import Speciliazations from "./AboutusData";
import Card from "../shared/Card";
import Team from "./Team";

function Aboutus(props) {
  const [readmore, setReadMore] = useState(false);

  return (
    <>
      <section className="services-section aboutus">
        <h2>welcome to jorax</h2>
        <div className="flex-container-2">
          <div className="flex-item">
            <h3>our misssion</h3>
            <p>
              At Jorax Healthcare, our mission is to advance health and
              well-being by integrating pharmaceutical excellence, premium food
              production, and expert consultancy services. We are dedicated to
              providing innovative solutions that enhance preventive and
              curative care, empowering individuals to live healthier, more
              fulfilling lives. Through our commitment to quality, tradition,
              and community impact, we strive to be a trusted partner in
              promoting vitality and resilience. With a focus on innovation,
              integrity, and people-oriented values, we aim to shape the future
              of healthcare and make a meaningful difference in the lives of our
              customers and communities.
            </p>
          </div>
          <div className="flex-item">
            <div className="img-container">
              <img src={`/assets/about/our-mission.svg`} alt="our mission" />
            </div>
          </div>
        </div>
        <div className="flex-container-2">
          <div className="flex-item">
            <div className="img-container">
              <img src={`/assets/about/our-vision.svg`} alt="our vision" />
            </div>
          </div>
          <div className="flex-item">
            <h3>our vision</h3>
            <p>
              To be a leading provider of health and wellness solutions,
              delivering superior pharmaceuticals and premium food products that
              enrich lives and inspire well-being. Through innovation,
              integrity, and a people-centered approach, we strive to be the
              cornerstone of healthier communities, fostering a future where
              every individual has the opportunity to thrive.
            </p>
          </div>
        </div>
        <div className="flex-container-2">
          <div className="flex-item">
            <h3>jorax healthcare story</h3>
            <p className={readmore ? "active" : "read-more"}>
              In 2016, the vision for Jorax Healthcare was born – an
              organization dedicated to elevating health and enhancing the
              quality of life. Recognizing that well-being hinges on a
              harmonious blend of good nutrition and effective medication, we
              set out to address both preventive and curative aspects of optimal
              health. The company was incorporated with the corporate affairs
              commission CAC in 10th February, 2021. Jorax Healthcare services
              cut across Pharmaceuticals, Foods, Agricultural and Consultancy
              services. Our Pharmaceutical arm involves the importation and
              distribution of drugs, Pharmaceuticals and medical equipments. The
              Food arm involves production and distribution of Jorax Premium
              Palm Oil and it's derivatives while the Consultancy services
              encompasses Drug information services, Counseling, Staff training
              and contract marketing services. Our foray into the realm of
              preventive health led us to create Jorax Premium Palm Oil, a
              culinary masterpiece designed to be more than just a cooking
              essential. It's a high-quality, low-cholesterol, 100% natural
              vegetable oil that not only elevates the taste of your meals but
              also provides essential polyunsaturated fatty acids (PUFA) and a
              rich source of Vitamin A. What sets Jorax apart is our commitment
              to producing palm oil in the time-honored native way, ensuring
              purity and a natural goodness that transcends the ordinary. In the
              heart of Jorax lies a genuine concern for our consumers. Every
              drop of our premium palm oil is meticulously crafted with your
              health in mind, delivering a culinary experience that not only
              tantalizes the taste buds but also nourishes the body. The
              difference is unmistakable – it's in the taste, the quality, and
              the unwavering dedication to your well-being. At Jorax, we go
              beyond products; we cultivate a culture of care. Our commitment to
              our workforce reflects our understanding that a healthy, happy
              team is the foundation of a resilient and robust organization. We
              are people-oriented, valuing each individual's contribution to our
              shared vision of promoting health and vitality. Join us on this
              transformative journey with Jorax Healthcare. Experience the
              synergy of preventive and curative health solutions, where every
              drop of Jorax Premium Palm Oil is a testament to our unwavering
              commitment to your health and happiness. Embrace the taste of
              wellness – choose Jorax.
            </p>
            <div className="cta-btn-container">
              <button
                onClick={() => {
                  setReadMore((prev) => !prev);
                }}
                className="cta-btn-primary"
              >
                {readmore ? "read less" : "read more"}
              </button>
            </div>
          </div>
          <div className="flex-item">
            <div className="img-container">
              <img
                src={`/assets/about/healthcare-story.svg`}
                alt="healthcare story"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="our-specialization">
        <h3>we specialize in</h3>
        <div className="grid-container-3">
          {Speciliazations.map((item, index) => (
            <div key={item.id}>
              <Card {...item} />
            </div>
          ))}
        </div>
      </section>

      <Team />

      <Footer />
    </>
  );
}

export default Aboutus;
