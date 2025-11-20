import { Col, Row, Skeleton, Alert } from 'antd';
import { ReactComponent as WalletTotalIcon } from 'assets/icons/wallet-total.svg';
import { ReactComponent as WalletSavedIcon } from 'assets/icons/wallet-saved.svg';
import { useFinancialSummary } from 'common/hooks/useFinancialSummary';
import Card from "components/card";
import { formatMoney } from "common/utils/format";


const Total = () => {
    const { data, isLoading, isError, error } = useFinancialSummary();
    if (isLoading) {
        return (
            <Row align="top" style={{ width: "100%" }} gutter={[8, 8]}>
                {[1, 2, 3].map((i) => (
                    <Col span={8} key={i}>
                        <Skeleton active paragraph={{ rows: 2 }} style={{
                            backgroundColor: '#e8e8e8',
                            borderRadius: '15px',
                            padding: '15px'
                        }} />
                    </Col>
                ))}
            </Row>
        );
    }
    if (isError) {
        return (
          <Alert
            message="Veri yüklenirken bir hata oluştu"
            description={error?.message || "Lütfen tekrar deneyin."}
            type="error"
            showIcon
          />
        );
      }
    
    return (
        <section className='total-container'>
            <Row align="top" style={{ width: '100%' }} gutter={[8, 8]}>
                <Col xs={24} sm={24} md={8}>
                    <Card
                        title="Total balance"
                        price={formatMoney(data?.totalBalance.amount, data?.totalBalance.currency)}
                        icon={<WalletTotalIcon />}
                    />
                </Col>
                <Col xs={24} sm={24} md={8}>
                    <Card
                        title="Total spending"
                        price={formatMoney(data?.totalExpense.amount, data?.totalExpense.currency)}
                        icon={<WalletTotalIcon />}
                    />
                </Col>
                <Col xs={24} sm={24} md={8}>
                    <Card
                        title="Total saved"
                        price={formatMoney(data?.totalSavings.amount, data?.totalSavings.currency)}
                        icon={<WalletSavedIcon />}
                    />
                </Col>
            </Row>
        </section>
    )
}

export default Total;