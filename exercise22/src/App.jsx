import React, { useState } from "react";

const App = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [isChecked, setIsChecked] = useState(false);

  const [selectedOption, setSelectedOption] = useState("");

  const handleSummited = (e) => {
    e.preventDefault();
    // console.log("hhh");
    setFormData(e.target.value);
    setIsChecked(e.target.checked);
    setSelectedOption(e.target.value);
  };
  const handlechange = (e) => {
    setFormData(e.target.value);
    setIsChecked(e.target.checked);
  };

  return (
    <form onSubmit={handleSummited}>
      <input
        type="text"
        name="username"
        placeholder="Enter your name"
        value={formData.username}
        onChange={handlechange}
      />{" "}
      <br />
      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        value={formData.email}
        onChange={handlechange}
      />{" "}
      <br />
      <input
        type="password"
        name="password"
        placeholder="Enter your password"
        value={formData.password}
        onChange={handlechange}
      />{" "}
      <br />
      <input type="checkbox" checked={isChecked} onChange={handlechange} />{" "}
      <br />
      <select
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
      >
        <option value="option1">Option 1</option>
        <option value="option1">Option 2</option>
        <option value="option1">Option 3</option>
      </select>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default App;
