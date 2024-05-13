import LoginPageComponent from "../../Components/LoginPageComponent/LoginPageComponent";
import LoginFormComponent from "../../Components/LoginPageComponent/LoginFormComponent/LoginFormComponent";
import "./LoginPage.css";

function LoginPage() {
  return (
    <div className="loginPage">
      <LoginPageComponent />
      <LoginFormComponent />
    </div>
  );
}

export default LoginPage;
