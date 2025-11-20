import styled from "styled-components";

export const LeftMenuStyled = styled.div`
    display: flex;
    flex-direction:column;
    justify-content:space-between;
    height:100%;
    .menu {
        .item {
            display: flex;
            align-items:center;
            justify-content:start;
            text-decoration:none;
            padding:0px 0px;
            height:48px;
            span {
                font-size:14px;
                font-weight:500;
                margin-left:10px;
                color:${({ theme }) => theme.colors.textMuted};
            }
            &.active {
                background: ${({ theme }) => theme.colors.primary};
                color: ${({ theme }) => theme.colors.black};
                span {
                    color:${({ theme }) => theme.colors.black};
                }
            }
            &:hover {
                svg {
                    path {
                        fill:${({ theme }) => theme.colors.black};
                    }
                }
                span {
                    color:${({ theme }) => theme.colors.black};
                }
            }
        }
    }
`;