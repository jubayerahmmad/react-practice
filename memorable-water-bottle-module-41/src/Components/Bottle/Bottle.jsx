import "./Bottle.css";
const Bottle = ({ bottle }) => {
  const { name, seller, img } = bottle;
  return (
    <div className="bottle">
      <div>
        <h2>Name: {name}</h2>
        <h3>Seller:{seller}</h3>
      </div>
      <div>
        <img className="image" src={img} alt="" />
      </div>
    </div>
  );
};

export default Bottle;
