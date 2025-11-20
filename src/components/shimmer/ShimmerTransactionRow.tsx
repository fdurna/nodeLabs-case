import { Skeleton } from "antd";

const ShimmerTransactionRow = () => {
  return (
    <div
      style={{
        display: "flex",
        padding: "12px 0",
        borderBottom: "1px solid #f0f0f0",
        gap: "12px",
      }}
    >
      <Skeleton.Avatar active size={40} shape="circle" />
      <div style={{ flex: 1 }}>
        <Skeleton active paragraph={{ rows: 1 }} title={false} />
      </div>
      <Skeleton.Input active style={{ width: 80 }} />
      <Skeleton.Input active style={{ width: 100 }} />
    </div>
  );
};

export default ShimmerTransactionRow;
