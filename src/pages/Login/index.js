import { LoginBg } from "../../assets";
import { Input, Button, Gap, Link } from "../../components";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="register-content">
      <div className="left">
        <h2>Login</h2>
        <Gap height={"1em"} />
        <p className="text-muted">
          Selamat datang di MERN Blog, silahkan login untuk melanjutkan
        </p>
        <Gap height={"3em"} />

        <Input label="Email" placeholder="Email" />
        <Gap height={"1em"} />
        <Input label="Password" type="password" placeholder="Password" />
        <Gap height={"3em"} />

        <Button label="Login" type="primary" onClick={() => navigate("/")} />
        <Link
          pclass="text-center"
          label="Belum punya akun? Silahkan "
          uclass="bold pointer"
          ulabel="Register"
          onClick={() => navigate("/register")}
        />
      </div>
      <div className="illustration">
        <img src={LoginBg} className="images" alt="illustration" />
      </div>
    </div>
  );
};

export default Login;
