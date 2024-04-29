import React from "react";
import { Link } from "react-router-dom";
// import EyeIcon from "../../shared/icons/EyeIcon";
import UploadIcon from "../../shared/icons/UploadIcon";
function Distributor(props) {
  // https://docs.google.com/forms/d/e/1FAIpQLSd4RmG005G7AOeVmsnfVis5h3TOTvznkDZPhYiYDhoc8gejBA/formResponse
  /*

entry.1127868002=j2024-lastname
entry.469100519=j2024-email
entry.1859207153=j2024-phone
entry.470627069=j2024-business
entry.203507884=j2024-address
entry.1299728644=j2024-business-reg
entry.1560551000=j2024-government-id
entry.312061382=j-2024-describe
// upload a valid govt id  name="entry.401950051"
//upload a passport: name="entry.1090205867"
// i agree
name="entry.1056648814_sentinel"
  */
  // const [loading, setLoading] = useState(false);
  return (
    <section className="auth-section">
      <div className="form-container">
        <h2>to be a distributor</h2>
        <p className="verify">verify your KYC</p>
        {/* <iframe
          id="hiddenForm"
          name="hiddenIframe"
          style={{ display: "none" }}
        ></iframe> */}
        <form method="post" target="hiddenIframe">
          <div className="double flex-container-2">
            <div className="form-field">
              <label htmlFor="entry.185660002">first name</label>
              <input
                type="text"
                name="entry.185660002"
                required
                placeholder="e.g precious"
              />
            </div>
            <div className="form-field">
              <label htmlFor="entry.1127868002">last name</label>
              <input
                type="text"
                name="entry.1127868002"
                required
                placeholder="e.g chijioke"
              />
            </div>
          </div>
          <div className="single">
            <div className="form-field">
              <label htmlFor="entry.469100519">email</label>
              <input
                type="tel"
                name="entry.469100519"
                required
                placeholder="e.g precious@gmail.com"
              />
            </div>
          </div>
          <div className="single">
            <div className="form-field">
              <label htmlFor="entry.1859207153">phone number</label>
              <input
                type="tel"
                name="entry.1859207153"
                required
                placeholder="e.g +23409050987611"
              />
            </div>
          </div>
          <div className="single">
            <div className="form-field">
              <label htmlFor="entry.470627069">business name</label>
              <input
                type="text"
                name="entry.470627069"
                required
                placeholder="e.g @Presh Concept"
              />
            </div>
          </div>
          <div className="single">
            <div className="form-field">
              <label htmlFor="entry.203507884">verifiable address</label>
              <input
                type="text"
                name="entry.203507884"
                required
                placeholder="e.g No 34 April Close, Ajah Lagos"
              />
            </div>
          </div>
          <div className="single">
            <div className="form-field">
              <label htmlFor="entry.1299728644">
                enter business registration number if any
              </label>
              <input
                type="text"
                name="entry.1299728644"
                placeholder="e.g ICB88AB"
              />
            </div>
          </div>
          <div className="single">
            <div className="form-field">
              <label htmlFor="entry.1560551000">
                enter a goverment ID number
              </label>
              <input
                type="text"
                name="entry.1560551000"
                placeholder="e.g +23409050987611"
              />
            </div>
          </div>
          <div className="single">
            <div className="form-field">
              <label htmlFor="entry.312061382">
                Describe Why You Should Be Appointed A Distributor For Jorax
                Healthcare In Not Less Than 250 Words
              </label>
              {/* <input
                type="text"
                name="description"
                id="government-id"
                placeholder="e.g +23409050987611"
              /> */}
              <textarea name="entry.312061382" cols="30" rows="10"></textarea>
            </div>
          </div>
          <div className="single">
            <div className="form-field upload">
              <label htmlFor="entry.401950051">
                Upload Valid Government ID (Maximum of 2MB)
              </label>
              <div className="upload-wrapper">
                <input
                  type="file"
                  name="entry.401950051"
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
              <label htmlFor="entry.1090205867">
                Upload Passport (Maximum of 2MB)
              </label>
              <div className="upload-wrapper">
                <input
                  type="file"
                  name="entry.1090205867"
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
              <label className="checkbox" htmlFor="entry.1056648814_sentinel">
                <input
                  type="checkbox"
                  name="entry.1056648814_sentinel"
                  required
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
                <button type="submit" className="cta-btn-primary">
                  apply
                </button>
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
