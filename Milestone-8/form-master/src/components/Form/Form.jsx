const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.name.value);
    console.log(e.target.email.value);
  };
  return (
    <div className="p-4 border-2 rounded-xl">
      <h1 className="text-2xl">
        Simple Process(onSubmit) of getting the value
      </h1>
      <form onSubmit={handleSubmit}>
        <input className="border-2 rounded-lg my-2" type="text" name="name" />

        <br />
        <input className="border-2 rounded-lg my-2" type="email" name="email" />

        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
