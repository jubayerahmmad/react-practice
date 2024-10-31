import { useRef } from "react";

const RefForm = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nameRef.current.value);
    console.log(emailRef.current.value);
    console.log(passwordRef.current.value);
  };
  return (
    <div className="p-4 border-2 rounded-xl">
      <h1 className="text-2xl">
        Using useRef hook(uncontrolled components) for getting the value
      </h1>
      <form onSubmit={handleSubmit}>
        <input
          className="border-2 rounded-lg my-2"
          ref={nameRef}
          type="text"
          name="name"
        />

        <br />
        <input
          className="border-2 rounded-lg my-2"
          ref={emailRef}
          type="email"
          name="email"
        />
        <br />
        <input
          className="border-2 rounded-lg my-2"
          ref={passwordRef}
          type="password"
          name="password"
        />
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RefForm;
