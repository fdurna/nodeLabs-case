import styled, { css } from 'styled-components';
import { mediaQuery } from 'common/theme/media';


const CardDesktopCss = css`
    .icon {
        width:32px;
        height:32px;
        margin-right:10px;
        svg {
            width:18px;
            height:18px;
        }
    }
    .info {
        .title {
            font-size:13px;
        }
        .price {
            font-size:18px;
        }
    }
`;

export const CardStyled = styled.div`
    display: flex;
    align-items:center;
    justify-content:center;
    border-radius:10px;
    height:105px;
    background-color: ${({ theme }) => theme.colors.cardBg};
    .icon {
        margin-right:20px;
        display: flex;
        align-items:center;
        justify-content:center;
        width:42px;
        height:42px;
        border-radius:50%;
        background-color: ${({ theme }) => theme.colors.iconBg};
    }
    .info {
        .title {
            margin:10px 0px;
            font-size:14px;
            font-weight:400;
            color:${({ theme }) => theme.colors.textMuted};
        }
        .price {
            font-size:24px;
            font-weight:700;
            color:${({ theme }) => theme.colors.textDark};
        }
    }
    &:hover {
        transition:all 0.5s ease;
        background-color: ${({ theme }) => theme.colors.tuna};
        .icon {
            background-color: ${({ theme }) => theme.colors.abbey};
            svg {
                path {
                    fill:${({ theme }) => theme.colors.secondary};
                }
            }
        }
        .price {
            color:${({ theme }) => theme.colors.white};
        }
    }
    ${mediaQuery.lessThan('desktop')`${CardDesktopCss}`}

`