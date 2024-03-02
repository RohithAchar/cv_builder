import { useState } from "react";
import crossIcon from "../assets/x-solid.svg";
import arrowDownIcon from "../assets/arrow-down-solid.svg";

const PersonalInfoInput = ({ submitHandler }) => {
  const [showInput, setShowInput] = useState(true);
  const [showEdit, setShowEdit] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
  });
  return (
    <div className="personal-div">
      <div className="heading-wrapper">
        <h3>Personal Info</h3>
        <button
          onClick={() => {
            setShowInput(!showInput);
            setShowEdit(!showEdit);
            // if (showInput === false) setShowEdit(false);
            // else setShowEdit(true);
          }}
        >
          <img
            src={showInput ? crossIcon : arrowDownIcon}
            alt="arrow icon"
            width={12}
          />
        </button>
      </div>

      {showInput && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setShowInput(false);
            submitHandler(formData);
            setShowEdit(true);
          }}
        >
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
          </div>
          <div>
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Enter your phone number"
              value={formData.phoneNumber}
              onChange={(e) =>
                setFormData({ ...formData, phoneNumber: e.target.value })
              }
              required
            />
          </div>
          <div>
            <label htmlFor="address">Address:</label>
            <textarea
              id="address"
              name="address"
              placeholder="Enter your address"
              value={formData.address}
              onChange={(e) =>
                setFormData({ ...formData, address: e.target.value })
              }
              required
            />
          </div>
          <button type="submit"></button>
        </form>
      )}
      {showEdit && (
        <div className="collection">
          <p>
            Name: <strong>{formData.name}</strong>
          </p>
          <p>
            Email: <strong>{formData.email}</strong>
          </p>
          <p>
            Number: <strong>{formData.phoneNumber}</strong>
          </p>
          <p>
            Address: <strong>{formData.address}</strong>
          </p>
          <button
            className="edit-btn"
            onClick={() => {
              setShowInput(!showInput);
              setShowEdit(!showEdit);
            }}
          ></button>
        </div>
      )}
    </div>
  );
};

export default PersonalInfoInput;
