const Data = ({ data }) => {
  return (
    <div className="practical">
      <p>
        <strong>{data.companyName}</strong>
      </p>
      <p>{data.positionTitle}</p>
      <p>{data.jobResponsibility}</p>
      <div className="practical-flex">
        <p>{data.startDate}</p>
        <p>-</p>
        <p>{data.endDate}</p>
      </div>
    </div>
  );
};

const PracticalDisplay = ({ data }) => {
  return (
    <div>
      {data && <h2>Practical Experience</h2>}
      {data.map((info) => {
        return <Data key={info.id} data={info} />;
      })}
    </div>
  );
};

export default PracticalDisplay;
