const Data = ({ data }) => {
  return (
    <div className="practical-flex">
      <div>
        <p>{data.startDate}</p>
        <p>to</p>
        <p>{data.endDate}</p>
      </div>
      <p>-</p>
      <div>
        <p>{data.companyName}</p>
        <p>{data.positionTitle}</p>
        <p>{data.jobResponsibility}</p>
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
