import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Kumbh+Sans:wght@100..900&display=swap');

  :root {
    font-family: "Kumbh Sans", sans-serif;
    color: ${({ theme }) => theme.colors.textPrimary};
    background-color: ${({ theme }) => theme.colors.pageBg};
  }

  * {
    box-sizing: border-box;
  }

  body, #root {
    margin: 0;
    padding: 0;
    min-height: 100vh;
  }

  .ant-layout {
    background: ${({ theme }) => theme.colors.pageBg};
  }

  .ant-input,
  .ant-select-selector {
    border-radius: 999px !important;
  }

  .ant-btn {
    border-radius: 999px;
    font-weight: 500;
  }

  .ant-card {
    border-radius: 18px;
  }
  .ant-col , .ant-input, .ant-btn, .ant-typography, [class*=" ant-form"]{
    font-family: "Kumbh Sans", sans-serif !important;
  }
`;
