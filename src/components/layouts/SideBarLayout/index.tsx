import * as S from './index.styles';
import { Outlet } from "react-router-dom";
import LeftMenu from 'widgets/left-menu';
import Header from 'widgets/header';
import Logo from 'components/logo';

const SideBarLayout = () => {
    return (
        <S.SideBarLayoutStyled>
            <div className="sidebar">
                <div className="logo">
                    <Logo />
                </div>
                <LeftMenu />
            </div>
            <div className="main">
                <Header />
                <div className="content">
                    <Outlet/>
                </div>
            </div>
        </S.SideBarLayoutStyled>
    );
}

export default SideBarLayout;
