import "./header.scss";
import { Gap, Link } from "../../../components";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="header row">
      <div className="col">
        <Gap height={"1.2em"} />
        <h2 className="pointer" onClick={() => navigate("/")}>
          MERN Blog
        </h2>
        <Gap height={"1.2em"} />
      </div>
      <div className="col">
        <Link
          pclass="text-right"
          label=""
          uclass="bold pointer"
          ulabel="Logout"
          onClick={() => navigate("/login")}
        />
      </div>
    </div>
  );
};

export default Header;
