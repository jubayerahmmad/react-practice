import useInputState from "../../hooks/useInputState";

const HookForm = () => {
  // const [name, handleNameChange] = useInputState(""); //when returned as array
  const nameState = useInputState(""); //when returned as object
  const emailState = useInputState("");
  // console.log(nameState); //output: {value: '', onChange: ƒ}
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nameState);
    console.log(nameState.value);
    console.log(emailState);
    console.log(emailState.value);
  };
  return (
    <div className="p-4 border-2 rounded-xl">
      <h1 className="text-2xl">Using custom hook for getting the value</h1>
      <form onSubmit={handleSubmit}>
        {/* <input
          value={name}
          onChange={handleNameChange}
          className="border-2 rounded-lg my-2"          //? when returned as an array
          type="text"
          name="name"
        /> */}
        <input
          {...nameState}
          className="border-2 rounded-lg my-2" // when returned as object
          type="text"
          name="name"
        />

        <br />
        <input
          {...emailState}
          className="border-2 rounded-lg my-2"
          type="email"
          name="email"
        />
        <br />
        <input
          className="border-2 rounded-lg my-2"
          type="password"
          name="password"
        />
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default HookForm;
