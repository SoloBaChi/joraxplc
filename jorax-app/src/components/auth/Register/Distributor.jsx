import React from "react";
import { Link } from "react-router-dom";
import EyeIcon from "../../shared/icons/EyeIcon";
import UploadIcon from "../../shared/icons/UploadIcon";
function Distributor(props) {
  return (
    <section className="auth-section">
      <div className="form-container">
        <h2>to be a distributor</h2>
        <p className="verify">verify your KYC</p>
        <form>
          <div className="double flex-container-2">
            <div className="form-field">
              <label htmlFor="firstName">first name</label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                required
                placeholder="e.g precious"
              />
            </div>
            <div className="form-field">
              <label htmlFor="lastName">last name</label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                required
                placeholder="e.g chijioke"
              />
            </div>
          </div>
          <div className="single">
            <div className="form-field">
              <label htmlFor="email">email</label>
              <input
                type="tel"
                name="email"
                id="email"
                required
                placeholder="e.g precious@gmail.com"
              />
            </div>
          </div>
          <div className="single">
            <div className="form-field">
              <label htmlFor="phone">phone number</label>
              <input
                type="tel"
                name="phone"
                id="phone"
                required
                placeholder="e.g +23409050987611"
              />
            </div>
          </div>
          <div className="single">
            <div className="form-field">
              <label htmlFor="businessName">business name</label>
              <input
                type="text"
                name="businessName"
                id="businessName"
                required
                placeholder="e.g @Presh Concept"
              />
            </div>
          </div>
          <div className="single">
            <div className="form-field">
              <label htmlFor="address">verifiable address</label>
              <input
                type="text"
                name="address"
                id="address"
                required
                placeholder="e.g No 34 April Close, Ajah Lagos"
              />
            </div>
          </div>
          <div className="single">
            <div className="form-field">
              <label htmlFor="business-regnum">
                enter business registration number if any
              </label>
              <input
                type="text"
                name="business-regnum"
                id="business-regnum"
                placeholder="e.g ICB88AB"
              />
            </div>
          </div>
          <div className="single">
            <div className="form-field">
              <label htmlFor="government-id">enter a goverment ID number</label>
              <input
                type="text"
                name="government-id"
                id="government-id"
                placeholder="e.g +23409050987611"
              />
            </div>
          </div>
          <div className="single">
            <div className="form-field">
              <label htmlFor="description">
                Describe Why You Should Be Appointed A Distributor For Jorax
                Healthcare In Not Less Than 250 Words
              </label>
              {/* <input
                type="text"
                name="description"
                id="government-id"
                placeholder="e.g +23409050987611"
              /> */}
              <textarea
                name="description"
                id="description"
                cols="30"
                rows="10"
              ></textarea>
            </div>
          </div>
          <div className="single">
            <div className="form-field upload">
              <label htmlFor="valid-id">
                Upload Valid Government ID (Maximum of 2MB)
              </label>
              <div className="upload-wrapper">
                <input
                  type="file"
                  name="valid-id"
                  id="valid-id"
                  placeholder="Select"
                />
                <div className="icon-container">
                  <UploadIcon />
                  <span>Select</span>
                </div>
              </div>
            </div>
          </div>
          <div className="single">
            <div className="form-field upload">
              <label htmlFor="passport">Upload Passport (Maximum of 2MB)</label>
              <div className="upload-wrapper">
                <input
                  type="file"
                  name="passport"
                  id="passport"
                  placeholder="Select"
                />
                <div className="icon-container">
                  <UploadIcon />
                  <span>Select</span>
                </div>
              </div>
            </div>
          </div>
          <div className="single">
            <div className="form-field">
              <label className="checkbox" htmlFor="checkbox">
                <input
                  type="checkbox"
                  name="checkbox"
                  id="checkbox"
                  required
                  placeholder="e.g precious@gmail.com"
                />
                <p>
                  I agree to Jorax privacy policy and terms of service{" "}
                  <Link to="/" className="link-text">
                    here
                  </Link>
                </p>
              </label>
            </div>
          </div>
          <div className="form-field">
            <div className="flex-container-2 bottom">
              <div className="cta-btn-container">
                <button className="cta-btn-primary">apply</button>
              </div>
              {/* <div className="existing-user">
                <p>
                  Already have account ?{" "}
                  <Link className="link-text" to="/login">
                    apply
                  </Link>
                </p>
              </div> */}
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Distributor;
