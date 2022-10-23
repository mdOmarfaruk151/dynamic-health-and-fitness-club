import React, { useState, useEffect } from "react";
import "./Cart.css";
import profile from ".//../../images/Md._Omar_Faruk.jpg";
// Font Awesome Icon Start
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
// Font Awesome Icon End
// React-Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Time from "../Run Time/Time";

// React-Toastify end
const Cart = ({ list }) => {
  // React-Toastify start
  const notify = () =>
    toast.success("Wow! Your Activity Completed!!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  // React-Toastify end

  // brack point start
  const [times, setTime] = useState(0);
  const handleButton = (t) => {
    const breakTime = t.target.value;
    setTime(breakTime);
    localStorage.setItem("time", breakTime);
  };

  // get data from local storage
  useEffect(() => {
    const data = localStorage.getItem("time");
    // here if data get then set if not then 0
    data && setTime(data);
  }, []);
  // dynamic btn number set in the array
  const btn = [10, 20, 30, 40, 50, 60];

  // brack point end

  return (
    <div className="cart">
      <h2 className="cart-title">Person Profile</h2>
      <hr />
      <div className="profile">
        <img src={profile} alt="" />
        <div className="profile-info">
          <p className="name">Md. Omar Faruk</p>
          <p>
            <small>
              <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon> Dhaka,
              Bangladesh
            </small>
          </p>
        </div>
      </div>

      <div className="body-info">
        <div>
          <p className="num">
            70<small className="small">kg</small>
          </p>
          <p>
            <small>Weight</small>
          </p>
        </div>
        <div>
          <p className="num">5.6</p>
          <p>
            <small>Height</small>
          </p>
        </div>
        <div>
          <p className="num">
            25<small className="small">yrs</small>
          </p>
          <p>
            <small>Age</small>
          </p>
        </div>
      </div>
      <hr />
      <p className="p1">Add A Break</p>

      <div className="time">
        {/* button for break time */}
        {btn.map((b, index) => (
          <button
            className="btn"
            value={b}
            onClick={(event) => handleButton(event)}
            key={index}
          >
            {b} Min
          </button>
        ))}
      </div>
      <hr />
      <p className="p1">Exercise Details</p>
      <p className="p2 time">Selected List: {list.length}</p>
      <div className="time">
        <p className="p2">
          <Time list={list}></Time>{" "}
        </p>
      </div>
      <div className="time">
        <p className="p2">Break Time: {times} Minutes</p>
      </div>
      <hr />
      <button className="activity-btn" onClick={notify}>
        <p>Activity Completed</p>
      </button>
      <ToastContainer />
    </div>
  );
};

export default Cart;
