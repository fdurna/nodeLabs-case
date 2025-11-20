import styled from "styled-components";
import { Button as AntButton } from 'antd';

const baseButtonStyles = `
    height: 48px;
    padding: 0 20px;
    border-radius: 10px;
    font-size: 16px;
    span {
        font-size: 16px;
    }
`;

export const ButtonStyled = styled(AntButton)`
    ${baseButtonStyles}
    &.ant-btn-primary, &.ant-btn-variant-solid {
        background-color:${({ theme }) => theme.colors.secondary};
        color:${({ theme }) => theme.colors.textDark} !important;
        &:hover {
        }
    }
    &.ant-btn-link {
        border: none;
        font-size:16px;
        font-weight:600;
        color:${({ theme }) => theme.colors.textGray};
        &:hover {
            color:${({ theme }) => theme.colors.textGray} !important;
            opacity: 0.8;
        }
    }
    &.ant-btn-lg {
        height:45px;
        padding:0 25px;
    }
    &.ant-btn-sm {
        height:35px;
        padding:0 15px;
    }
`;