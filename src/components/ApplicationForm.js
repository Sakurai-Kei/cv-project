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
    workPeriod: "",
  });
  const [eduExp, setEduExp] = useState({
    institution: "",
    degree: "",
    eduPeriod: "",
  });

  function submitInfo() {
    setName(document.querySelector(".name").value);
    setPhone(document.querySelector(".phone").value);
    setEmail(document.querySelector(".email").value);
    setWorkExp({
      position: document.querySelector(".position").value,
      company: document.querySelector(".company").value,
      address: document.querySelector(".workAddress").value,
      workPeriod: `${document.querySelector(".workFrom").value} - ${
        document.querySelector(".workTo").value
      }`,
    });
    setEduExp({
      institution: document.querySelector(".institution").value,
      degree: document.querySelector(".degree").value,
      eduPeriod: `${document.querySelector(".eduFrom").value} - ${
        document.querySelector(".eduTo").value
      }`,
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
