import "./register.scss";
import { RegisterBg } from "../../assets";
import { Input, Button, Gap, Link } from "../../components";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  return (
    <div className="register-content">
      <div className="left">
        <h2>Register</h2>
        <Gap height={"1em"} />
        <p className="text-muted">
          Dapatkan berita terbaru dengan menggunakan akun
        </p>
        <Gap height={"3em"} />

        <Input label="Nama" placeholder="Nama Lengkap" />
        <Gap height={"1em"} />
        <Input label="Email" placeholder="Email" />
        <Gap height={"1em"} />
        <Input label="Password" type="password" placeholder="Password" />
        <Gap height={"1em"} />
        <Input
          label="Konfirmasi Password"
          type="password"
          placeholder="Konfirmasi Password"
        />
        <Gap height={"3em"} />
        <Button
          label="Buat Akun"
          type="primary"
          onClick={() => navigate("/")}
        />
        <Link
          pclass="text-center"
          label="Sudah punya akun? Silahkan "
          uclass="bold pointer"
          ulabel="Login"
          onClick={() => navigate("/login")}
        />
      </div>
      <div className="illustration">
        <img src={RegisterBg} className="images" alt="illustration" />
      </div>
    </div>
  );
};

export default Register;
