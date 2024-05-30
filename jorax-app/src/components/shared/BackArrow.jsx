import React from "react";

function BackArrow(props) {
  return (
    <section className="back-arrow-section">
      <div className="back-arrow-container">
        <svg
          width="19"
          height="15"
          viewBox="0 0 19 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.9999 7.06982H1.16992"
            stroke="#00AC57"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.07 1L1 7.07L7.07 13.14"
            stroke="#00AC57"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
}

export default BackArrow;
