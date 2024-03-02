import { useState } from "react";
import crossIcon from "../assets/x-solid.svg";
import arrowDownIcon from "../assets/arrow-down-solid.svg";

const CollectedData = ({ info, deleteHandler }) => {
  return (
    <div className="collection">
      <p>
        Institution: <strong>{info.institution}</strong>
      </p>
      <p>
        Degree: <strong>{info.degree}</strong>
      </p>
      <p>
        FOS: <strong>{info.fieldOfStudy}</strong>
      </p>
      <p>
        Year: <strong>{info.graduationYear}</strong>
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

const EducationInput = ({ submitHandler, data, deleteHandler }) => {
  const [showInput, setShowInput] = useState(false);
  const [showEdit, setShowEdit] = useState(true);
  const [educationData, setEducationData] = useState({
    institution: "",
    degree: "",
    fieldOfStudy: "",
    graduationYear: "",
  });
  return (
    <div className="education-div">
      <div className="heading-wrapper">
        <h3>Education</h3>
        <button
          onClick={() => {
            setShowInput(!showInput);
            if (showInput === false) setShowEdit(false);
            else setShowEdit(true);
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
            submitHandler(educationData);
            setShowInput(!showInput);
            setEducationData({
              institution: "",
              degree: "",
              fieldOfStudy: "",
              graduationYear: "",
            });
          }}
        >
          <div>
            <label htmlFor="institution">Institution:</label>
            <input
              type="text"
              id="institution"
              name="institution"
              placeholder="Enter your institution"
              value={educationData.institution}
              onChange={(e) =>
                setEducationData({
                  ...educationData,
                  institution: e.target.value,
                })
              }
              required
            />
          </div>
          <div>
            <label htmlFor="degree">Degree:</label>
            <input
              type="text"
              id="degree"
              name="degree"
              placeholder="Enter your degree"
              value={educationData.degree}
              onChange={(e) =>
                setEducationData({
                  ...educationData,
                  degree: e.target.value,
                })
              }
              required
            />
          </div>
          <div>
            <label htmlFor="fieldOfStudy">Field of Study:</label>
            <input
              type="text"
              id="fieldOfStudy"
              name="fieldOfStudy"
              placeholder="Enter your field of study"
              value={educationData.fieldOfStudy}
              onChange={(e) =>
                setEducationData({
                  ...educationData,
                  fieldOfStudy: e.target.value,
                })
              }
              required
            />
          </div>
          <div>
            <label htmlFor="graduationYear">Graduation Year:</label>
            <input
              type="text"
              id="graduationYear"
              name="graduationYear"
              placeholder="Enter your graduation year"
              value={educationData.graduationYear}
              onChange={(e) =>
                setEducationData({
                  ...educationData,
                  graduationYear: e.target.value,
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

export default EducationInput;
