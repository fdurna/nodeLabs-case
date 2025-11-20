import styled, { css } from "styled-components";
import { mediaQuery } from 'common/theme/media';

const AuthLayoutXlTabletCss = css`
    .left {
        .logo {
            display: block;
        }
        .title {
            display:none;
        }
    }
   .user {
    .search , .notification {
        display: none;
    }
    .hamburger {
        display: block;
    }
    .user-detail {
        
        margin-right:15px;
        padding-right:15px;
        .ant-avatar {
            margin-right:15px;
        }
    }
   }
`;

export const HeaderStyled = styled.header`
    .logo {
        display: none;
    }
    .title {
        font-size:25px;
        font-weight:600;
        color:${({ theme }) => theme.colors.textDark};
    }
    .user {
        display: flex;
        align-items:center;
        justify-content:center;
        .search {
            cursor: pointer;
            margin-right:50px;
        }
        .notification {
            cursor: pointer;
            margin-right:50px;
        }
        .hamburger {
            display: none;
        }
        .user-detail {
            display: flex;
            align-items:center;
            padding-right:30px;
            position: relative;
            .avatar {
                margin-right:10px;
                width:36px;
                height:36px;
                display: block;
            }
            span {
                font-size:14px;
                font-weight:600;
                color:${({ theme }) => theme.colors.textDark};
            }
            svg {
                position: absolute;
                right:0;
            }
        }
    }
    .ant-drawer {
        .ant-drawer-content-wrapper {
            .ant-drawer-body {
                padding:15px 15px !important;
                .menu {
                    .item {
                        padding:0px 10px;
                        border-radius:12px;
                    }
                }
            }
        }
    }
    ${mediaQuery.lessThan('xltablet')`${AuthLayoutXlTabletCss}`}
`;
