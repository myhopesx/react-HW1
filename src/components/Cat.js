const Cat = ({ image, name, age }) => {
  return (
    <div className="card">
      <img src={image} alt="cat" />
      <div className="container">
        <h4>
          <b>{name}</b>
        </h4>
        <p>{age}</p>
      </div>
    </div>
  );
};

export default Cat;
