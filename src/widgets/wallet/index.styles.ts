import styled from "styled-components";
import international from "assets/images/international.png";

export const WalletStyled = styled.section`
    width:100%;
    .title-and-hamburger-menu {
        display: flex;
        align-items:center;
        justify-content:space-between;
    }
    .card-container {
        margin-top:20px;
        position: relative;
        .one-card {
            position: relative;
            height:210px;
            border-radius:15px;
            padding:20px 30px;
            background: linear-gradient(to right, #4A4A49, #20201F);
            .titles {
                display: flex;
                align-items:center;
                h1 {
                    margin:0px 0px;
                    font-size:16px;
                    font-weight:700;
                    color:${({ theme }) => theme.colors.white};
                }
                h2 {
                    position: relative;
                    padding-left:15px;
                    margin:0px 0px 0px 15px;
                    font-size:12px;
                    font-weight:500;
                    color: ${({ theme }) => theme.colors.stormDust};
                    &:before {
                        content:'';
                        position: absolute;
                        display: block;
                        left:0;
                        top:0;
                        width:1px;
                        height:20px;
                        background-color:${({ theme }) => theme.colors.stormDust2};
                    }
                }
            }
            .icons {
                display: flex;
                align-items:center;
                justify-content:space-between;
                margin-top:30px;
            }
            .number {
                font-size:17px;
                font-weight:700;
                letter-spacing: 2px;
                margin-top:20px;
                color:${({ theme }) => theme.colors.white};
            }
            &:after {
                content:'';
                    position: absolute;
                    display: block;
                    width:47px;
                    height:36px;
                    bottom:10px;
                    right:30px;
                    background-size: contain;
                    background-repeat: no-repeat;
                    background-image:url(${international});
            }
        }
        .two-card {
            position: absolute;
            left:0;
            right:0;
            top:150px;
            width:95%;
            margin:0 auto;
            height:200px;
            border-radius:15px;
            padding:20px 30px;
            background: rgba(255, 255, 255, 0.2);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            .titles {
                display: flex;
                align-items:center;
                h1 {
                    margin:0px 0px;
                    font-size:16px;
                    font-weight:700;
                    color:${({ theme }) => theme.colors.white};
                }
                h2 {
                    position: relative;
                    padding-left:15px;
                    margin:0px 0px 0px 15px;
                    font-size:12px;
                    font-weight:500;
                    color:${({ theme }) => theme.colors.white};
                    &:before {
                        content:'';
                        position: absolute;
                        display: block;
                        left:0;
                        top:0;
                        width:1px;
                        height:20px;
                        background-color:${({ theme }) => theme.colors.white};
                    }
                }
            }
            .icons {
                display: flex;
                align-items:center;
                justify-content:space-between;
                margin-top:30px;
            }
            .visa {
                margin-top:30px;
                display: flex;
                align-items:center;
                justify-content:space-between;
                .number {
                    display: flex;
                    flex-direction:column;
                    .first {
                        margin-bottom:10px;
                        font-size:16px;
                        font-weight:700;
                        color:${({ theme }) => theme.colors.textDark};
                    }
                    .second {
                        font-size:12px;
                        font-weight:500;
                        color:${({ theme }) => theme.colors.textMuted};
                    }
                }
                .icon {

                }
            }

        }
    }

`