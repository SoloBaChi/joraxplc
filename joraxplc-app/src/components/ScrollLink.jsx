import React from "react";
import { Link as ScrolLink } from "react-scroll";

function ScrollLink({ to, children }) {
  return (
    <ScrolLink
      activeClass="active"
      to={to}
      spy={true}
      //   smooth={true}
      offset={-70} // Adjust this offset to suit your needs (optional)
      duration={1200}
    >
      {children}
    </ScrolLink>
  );
}

export default ScrollLink;
