import * as S from "./index.styles";
import { ToastContainer } from 'react-toastify';
import { ReactNode } from "react";
import Logo from "components/logo";
import authBanner from "assets/images/auth-banner.jpg";

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
  subTitle: string;
}
const AuthLayout = ({ children, title, subTitle }: AuthLayoutProps) => {
  return (
    <S.AuthLayoutStyled>
      <ToastContainer aria-label="toast notifications" />
      <div className="root">
        <div className="left">
          <div className="form-wrapper">
            <div className="logo">
              <Logo />
            </div>
            <h1 className="title">{title}</h1>
            <p className="sub-title">{subTitle}</p>
            <div className="form">{children}</div>
          </div>
        </div>
        <div className="right">
          <div className="banner">
            <img src={authBanner} alt="auth-banner" />
          </div>
        </div>
      </div>
    </S.AuthLayoutStyled>
  );
};

export default AuthLayout;
