import React from "react";
import "./Cart.css";
import profile from ".//../../images/Md.-Omar-Faruk.jpg";
// Font Awesome Icon Start
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
// Font Awesome Icon End

// React-Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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

      <div className="time">dynamic</div>
      <hr />
      <p className="p1">Exercise Details</p>
      <p className="p2 time">Selected List: {list.length}</p>
      <div className="time">
        <p className="p2">Exercise Time: 0 seconds </p>
      </div>
      <div className="time">
        <p className="p2">Break Time: 0 seconds</p>
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
