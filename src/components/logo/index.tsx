import logo from "assets/images/logo.png";
import { Link } from "react-router-dom";

export interface LogoProps {
  customStyle?: React.CSSProperties;
}

const Logo = ({ customStyle }: LogoProps) => {
  return (
    <Link to="/">
      <img
        src={logo}
        style={{ cursor: "pointer", ...customStyle }}
        alt="maglo-logo"
      />
    </Link>
  );
};

export default Logo;
