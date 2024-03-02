const Information = ({ data }) => {
  return (
    <div className="education-flex">
      <div className="year">
        <p>{data.graduationYear}</p>
        <p>{data.fieldOfStudy}</p>
      </div>
      <p>-</p>
      <div className="degree">
        <p>{data.institution}</p>
        <p>{data.degree}</p>
      </div>
    </div>
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
