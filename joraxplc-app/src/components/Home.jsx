import React from "react";
import { Link } from "react-router-dom";
import pharmacistImage from "../images/nigeria-pharmacy.svg";
import greenLeaf from "../images/green-leaf.svg";
import {
  Values,
  Services,
  Products,
  Pharmacist,
  Comments,
  AboutusImage,
} from "../data/data";

const Home = (props) => {
  return (
    <div>
      <div className="hr-line"></div>
      <section className="banner-section">
        <div className="flex-container">
          <figure className="place-left">
            <h1>jorax healthcare !</h1>
            <p>
              Pharmacuetical company specialized in providing quality and
              efficacious products to people who need them within the shortest
              time possible
            </p>
            <div className="flex-btn">
              <button className="cta-btn">
                <Link to="/products">order now</Link>
              </button>
              <button className="cta-btn">
                <Link to="/products">learn more</Link>
              </button>
            </div>
          </figure>
          <figure className="place-right">
            <div className="img-container">
              <img src={pharmacistImage} alt={pharmacistImage} />
            </div>
          </figure>
        </div>
      </section>
      <div className="hr-line"></div>
      {/* core values  */}
      <section className="services">
        <div className="frame-section">
          <div className="frame-header">
            <h3>core values</h3>
          </div>
          <div className="frame-body">
            <div className="flex-container">
              {Values.map((value) => (
                <div key={value.id}>
                  <figure className="flex-item">
                    <div className="icon-container">
                      <img src={value.icon} alt={value.icon} />
                    </div>
                    <h5>{value.title}</h5>
                    <p>{value.description}</p>
                  </figure>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* About us */}
      <section className="aboutus-section" id="aboutus">
        <h3>About us</h3>
        <div className="flex-container">
          <figure className="place-left">
            <h4>pharmaceutical product available at your reach</h4>
            <p>
              We specialize in marketing of other Pharmaceutical companies’
              products in Nigeria. The company sprang up to partner with some
              companies who do not have a structured marketing and sales force
              to maintain a reasonable market share and thus sustain the
              profitability of the company in the long run.
            </p>
            <div className="leaf-img-container">
              <img src={greenLeaf} alt={greenLeaf} />
            </div>
          </figure>
          <figure className="place-right">
            <div className="img-container first-child">
              <img src={AboutusImage.lg} alt={AboutusImage.lg} />
            </div>
            <div className="img-container last-child">
              <img src={AboutusImage.sm} alt={AboutusImage.lg} />
            </div>
          </figure>
        </div>
      </section>

      {/* Services */}
      <section className="services">
        <div className="frame-section">
          <div className="frame-header">
            <h4>we offer accesibilty to healthy care and medications</h4>
          </div>
          <div className="frame-body">
            <div className="flex-container">
              {Services.map((service) => (
                <div key={service.id}>
                  <figure className="flex-item">
                    <div className="icon-container">
                      <img src={service.icon} alt={service.icon} />
                    </div>
                    <h5>{service.title}</h5>
                    <p>{service.description}</p>
                  </figure>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* products */}
      <section className="products">
        <h3>Our products</h3>
        <div className="flex-container">
          {Products.map((product) => (
            <div key={product.id}>
              <figure>
                <div className="img-container">
                  <img src={product.imgSrc} alt={product.imgSrc} />
                </div>
                <h5 className="product-title">{product.title}</h5>
              </figure>
            </div>
          ))}
        </div>
      </section>
      {/* Testimonials */}
      <section className="testimonials">
        <h3>customer testimonials</h3>
        <div className="grid-container">
          {Comments.map((comment) => (
            <div key={comment.id}>
              <figure className="flex-item">
                <p>{comment.feedback}</p>
                <div className="img-container">
                  <img src={comment.imgSrc} alt={comment.imgSrc} />
                </div>
                <div>
                  <h5>{comment.name}</h5>
                </div>
              </figure>
            </div>
          ))}
        </div>
      </section>
      <section className="pharmacist">
        <h3>pharmacist</h3>
        <div className="flex-container">
          {Pharmacist.map((member) => (
            <div key={member.id}>
              <figure className="flex-item">
                <div className="img-container">
                  <img src={member.imgSrc} alt={member.imgSrc} />
                </div>
                <div className="member-bio">
                  <p>{member.name}</p>
                  <h5>{member.title}</h5>
                </div>
              </figure>
            </div>
          ))}
        </div>
      </section>
      {/* what we offer */}
      {/* please check services.css for this section styles */}
      <section className="what-we-offer">
        <div className="flex-container">
          <figure className="place-left">
            <h4>we only offer you the best</h4>
          </figure>
          <figure className="place-right">
            <p>
              Jorax Healthcare, reaching your market audience becomes very easy
              and pharmaceutical products accessible and affordable to all.{" "}
            </p>
            <div className="flex-btn">
              <button className="cta-btn">
                <Link to="/products">order now</Link>
              </button>
            </div>
          </figure>
        </div>
      </section>
    </div>
  );
};
export default Home;
