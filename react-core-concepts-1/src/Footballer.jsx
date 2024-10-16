export default function Footballer({ footballer }) {
  const { name, position } = footballer;
  const style = {
    padding: "5px",
    borderRadius: "50px",
    margin: "5px",
    border: "2px solid rebeccapurple",
  };
  return (
    <>
      <div style={style}>
        <h3>Player Name: {name}</h3>
        <h4>Player Position: {position}</h4>
      </div>
    </>
  );
}
