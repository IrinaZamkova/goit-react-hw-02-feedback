import React from "react";
import PropTypes from "prop-types";

const Section = ({ children, title }) => (
  <section className="sections">
    <h2>{title}</h2>
    {children}
  </section>
);

Section.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
};
export default Section;
