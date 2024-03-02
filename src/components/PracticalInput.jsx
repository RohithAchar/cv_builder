import { useState } from "react";
import crossIcon from "../assets/x-solid.svg";
import arrowDownIcon from "../assets/arrow-down-solid.svg";

const CollectedData = ({ info, deleteHandler }) => {
  return (
    <div className="collection">
      <p>
        Name: <strong>{info.companyName}</strong>
      </p>
      <p>
        Position: <strong>{info.positionTitle}</strong>
      </p>
      <p>
        Responsibility: <strong>{info.jobResponsibility}</strong>
      </p>
      <p>
        From: <strong>{info.startDate}</strong>
      </p>
      <p>
        To: <strong>{info.endDate}</strong>
      </p>
      <button
        className="delete-btn"
        onClick={() => {
          deleteHandler(info.id);
        }}
      ></button>
    </div>
  );
};

const PracticalInput = ({ submitHandler, data, deleteHandler }) => {
  const [showInput, setShowInput] = useState(false);
  const [showEdit, setShowEdit] = useState(true);
  const [practicalData, setPracticalData] = useState({
    companyName: "",
    positionTitle: "",
    jobResponsibility: "",
    startDate: "",
    endDate: "",
  });
  return (
    <div className="practical-div">
      <div className="heading-wrapper">
        <h3>Practical Experience</h3>
        <button
          onClick={() => {
            setShowInput(!showInput);
            setShowEdit(!showEdit);
            //   if (showInput === true) setShowEdit(false);
            //   else setShowEdit(true);
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
            submitHandler(practicalData);
            setShowInput(!showInput);
            setShowEdit(true);
            setPracticalData({
              companyName: "",
              positionTitle: "",
              jobResponsibility: "",
              startDate: "",
            });
          }}
        >
          <div>
            <label htmlFor="companyName">Company name:</label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              placeholder="Enter your company name"
              value={practicalData.companyName}
              onChange={(e) =>
                setPracticalData({
                  ...practicalData,
                  companyName: e.target.value,
                })
              }
              required
            />
          </div>
          <div>
            <label htmlFor="positionTitle">Position title:</label>
            <input
              type="text"
              id="positionTitle"
              name="positionTitle"
              placeholder="Enter your position title"
              value={practicalData.positionTitle}
              onChange={(e) =>
                setPracticalData({
                  ...practicalData,
                  positionTitle: e.target.value,
                })
              }
              required
            />
          </div>
          <div>
            <label htmlFor="jobResponsibility">Responsibility:</label>
            <textarea
              type="text"
              id="jobResponsibility"
              name="jobResponsibility"
              placeholder="Enter your job responsibility"
              value={practicalData.jobResponsibility}
              onChange={(e) =>
                setPracticalData({
                  ...practicalData,
                  jobResponsibility: e.target.value,
                })
              }
              required
            />
          </div>
          <div>
            <label htmlFor="startDate">From:</label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              placeholder="Enter your job start date"
              value={practicalData.startDate}
              onChange={(e) =>
                setPracticalData({
                  ...practicalData,
                  startDate: e.target.value,
                })
              }
              required
            />
          </div>
          <div>
            <label htmlFor="startDate">To:</label>
            <input
              type="date"
              id="endDate"
              name="endDate"
              placeholder="Enter your job end date"
              value={practicalData.endDate}
              onChange={(e) =>
                setPracticalData({
                  ...practicalData,
                  endDate: e.target.value,
                })
              }
              required
            />
          </div>
          <button type="submit"></button>
        </form>
      )}
      {showEdit && (
        <div>
          {data.map((info) => {
            return (
              <CollectedData
                key={info.id}
                info={info}
                deleteHandler={deleteHandler}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default PracticalInput;
