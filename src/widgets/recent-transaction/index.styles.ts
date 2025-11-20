import styled, { css } from "styled-components";
import { mediaQuery } from 'common/theme/media';


const RecentTransactionXlTabletCss = css`
    padding:0px;
`;

export const RecentTransactionStyled = styled.section`
  padding: 20px;
  border-radius: 16px;
  border:1px solid ${({ theme }) => theme.colors.wildSand};;
  .top {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;

    .right {
      font-size: 14px;
      font-weight: 500;
      transition:all 0.5s ease;
      color: ${({ theme }) => theme.colors.textMuted};
      cursor: pointer;
      &:hover {
        transition:all 0.5s ease;
        opacity:0.7;
      }
    }
  }

  .table-header {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    font-size: 12px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.gullGray};
    padding-bottom: 8px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gallery};
    .type,
    .amount,
    .date {
      text-align:center;
    }
  }

  .row {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    padding: 14px 0;
    align-items: center;
    border-bottom: 1px solid ${({ theme }) => theme.colors.wildSand};

    .info {
      display: flex;
      align-items: center;
      gap: 12px;

      img {
        width: 40px;
        height: 40px;
        border-radius: 8px;
        object-fit: cover;
      }

      .details {
        display: flex;
        flex-direction: column;

        .name {
          font-weight: 600;
        }

        .business {
          font-size: 12px;
          color: ${({ theme }) => theme.colors.grayChateauapprox};
        }
      }
    }

    .type,
    .amount,
    .date {
      font-size: 14px;
      text-align:center;
    }
    .name {
      font-size:14px;
    }
    .amount {
      color: ${({ theme }) => theme.colors.textDark};
      font-weight: 600;
    }
    .date, .type {
      color:${({ theme }) => theme.colors.textMuted};
    }
  }
  ${mediaQuery.lessThan('xltablet')`${RecentTransactionXlTabletCss}`}
`;
