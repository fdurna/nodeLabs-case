import styled, { css } from "styled-components";
import { mediaQuery } from 'common/theme/media';

const WorkingCapitalXlTabletCss = css`
    .recharts-wrapper {
          .recharts-legend-wrapper {
          top: inherit !important;
          bottom:-40px !important;
          right:0px !important;
          left:0px !important;
      }
    }
`;

export const WorkingCapitalStyled = styled.section`
    padding: 20px;
    border-radius: 16px;
    border:1px solid ${({ theme }) => theme.colors.wildSand};
    margin:30px 0px;
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    .right select {
      padding: 6px 10px;
      border-radius: 8px;
      border: none;
      outline: none;
      color:${({ theme }) => theme.colors.textDark};
      font-size:12px;
    }
  }
  .recharts-wrapper {
    .recharts-cartesian-axis-line, .recharts-cartesian-axis-tick {
        display: none;
    }
    .recharts-layer {
        text {
            font-size:12px;
            font-weight:400;
            fill:${({ theme }) => theme.colors.textMuted};
        }
    }
    .recharts-legend-wrapper {
        top:-45px !important;
        right: 150px !important;
        width: 200px !important;
        .recharts-default-legend {
            padding: 0px;
            margin: 0px;
            text-align: center;
            display: flex;
            justify-content: center;
            flex-direction: row-reverse;
        }
        svg {
            border-radius:100%;
            width:8px;
            height:8px;
        }
        .recharts-legend-item-text {
            font-size:12px;
            font-weight:400;
            color:${({ theme }) => theme.colors.textDark};
        }
    }
  }
  ${mediaQuery.lessThan('xltablet')`${WorkingCapitalXlTabletCss}`}

`;