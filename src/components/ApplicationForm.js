/* eslint-disable react/jsx-no-bind */
import React, { useState } from "react";
import GeneralInformation from "./GeneralInformation";
import PracticalExperience from "./PracticalExperience";
import EducationalExperience from "./EducationalExperience";
import Preview from "./Preview";

function ApplicationForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [workExp, setWorkExp] = useState({
    position: "",
    company: "",
    address: "",
    period: "",
  });
  const [eduExp, setEduExp] = useState({
    institution: "",
    degree: "",
    period: "",
  });

  const { workPosition, company, address, workPeriod } = workExp;
  const { institution, degree, eduPeriod } = eduExp;

  function isEmpty(value, original) {
    if (value === "" || value === " - ") {
      return original;
    }

    return value;
  }

  function submitInfo() {
    setName(isEmpty(document.querySelector(".name").value), name);
    setPhone(isEmpty(document.querySelector(".phone").value), phone);
    setEmail(isEmpty(document.querySelector(".email").value), email);
    setWorkExp({
      position: isEmpty(
        document.querySelector(".position").value,
        workPosition
      ),
      company: isEmpty(document.querySelector(".company").value, company),
      address: isEmpty(document.querySelector(".workAddress").value, address),
      period: isEmpty(
        `${document.querySelector(".workFrom").value} - ${
          document.querySelector(".workTo").value
        }`,
        workPeriod
      ),
    });
    setEduExp({
      institution: isEmpty(
        document.querySelector(".institution").value,
        institution
      ),
      degree: isEmpty(document.querySelector(".degree").value, degree),
      period: isEmpty(
        `${document.querySelector(".eduFrom").value} - ${
          document.querySelector(".eduTo").value
        }`,
        eduPeriod
      ),
    });

    // Array.from(document.querySelectorAll("input")).forEach(
    //   (input) => (input.value = "")
    // ); What if I don't reset form?
  }

  return (
    <div className="AppContainer">
      <div className="ApplicationFormModal">
        <div className="Form">
          <GeneralInformation />
          <PracticalExperience />
          <EducationalExperience />
          <button type="submit" onClick={submitInfo}>
            Add
          </button>
        </div>
      </div>
      <div className="Preview">
        <Preview
          name={name}
          phone={phone}
          email={email}
          workExp={workExp}
          eduExp={eduExp}
        />
      </div>
    </div>
  );
}

export default ApplicationForm;
