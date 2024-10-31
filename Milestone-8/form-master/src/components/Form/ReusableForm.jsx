import PropTypes from "prop-types";

const ReusableForm = ({ formTitle, submitBtnText, handleSubmit, children }) => {
  const handleLocalSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    handleSubmit(data);
  };
  return (
    <div>
      <div>
        <h3 className="font-bold">{formTitle}</h3>
        {children}
        <form onSubmit={handleLocalSubmit}>
          <input className="border-2 rounded-lg my-2" type="text" name="name" />
          <br />

          <input
            className="border-2 rounded-lg my-2"
            type="email"
            name="email"
          />
          <br />

          <input
            className="border-2 rounded-lg my-2"
            type="password"
            name="password"
            required
          />
          <br />

          <button type="submit">{submitBtnText}</button>
        </form>
      </div>
    </div>
  );
};

ReusableForm.propTypes = {
  formTitle: PropTypes.string.isRequired,
  submitBtnText: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default ReusableForm;
