import "./App.css";
// import HookForm from "./components/HookForm/HookForm";
import ReusableFrom from "./components/ReusableForm/ReusableFrom";
// import RefForm from "./components/RefForm/RefForm";
// import SimpleForm from "./components/SimpleForm/SimpleForm";
// import StatefulForm from "./components/StatefulForm/StatefulForm";

function App() {
  const handleSignUpSubmit = (data) => {
    console.log("sign up data", data);
  };

  const handleUpdateProfile = (data) => {
    console.log("update profile", data);
  };
  return (
    <>
      <h1>Vite + React</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      <ReusableFrom formtitle={"Sign Up"} handleSubmit={handleSignUpSubmit}>
        <div>
          <h2>Sign up</h2>
          <p>please sign up rignt now</p>
        </div>
      </ReusableFrom>
      <ReusableFrom
        formtitle={"Profile Update"}
        submitButtonText="Update"
        handleSubmit={handleUpdateProfile}
      >
        <div>
          <h2>update profile</h2>
          <p>always keep your profile update</p>
        </div>
      </ReusableFrom>
    </>
  );
}

export default App;
