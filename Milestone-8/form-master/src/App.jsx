import "./App.css";
import Form from "./components/Form/Form";
import HookForm from "./components/Form/HookForm";
import RefForm from "./components/Form/RefForm";
import ReusableForm from "./components/Form/ReusableForm";
import StateFulForm from "./components/Form/StateFulForm";

function App() {
  const handleSignUpSubmit = (data) => {
    console.log("Sign up:", data);
  };
  const handleUpdateProfileSubmit = (data) => {
    console.log("Update Profile:", data);
  };
  return (
    <>
      <h1 className="text-4xl font-extrabold my-6">
        Form Handling in Different Ways
      </h1>
      <div className="space-y-4">
        <Form></Form>
        <StateFulForm></StateFulForm>
        <RefForm></RefForm>
        <HookForm></HookForm>
        <div className="space-y-3 p-4 border-2 rounded-xl">
          <h1 className="text-2xl">
            Using Re-useable form for getting the value
          </h1>

          <ReusableForm
            formTitle={"Sign Up"}
            submitBtnText={"Submit"}
            handleSubmit={handleSignUpSubmit}
          >
            <div>
              <h2>
                <span className="font-bold">Sign Up</span>(using children)
              </h2>
              <p>Plese Sign Up</p>
            </div>
          </ReusableForm>

          <ReusableForm
            formTitle={"Update Profile"}
            submitBtnText={"Update"}
            handleSubmit={handleUpdateProfileSubmit}
          >
            <div>
              <h2>
                <span className="font-bold">Update Profile</span> (using
                children)
              </h2>
              <p>Always keep your Profile Updated</p>
            </div>
          </ReusableForm>
        </div>
      </div>
    </>
  );
}

export default App;
