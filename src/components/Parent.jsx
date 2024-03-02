import { useState } from "react";
import PersonalInfoInput from "./PersonalInfoInput";
import DisplayPersonalInfo from "./DisplayPersonalInfo";
import EducationInput from "./EducationInput";
import EducationDisplay from "./EducationDisplay";

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

  return (
    <>
      <section className="inputs-wrapper">
        <PersonalInfoInput submitHandler={personalSubmitHandler} />
        <EducationInput
          submitHandler={educationSubmitHandler}
          data={educationData}
          deleteHandler={deleteEducationData}
        />
      </section>
      <section className="display-wrapper">
        <DisplayPersonalInfo data={personalData} />
        <EducationDisplay data={educationData} />
      </section>
    </>
  );
};

export default Parent;
