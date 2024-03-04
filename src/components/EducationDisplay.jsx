const Information = ({ data }) => {
  return (
    <div className="education">
      <p>
        <strong>{data.institution}</strong>
      </p>
      <p>{data.degree}</p>
      <p>{data.fieldOfStudy}</p>
      <p>{data.graduationYear}</p>
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
