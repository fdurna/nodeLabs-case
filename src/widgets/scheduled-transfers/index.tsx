import * as S from './index.styles';
import { Skeleton, Alert } from 'antd';
import Title from 'components/title';
import { useScheduledTransfers } from 'common/hooks/useScheduledTransfers';
import { formatDate } from 'common/utils/date';

const ScheduledTransfers = () => {
    const { data, isLoading, isError, error } = useScheduledTransfers();
    const transfers = data ?? [];

    return (
        <S.ScheduledTransfersStyled>
            <div className="top">
                <Title title="Scheduled Transfers" />
                <div className="right">View All →</div>
            </div>

            <div className="list">
                {isLoading
                    ? [1, 2, 3, 4].map((i) => (
                        <div className="item" key={i} style={{
                            backgroundColor: '#e8e8e8',
                            borderRadius: '20px',
                            padding: '10px 15px'
                        }}>
                            <Skeleton avatar paragraph={{ rows: 1 }} active />
                        </div>
                    ))
                    : isError ? (
                        <Alert
                            message="Veri yüklenirken bir hata oluştu"
                            description={error?.message || "Lütfen tekrar deneyin."}
                            type="error"
                            showIcon
                        />
                    ) :  transfers.map((transfer) => (
                        <div className="item" key={transfer.id}>
                            <div className="profil">
                                <img src={transfer.image} alt={transfer.name} />
                                <div className="name-and-time">
                                    <span className="name">{transfer.name}</span>
                                    <span className="time">{formatDate(transfer.date)}</span>
                                </div>
                            </div>
                            <div className="price">
                                {transfer.amount < 0 ? '-' : ''} {transfer.currency}{Math.abs(transfer.amount).toLocaleString()}
                            </div>
                        </div>
                    ))}
            </div>
        </S.ScheduledTransfersStyled>
    );
};

export default ScheduledTransfers;
