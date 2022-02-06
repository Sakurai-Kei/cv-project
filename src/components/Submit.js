import React from "react";
import PropTypes from "prop-types";

function Submit({ submit }) {
  return (
    <div>
      <button type="submit" onClick={submit}>
        Add
      </button>
    </div>
  );
}

Submit.propTypes = {
  submit: PropTypes.func.isRequired,
};

export default Submit;
