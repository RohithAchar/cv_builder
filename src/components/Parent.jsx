import { useState } from "react";
import PersonalInfoInput from "./PersonalInfoInput";
import DisplayPersonalInfo from "./DisplayPersonalInfo";
import EducationInput from "./EducationInput";
import EducationDisplay from "./EducationDisplay";
import PracticalInput from "./PracticalInput";
import PracticalDisplay from "./PracticalDisplay";

const Parent = () => {
  const [personalData, setPersonalData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
  });
  const personalSubmitHandler = (newData) => {
    setPersonalData({ ...newData });
  };

  const [educationData, setEducationData] = useState([]);
  const educationSubmitHandler = (newData) => {
    let id;
    if (educationData.length === 0) {
      let id = 0;
      setEducationData([{ ...newData, id: id }]);
      return;
    } else {
      id = educationData[educationData.length - 1].id + 1;
      setEducationData([...educationData, { ...newData, id: id }]);
    }
  };
  const deleteEducationData = (id) => {
    setEducationData(
      educationData.filter((info) => {
        if (info.id !== id) return info;
      })
    );
  };

  const [practicalExperience, setPracticalExperience] = useState([]);
  const pracicalSubmitHandler = (newData) => {
    let id;
    if (practicalExperience.length === 0) {
      let id = 0;
      setPracticalExperience([{ ...newData, id: id }]);
      return;
    } else {
      id = practicalExperience[practicalExperience.length - 1].id + 1;
      setPracticalExperience([...practicalExperience, { ...newData, id: id }]);
    }
  };
  const deletePracticalExperience = (id) => {
    setPracticalExperience(
      practicalExperience.filter((info) => {
        if (info.id !== id) return info;
      })
    );
  };
  console.log(practicalExperience);
  return (
    <>
      <section className="inputs-wrapper">
        <PersonalInfoInput submitHandler={personalSubmitHandler} />
        <EducationInput
          submitHandler={educationSubmitHandler}
          data={educationData}
          deleteHandler={deleteEducationData}
        />
        <PracticalInput
          submitHandler={pracicalSubmitHandler}
          data={practicalExperience}
          deleteHandler={deletePracticalExperience}
        />
      </section>
      <section className="display-wrapper">
        <DisplayPersonalInfo data={personalData} />
        <EducationDisplay data={educationData} />
        <PracticalDisplay data={practicalExperience} />
      </section>
    </>
  );
};

export default Parent;
