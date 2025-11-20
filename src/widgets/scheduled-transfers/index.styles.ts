import styled from "styled-components";

export const ScheduledTransfersStyled = styled.section`
    margin-top:150px;
    .top {
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;

        .right {
        font-size: 14px;
        font-weight: 500;
        transition:all 0.5s ease;
        color: ${({ theme }) => theme.colors.malachiteapprox};
        cursor: pointer;
        &:hover {
            transition:all 0.5s ease;
            opacity:0.7;
        }
        }
    }
    .list {
        .item {
            display: flex;
            align-items:center;
            justify-content:space-between;
            margin-bottom:25px;
            .profil {
                display: flex;
                align-items:center;
                img {
                    display: block;
                    border-radius:50px;
                    width:33px;
                    height:33px;
                    margin-right:12px;
                }
                .name-and-time {
                    display: flex;
                    flex-direction:column;
                    .name {
                        margin-bottom:5px;
                        font-size:14px;
                        font-weight:600;
                        color:${({ theme }) => theme.colors.textDark};
                    }
                    .time {
                        font-size:12px;
                        font-weight:500;
                        color:${({ theme }) => theme.colors.textMuted};
                    }
                }
            }
            .price {
                font-size:16px;
                font-weight:600;
                color:${({ theme }) => theme.colors.black};
            }
        }
    }

`