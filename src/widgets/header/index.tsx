import * as S from './index.styles';
import { Dropdown, Avatar, Drawer } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { ReactComponent as SearchIcon } from 'assets/icons/search.svg';
import { ReactComponent as NotificationIcon } from 'assets/icons/notification.svg';
import { ReactComponent as DropdownIcon } from 'assets/icons/dropdown-arrow.svg';
import profileImg from 'assets/images/profile-image.jpg';
import LeftMenu from 'widgets/left-menu';
import { useAuth } from 'providers/AuthProvider';
import { useState } from 'react';
import Logo from 'components/logo';

const Header = () => {
    const { user, logout } = useAuth();
    const [drawerOpen, setDrawerOpen] = useState(false);

    const items = [
        { key: "profile", label: "Profile" },
        { key: "settings", label: "Settings" },
        { key: "logout", label: <span onClick={logout}>Logout</span> }
    ];

    const showDrawer = () => setDrawerOpen(true);
    const closeDrawer = () => setDrawerOpen(false);


    return (
        <S.HeaderStyled>
            <div className="left">
                <div className="logo"><Logo /></div>
                <div className="title">Dashboard</div>
            </div>
            <div className="user">
                <div className="search"><SearchIcon className="icon" /></div>
                <div className="notification"><NotificationIcon className="icon" /></div>
                <Dropdown menu={{ items }} trigger={['click']}>
                    <div className="user-detail">
                        <Avatar src={profileImg} className="avatar" />
                        <span>{user?.fullName || 'User'}</span>
                        <DropdownIcon className="icon" />
                    </div>
                </Dropdown>
                <div className="hamburger" onClick={showDrawer}>
                    <MenuOutlined />
                </div>
            </div>
            <Drawer
                title="Menu"
                placement="right"
                onClose={closeDrawer}
                open={drawerOpen}
                width={320}
                bodyStyle={{ padding: 0 }}
                getContainer={"header"}
            >
                <LeftMenu onClickItem={closeDrawer}/>
            </Drawer>
        </S.HeaderStyled>
    );
};

export default Header;
