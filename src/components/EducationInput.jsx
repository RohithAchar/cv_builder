import { useState } from "react";

const CollectedData = ({ info, deleteHandler }) => {
  return (
    <div>
      <p>{info.institution}</p>
      <p>{info.degree}</p>
      <p>{info.fieldOfStudy}</p>
      <p>{info.graduationYear}</p>
      <button
        onClick={() => {
          deleteHandler(info.id);
        }}
      >
        D
      </button>
    </div>
  );
};

const EducationInput = ({ submitHandler, data, deleteHandler }) => {
  const [showInput, setShowInput] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [educationData, setEducationData] = useState({
    institution: "",
    degree: "",
    fieldOfStudy: "",
    graduationYear: "",
  });
  return (
    <div className="education-div">
      <h3>Education</h3>
      <button
        onClick={() => {
          setShowInput(!showInput);
          if (showInput === true) setShowEdit(false);
          else setShowEdit(true);
        }}
      >
        Add
      </button>
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
          <button type="submit">Submit</button>
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
