import emailIcon from "../assets/envelope-solid.svg";
import phoneIcon from "../assets/phone-solid.svg";
import location from "../assets/location-dot-solid.svg";

const DisplayPersonalInfo = ({ data }) => {
  return (
    <div className="personal-info">
      <h1>{data.name.toUpperCase()}</h1>
      <div>
        <p>
          <img src={emailIcon} alt="email icon" width={20} />
          {data.email}
        </p>
        <p>
          <img src={phoneIcon} alt="phone icon" width={20} />
          {data.phoneNumber}
        </p>
        <p>
          <img src={location} alt="location icon" width={18} />
          {data.address}
        </p>
      </div>
    </div>
  );
};

export default DisplayPersonalInfo;
