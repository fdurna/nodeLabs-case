import styled, { css } from "styled-components";
import { mediaQuery } from 'common/theme/media';
import line from "assets/icons/line.svg";


const AuthLayoutDesktopCss = css`
    .root {
      .left {
        flex:1;
      }
    }
`;
const AuthLayoutXlTabletCss = css`
    .root {
      .right {
        display: none;
      }
    }
`;

const AuthLayoutTabletCss = css`
    .root {
      .left {
        padding:25px;
        .logo {
          text-align:center;
          right:0;
          left:0;
        }
        .form-wrapper {
          min-width:100%;
        }
      }
    }
`;

export const AuthLayoutStyled = styled.div`
  .root {
    display: flex;
    min-height: 100vh;
    background: ${({ theme }) => theme.colors.bgLight};
    .left {
      flex: 1.5;
      display: flex;
      flex-direction: column;
      padding: 40px 80px;
      justify-content: center;
      position: relative;
      .logo {
        position: absolute;
        top: 40px;
      }
      .form-wrapper {
        min-width: 404px;
        margin: 0 auto;
        .title {
          margin-top: 0px;
          margin-bottom: 10px;
          font-size: 30px;
          font-weight: 600;
          color: ${({ theme }) => theme.colors.textDark};
        }
        .sub-title {
          margin-top: 0px;
          font-size: 16px;
          font-weight: 400;
          color: ${({ theme }) => theme.colors.textGray};
        }
        .ant-form {
          margin-top: 25px;
          &-item {
            .ant-form-item-explain-error {
              font-size:12px;
            }
            &-row {
              .ant-form-item-label {
                label {
                  font-size: 14px;
                  font-weight: 500;
                  color: ${({ theme }) => theme.colors.textDark};
                }
              }
              .ant-form-item-control {
                &-input {
                  .ant-input,
                  .ant-input-password {
                    border: none;
                    font-size: 14px;
                    font-weight: 500;
                    color: ${({ theme }) => theme.colors.textGray};
                    input {
                      &::placeholder {
                        font-size: 14px;
                        font-weight: 500;
                        color: ${({ theme }) => theme.colors.textGray};
                      }
                    }
                  }
                  .ant-input-password {
                    box-shadow:inherit !important;
                    input {
                      padding-right:0px;
                      &::placeholder {
                        letter-spacing: 4px !important;
                      }
                    }
                    .ant-input-suffix {
                      display: none;
                    }
                  }
                }
              }
            }
          }
          .already {
            margin-top:15px;
            display: flex;
            align-items:center;
            justify-content:center;
            .ant-typography {
              font-size:14px;
              font-weight:400;
              color:${({ theme }) => theme.colors.textMuted};
              .link {
                position: relative;
                font-size:14px;
                font-weight:400;
                margin-left:5px;
                color:${({ theme }) => theme.colors.black};
                &:before {
                    content:'';
                    position: absolute;
                    display: block;
                    width:50px;
                    height:100%;
                    top:25px;
                    right:0;
                    background-size: contain;
                    background-repeat: no-repeat;
                    background-image:url(${line});
                }
                &:hover {
                  opacity:0.7;
                }
              }
            }
          }
        }
      }
    }
    .right {
      flex: 1;
      background: #e5e7eb;
      display: flex;
      align-items: center;
      justify-content: center;
      .banner {
        width: 100%;
        img {
          width: 100%;
          height: 100vh;
          display: block;
        }
      }
    }
  }
  ${mediaQuery.lessThan('desktop')`${AuthLayoutDesktopCss}`}
  ${mediaQuery.lessThan('xltablet')`${AuthLayoutXlTabletCss}`}
  ${mediaQuery.lessThan('tablet')`${AuthLayoutTabletCss}`}
`;
