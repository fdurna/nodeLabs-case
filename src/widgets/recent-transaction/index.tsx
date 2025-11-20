import * as S from "./index.styles";
import { Alert } from 'antd';
import { formatMoney } from "common/utils/format";
import { useRecentTransactions } from "common/hooks/useRecentTransactions";
import Title from "components/title";
import ShimmerTransactionRow from "components/shimmer/ShimmerTransactionRow";

const RecentTransaction = () => {
    const { data, isLoading, isError, error } = useRecentTransactions(3);

    return (
        <S.RecentTransactionStyled>
            <div className="top">
                <Title title="Recent Transaction" />
                <div className="right">View All →</div>
            </div>
            {
                isLoading ? (
                    <div style={{
                        backgroundColor: '#e8e8e8',
                        borderRadius: '15px',
                        padding: '15px'
                    }}>
                        {
                            [1, 2, 3, 4].map((i) => <ShimmerTransactionRow key={i} />)
                        }
                    </div>
                ) : isError ? (
                    <Alert
                        message="Veri yüklenirken bir hata oluştu"
                        description={error?.message || "Lütfen tekrar deneyin."}
                        type="error"
                        showIcon
                    />
                ) : <>
                    <div className="table-header">
                        <span className="name-business">NAME/BUSINESS</span>
                        <span className="type">TYPE</span>
                        <span className="amount">AMOUNT</span>
                        <span className="date">DATE</span>
                    </div>
                    {data?.map((item: any) => (
                        <div className="row" key={item.id}>
                            <div className="info">
                                <img src={item.image} alt={item.name} />
                                <div className="details">
                                    <div className="name">{item.name}</div>
                                    <div className="business">{item.business}</div>
                                </div>
                            </div>

                            <div className="type">{item.type}</div>

                            <div
                                className="amount"
                            >
                                {formatMoney(item.amount, item.currency)}
                            </div>

                            <div className="date">
                                {new Date(item.date).toLocaleDateString("en-US", {
                                    day: "2-digit",
                                    month: "short",
                                    year: "numeric",
                                })}
                            </div>
                        </div>
                    ))}
                </>}

        </S.RecentTransactionStyled >
    );
};

export default RecentTransaction;
