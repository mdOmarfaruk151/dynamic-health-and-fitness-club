// Font Awesome Icon Start
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
// Font Awesome Icon End
import React from "react";
import "./Package.css";

const Package = (props) => {
  const { name, img, time, age, ratings } = props.package;

  return (
    <div className="package">
      <img src={img} alt="images" />
      <div className="package-info">
        <p className="package-name">{name}</p>
        <p>For Age: {age}</p>
        <p>Time Required: {time} Min</p>
        <p>
          <small>Ratings: {ratings} Stars</small>
        </p>
        <p className="package-includes">
          <h4>Package Includes:</h4>
          1. Fitness testing, Diet Plan
          <br />
          2. Weekly motivation and accountability
          <br />
          3. Ongoing nutrition support
          <br />
          4. Training Calendars
          <br />
          5. Free Wifi & Community Support
          <br />
        </p>
      </div>
      <button
        onClick={() => props.handleAddToListClick(props.package)}
        className="btn-cart"
      >
        <p className="btn-text">Add to list</p>
        <FontAwesomeIcon icon={faList}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Package;
