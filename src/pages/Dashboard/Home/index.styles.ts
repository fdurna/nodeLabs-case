import styled, { css } from "styled-components";
import { mediaQuery } from 'common/theme/media';


const HomeXlTabletCss = css`
    flex-direction:column;
    .left-column, .right-column {
        flex:1;
    }
`;

export const HomeStyled = styled.div`
    display: flex;
    gap:30px;
    .left-column {
        display: flex;
        flex-direction:column;
        flex:1.5;
    }
    .right-column {
        display: flex;
        flex-direction:column;
        flex:1;
    }
    ${mediaQuery.lessThan('xltablet')`${HomeXlTabletCss}`}
`