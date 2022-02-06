/* eslint-disable react/forbid-prop-types */
import React from "react";
import PropTypes from "prop-types";

function Preview({ name, phone, email, workExp, eduExp }) {
  const { position, company, address, workPeriod } = workExp;
  const { institution, degree, eduPeriod } = eduExp;

  return (
    <div className="Preview">
      <div className="GenInfoPreview">
        <div className="NamePreview">{name}</div>
        <div>{phone}</div>
        <div>{email}</div>
      </div>
      <div className="PracExpTitle">Experience</div>
      <div className="PracExpPreview">
        <div>{workPeriod}</div>
        <div>
          <div>{position}</div>
          <div>
            {company}, {address}
          </div>
        </div>
      </div>
      <div className="EduExpTitle">Education</div>
      <div className="EduExpPreview">
        <div>{eduPeriod}</div>
        <div>
          <div>{institution}</div>
          <div>{degree}</div>
        </div>
      </div>
    </div>
  );
}

Preview.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.string,
  email: PropTypes.string,
  workExp: PropTypes.object,
  eduExp: PropTypes.object,
};

Preview.defaultProps = {
  name: "",
  phone: "",
  email: "",
  workExp: {},
  eduExp: {},
};

export default Preview;
