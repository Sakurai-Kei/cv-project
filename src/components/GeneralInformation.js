import React from "react";

function GeneralInformation() {
  return (
    <div className="GenInfo">
      <div>General Information</div>
      <input className="name" placeholder="Name" />
      <input className="phone" placeholder="Phone Number" />
      <input className="email" placeholder="Email" />
    </div>
  );
}

export default GeneralInformation;
