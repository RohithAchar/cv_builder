const Information = ({ data }) => {
  return (
    <>
      <div>
        <p>{data.graduationYear}</p>
        <p>{data.fieldOfStudy}</p>
      </div>
      <div>
        <p>{data.institution}</p>
        <p>{data.degree}</p>
      </div>
    </>
  );
};

const EducationDisplay = ({ data }) => {
  return (
    <div className="education-info-container">
      {data && <h2>Education</h2>}
      {data.map((item) => (
        <Information key={item.id} data={item} />
      ))}
    </div>
  );
};

export default EducationDisplay;
