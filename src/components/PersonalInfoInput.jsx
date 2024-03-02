import { useState } from "react";

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
      <h3>Personal Info</h3>
      <button
        onClick={() => {
          setShowInput(!showInput);
          if (showInput === false) setShowEdit(false);
          else setShowEdit(true);
        }}
      >
        V
      </button>
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
          <button type="submit">Save</button>
        </form>
      )}
      {showEdit && (
        <div>
          <p>{formData.name}</p>
          <p>{formData.email}</p>
          <p>{formData.phoneNumber}</p>
          <p>{formData.address}</p>
          <button
            onClick={() => {
              setShowInput(!showInput);
              setShowEdit(!showEdit);
            }}
          >
            E
          </button>
        </div>
      )}
    </div>
  );
};

export default PersonalInfoInput;
