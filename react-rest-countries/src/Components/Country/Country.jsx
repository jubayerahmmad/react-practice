import "./Country.css";
const Country = ({ country }) => {
  const { name, flags } = country;
  return (
    <>
      <div className="country">
        <h1>Name: {name.common}</h1>
        <img className="image" src={flags.svg} alt="" />
      </div>
    </>
  );
};

export default Country;
