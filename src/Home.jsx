import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";
const Home = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const options = ["apple", "banana", "guava"];

  const navigate = useNavigate();
  const handlehange = (event) => {
    setSelectedOption(event.target.value);
  };
  const setnameChange = (event) => {
    setName(event.target.value);
  };
  const setemailChange = (event) => {
    setEmail(event.target.value);
  };
  return (
    <>
      <div className="nav">
        <div className="left">Home</div>
        <div className="right">Details</div>
      </div>
      <div className="main">
        <form>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            onChange={setnameChange}
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            onChange={setemailChange}
          />
        </form>
      </div>
      <div className="dropdown">
        <select value={selectedOption} onChange={handlehange}>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="btn">
        <button
          onClick={() => {
            navigate("/details", {
              replace: true,
              state: { name, email, selectedOption },
            });
          }}
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default Home;
