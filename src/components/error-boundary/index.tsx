import React from "react";
import { Result, Button } from "antd";

class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: any, info: any) {
    console.error("React Error Boundary:", error, info);
  }

  handleReload = () => {
    this.setState({ hasError: false });
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "#fafafa",
            padding: 20,
          }}
        >
          <Result
            status="error"
            title="Beklenmeyen bir hata oluştu"
            subTitle="Sayfa yüklenirken bir problem meydana geldi. Lütfen tekrar deneyin."
            extra={[
              <Button type="primary" key="reload" onClick={this.handleReload}>
                Sayfayı Yenile
              </Button>,
            ]}
          />
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
