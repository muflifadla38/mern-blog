import PropTypes from "prop-types";
import "./footer.scss";
import {
  IconFacebook,
  IconGithub,
  IconInstagram,
  IconTelegram,
  IconTwitter,
  IconWhatsapp,
  Logo,
} from "../../../assets";
import { Gap } from "../../atoms";
import { useNavigate } from "react-router-dom";

const Icon = ({ url, ...rest }) => {
  return (
    <div>
      <a href={url}>
        <img {...rest} alt="icon" />
      </a>
    </div>
  );
};

Icon.propsTypes = { url: PropTypes.string };

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className="footer py-2">
      <Gap height={"1em"} />
      <div className="row">
        <div className="col footer-left">
          <div className="pointer" onClick={() => navigate("/")}>
            <img src={Logo} className="footer-icon" alt="footer icon" />
          </div>
        </div>
        <div className="col footer-right">
          <Icon
            url="https://www.facebook.com"
            src={IconFacebook}
            className={"socmed-icon"}
          />
          <Icon
            url="https://twitter.com/muflifadla38"
            src={IconTwitter}
            className="socmed-icon"
          />
          <Icon
            url="https://instagram.com/muflifadla38"
            src={IconInstagram}
            className="socmed-icon"
          />
          <Icon
            url="https://telegram.com/muflifadla38"
            src={IconTelegram}
            className="socmed-icon"
          />
          <Icon
            url="https://wa.me/6289669644474"
            src={IconWhatsapp}
            className="socmed-icon"
          />
          <Icon
            url="https://github.com/muflifadla38"
            src={IconGithub}
            className="socmed-icon"
          />
        </div>
      </div>
      <Gap className="divider" height={"0.5em"} />
      <Gap height={"1em"} />
      <div className="row copyright">
        <p className="text-center">Copyright &#169; 2021 MERN Blog</p>
      </div>
      <Gap height={"1em"} />
    </div>
  );
};

Footer.propsTypes = { url: PropTypes.string, label: PropTypes.string };

export default Footer;
