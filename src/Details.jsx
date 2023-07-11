import React, { useState } from "react";
import { useLocation,useNavigate} from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import "./Details.css"
const Details = () => {
  const location = useLocation();
  //   console.log(location.s);
  const navigate=useNavigate();
  const fruit = location.state.selectedOption;
  const [data,setdata]=useState({});
  useEffect(() => {
    axios
      .get(`https://www.fruityvice.com/api/fruit/${fruit}`)
      .then((res) => setdata(res.data.nutritions))
      .catch((e) => console.log(e));
  });
  console.log(data);
  return (
    <div className="details">
      <div className="nav">
        <div className="left">Home</div>
        <div className="right">Details</div>
      </div>
      <main>
        <h1>Hello{location.state.name}</h1>
        <h1>{location.state.email}</h1>
        <p>Nutrition Details of Your Favourite Fruit:</p>
      </main>
      <div className="tab">
        <div className="row">
            <div className="col1">Calories</div>
            <div className="col2">{data.calories}</div>
        </div>
        <div className="row">
            <div className="col1">Fat</div>
            <div className="col2">{data.fat}</div>
        </div>
        <div className="row">
            <div className="col1">Sugar</div>
            <div className="col2">{data.sugar}</div>
        </div>
        <div className="row">
            <div className="col1">Carbohydrates</div>
            <div className="col2">{data.carbohydrates}</div>
        </div>
        <div className="row">
            <div className="col1">Protein</div>
            <div className="col2">{data.protein}</div>
        </div>
      </div>
      <div className="btn">
        <button
          onClick={() => {
            navigate("/", {
              replace: true
            });
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Details;
