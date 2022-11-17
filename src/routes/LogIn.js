import { Link } from "react-router-dom";
import LoginOrAssignForm from "../component/molecules/BasicForm";
import "tailwindcss/tailwind.css";
import TailWindLogiForm from "../component/organisms/tailwindLoginForm";

const Login = () => {
  return (
    <div>
      <div className="Hello">
        {/* <img width="200" alt="icon" src={icon} /> */}
      </div>
      <div className="Hello">
        {/*<LoginOrAssignForm></LoginOrAssignForm>*/}
        <TailWindLogiForm />
      </div>
    </div>
  );
};

export default Login;
