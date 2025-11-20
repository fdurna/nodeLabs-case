import styled, { css } from "styled-components";
import { mediaQuery } from 'common/theme/media';

const SideBarXlTabletCss = css`
  .sidebar {
    display: none;
  }
  .main {
    .content {
      padding: 0px 12px 12px 12px;
    }
  }
`;

export const SideBarLayoutStyled = styled.div`
  display: flex;
  height: 100vh;
  background: ${({ theme }) => theme.colors.pageBg};

  .sidebar {
    width: 250px;
    height:100%;
    color: ${({ theme }) => theme.colors.white};;
    display: flex;
    flex-direction: column;
    padding: 20px 25px;
    background: ${({ theme }) => theme.colors.sidebarBg};
    .logo {
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 30px;
    }

    .menu {
      display: flex;
      flex-direction: column;
      gap: 10px;

      .item {
        color: ${({ theme }) => theme.colors.geyser};
        padding: 10px 12px;
        border-radius: 8px;
        cursor: pointer;
        transition: 0.2s;

        &.active,
        &:hover {
          background: ${({ theme }) => theme.colors.primary};
          color: ${({ theme }) => theme.colors.black};
        }
      }
    }
  }

  .main {
    //display: flex;
    //flex-direction: column;
    flex: 1;
    overflow-y:scroll;
    header {
      height:100px;
      padding: 0 24px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: ${({ theme }) => theme.colors.white};
    }

    .content {
      flex: 1;
      padding: 0px 24px 24px 24px;
      background-color:${({ theme }) => theme.colors.white};
    }
  }
  ${mediaQuery.lessThan('xltablet')`${SideBarXlTabletCss}`}

`;
