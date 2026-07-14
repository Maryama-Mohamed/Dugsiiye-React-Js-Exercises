import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [assignData, setAssignData] = useState({
    fullName: "",
    email: "",
    role: "",
    years: "",
    skill: [],
    terms: false,
    noti: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(assignData);
  };
  const handleChange = (e) => {
    const { name, value, type } = e.target;

    setAssignData((preData) => ({
      ...preData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  return (
    <form className="formclass" onSubmit={handleSubmit}>
      <h2>Developer Application Form</h2>
      <label>FullName</label> <br />
      <input
        type="text"
        name="fullName"
        value={assignData.fullName}
        onChange={handleChange}
      />
      <br />
      <label>Email</label>
      <br />
      <input
        type="email"
        name="email"
        value={assignData.email}
        onChange={handleChange}
      />
      <br />
      <select name="role" value={assignData.role} onChange={handleChange}>
        <option value="fullstack">fullstack</option>
        <option value="softweredev">softweredeveloper</option>
        <option value="mobileappdev">mobileappdev</option>
        <option value="frontenddev">frontenddev</option>
      </select>
      <br />
      <label>Years of experiance</label>
      <br />
      <input
        type="number"
        name="years"
        value={assignData.years}
        onChange={handleChange}
      />
      <br />
      <label>Skills</label>
      <br />
      <input
        type="checkbox"
        name="skill"
        value={assignData.skill}
        onChange={handleChange}
      />
      <label>react</label>
      <input
        type="checkbox"
        name="skill"
        value={assignData.skill}
        onChange={handleChange}
      />
      <label>Javascript</label>
      <input
        type="checkbox"
        name="skill"
        value={assignData.skill}
        onChange={handleChange}
      />
      <label>Flutter</label>
      <br />
      <input
        type="checkbox"
        name="terms"
        value={assignData.terms}
        onChange={handleChange}
      />
      <label>Agree Terms and conditions</label> <br />
      <input
        type="checkbox"
        name="noti"
        value={assignData.noti}
        onChange={handleChange}
      />
      <label>Receive Notifications </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default App;
