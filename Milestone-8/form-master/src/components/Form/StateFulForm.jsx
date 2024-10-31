import { useState } from "react";

const StateFulForm = () => {
  const [text, setText] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError("Passwrod must be 6 characters or longer");
      return;
    }
    console.log("Name:", text, "email:", email, "password:", password);
  };
  const handleOnChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setText(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <div className="p-4 border-2 rounded-xl">
        <h1 className="text-2xl">
          Using individual field state(controlled components) for getting the
          value
        </h1>
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleOnChange}
            className="border-2 rounded-lg my-2"
            type="text"
            name="name"
          />

          <br />
          <input
            onChange={handleEmail}
            className="border-2 rounded-lg my-2"
            type="email"
            name="email"
          />
          <br />
          <input
            onChange={handlePassword}
            className="border-2 rounded-lg my-2"
            type="password"
            name="password"
            required
          />
          <br />

          <button type="submit">Submit</button>
        </form>
        {error && <p>{error}</p>}
      </div>
    </div>
  );
};

export default StateFulForm;
