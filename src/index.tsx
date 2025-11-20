import React from "react";
import ReactDOM from "react-dom/client";
import { ConfigProvider } from "antd";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "common/theme/theme";
import { GlobalStyles } from "common/theme/globalStyle";
import { QueryProvider } from "providers/QueryProvider";
import { AuthProvider } from "providers/AuthProvider";
import AppRoutes from "config/routes";
import ErrorBoundary from "components/error-boundary";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <ThemeProvider theme={{ ...theme }}>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: theme.colors.primary,
              borderRadius: 16,
            },
            components: {
              Layout: {
                headerBg: "#FFFFFF",
              },
            },
          }}
        >
          <GlobalStyles />
          <QueryProvider>
            <AuthProvider>
              <BrowserRouter>
                <AppRoutes />
              </BrowserRouter>
            </AuthProvider>
          </QueryProvider>
        </ConfigProvider>
      </ThemeProvider>
    </ErrorBoundary>
  </React.StrictMode>
);