import React, { useState } from "react";
import { Link } from "react-router-dom";

function Team(props) {
  const [readmore1, setReadMore1] = useState(false);
  const [readmore2, setReadMore2] = useState(false);

  return (
    <section className="team-section">
      <h3>jorax healthcare team</h3>
      <div className="flex-container-2">
        <div className="flex-item">
          <figure className="team-member">
            <div className="img-container">
              <img
                src={`/assets/teams/jorax-chairman.svg`}
                alt="jorax chairman"
              />
            </div>
            <div className="inner-section">
              <div className="inner-flex">
                <h4>Pharm. E. M. R. Okokoh mPSN</h4>
                <Link
                  to="https://www.linkedin.com/in/pharmacistraymondokokoh?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  className="icon-container"
                  target="_blank"
                >
                  <img
                    src={`/assets/teams/linkedin-icon.svg`}
                    alt="jorax chairman linkedin account"
                  />
                </Link>
              </div>
              <p className="member-title">Chairman Jorax Healthcare Ltd.</p>
            </div>
            <div className="bottom-section">
              <p className={readmore1 ? "active" : "read-more"}>
                Pharm. Raymond Okokoh stands at the helm of Jorax Healthcare
                Ltd., bringing a wealth of experience and a passion for
                healthcare innovation. Born on February 14, 1989, in
                Ndiagu-Akpaka, Ngbo, Ohaukwu LGA, Ebonyi State, his journey in
                the pharmaceutical realm began with academic excellence at the
                University of Nigeria, where he earned his Pharmacy degree. With
                a relentless pursuit of knowledge, Pharm. Okokoh expanded his
                horizons by pursuing a Master's degree in Germany at the
                University of Würzburg. Undeterred by challenges, he is
                currently engaged in a Ph.D. program at the same prestigious
                institution, further solidifying his commitment to advancing
                pharmaceutical expertise. Pharm. Raymond Okokoh's leadership at
                Jorax Healthcare is rooted in a combination of practical
                business acumen and a deep understanding of pharmaceutical
                intricacies. His vision goes beyond the conventional, aiming to
                merge preventive and curative healthcare solutions through
                innovative products like Jorax Premium Palm Oil. As a seasoned
                Pharmacist, he not only oversees the governance of Jorax
                Healthcare but also leads by example, embodying a commitment to
                the health and well-being of individuals. Pharm. Okokoh's
                journey reflects a dedication to excellence, blending academic
                rigor, international exposure, and a profound passion for
                enhancing healthcare standards. Under his guidance, Jorax
                Healthcare is poised to make a lasting impact on the healthcare
                landscape, delivering quality products and solutions that
                resonate with the company's core values. Pharm. Raymond Okokoh's
                leadership journey is a testament to his unwavering dedication
                to advancing healthcare practices for a healthier and happier
                society.
              </p>
              <div className="cta-btn-container">
                <button
                  onClick={() => {
                    setReadMore1((prev) => !prev);
                  }}
                  className="cta-btn-primary"
                >
                  {readmore1 ? "read less" : "read more"}
                </button>
              </div>
            </div>
          </figure>
        </div>
        <div className="flex-item">
          <figure className="team-member">
            <div className="img-container">
              <img
                src={`/assets/teams/jorax-finance-director.svg`}
                alt="jorax director of finance"
              />
            </div>
            <div className="inner-section">
              <div className="inner-flex">
                <h4>Jennifer Chidimma Okokoh</h4>
                <Link
                  to="https://www.linkedin.com/in/jennifer-chidimma-okolo-566082248/"
                  className="icon-container"
                  target="_blank"
                >
                  <img
                    src={`/assets/teams/linkedin-icon.svg`}
                    alt="jorax chairman linkedin account"
                  />
                </Link>
              </div>
              <p className="member-title">
                Director of Finance Jorax Healthcare Ltd.
              </p>
            </div>
            <div className="bottom-section">
              <p className={readmore2 ? "active" : "read-more"}>
                Steering the operational helm of Jorax Foods and Natural
                Medicines division is Pharm. Mrs. Jennifer Chidimma Okokoh, a
                dynamic and compassionate leader. Born on September 7, 1998, in
                Enugu, she embarked on her academic journey at the esteemed
                University of Nigeria, Nsukka, where she honed her skills and
                passion for pharmacy. As the wife of the Chairman of Jorax
                Healthcare, Jennifer brings a unique blend of familial
                dedication and professional expertise to her role. Her
                commitment to excellence is evident in every facet of her work,
                from fostering a supportive work culture to driving operational
                efficiency. With a deeply ingrained sense of devotion and care,
                Jennifer exemplifies the values that underpin Jorax Healthcare's
                mission of enhancing health and quality of life. Her leadership
                style is characterized by empathy, resilience, and a relentless
                pursuit of excellence. In her capacity as a Director, she plays
                a pivotal role in translating the company's vision into tangible
                results, overseeing day-to-day operations of the Foods and
                Natural Medicines division, and ensuring alignment with
                strategic objectives of Jorax Healthcare. Pharm. Mrs. Jennifer
                Okokoh's leadership is marked by a dedication to nurturing
                talent, fostering innovation, and delivering value to
                stakeholders. With her guidance, Jorax Healthcare is poised to
                continue its trajectory of success, offering innovative
                nutritional and healthcare solutions that make a meaningful
                difference in people's lives. Pharm. Mrs. Okokoh's leadership
                journey reflects a deep-seated commitment to advancing
                healthcare standards and fostering a healthier, happier society.
              </p>
              <div className="cta-btn-container">
                <button
                  onClick={() => {
                    setReadMore2((prev) => !prev);
                  }}
                  className="cta-btn-primary"
                >
                  {readmore2 ? "read less" : "read more"}
                </button>
              </div>
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}

export default Team;
