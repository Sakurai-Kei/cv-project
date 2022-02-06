import React from "react";
import PropTypes from "prop-types";

function Footer({ author, year }) {
  return (
    <div className="Footer">
      Copyright © {year} {author}
    </div>
  );
}

Footer.propTypes = {
  author: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
};

export default Footer;
