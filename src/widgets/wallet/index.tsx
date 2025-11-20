import * as S from './index.styles';
import { Skeleton, Alert } from "antd";
import Title from "components/title";
import { ReactComponent as MoreIcon } from 'assets/icons/more.svg';
import { ReactComponent as Wallet1 } from 'assets/icons/wallet-1.svg';
import { ReactComponent as Wallet2 } from 'assets/icons/wallet-2.svg';
import { ReactComponent as Wallet3 } from 'assets/icons/wallet-3.svg';
import { useFinancialWallet } from 'common/hooks/useFinancialWallet';

const Wallet = () => {
    const { data, isLoading, isError, error } = useFinancialWallet();
    const cardOne = data?.[0];
    const cardTwo = data?.[1];
    const [brandOne, bankNameOne] = cardOne?.bank.split(" | ") || [];
    const [brandTwo, bankNameTwo] = cardTwo?.bank.split(" | ") || [];
    return (
        <S.WalletStyled>
            <div className="title-and-hamburger-menu">
                <Title title="Wallet" />
                <MoreIcon />
            </div>
            {isLoading ? (
                <div className="card-container">
                    <Skeleton style={{
                        backgroundColor: '#e8e8e8',
                        borderRadius: '20px',
                        padding: '10px 15px'
                    }} active paragraph={{ rows: 4 }} />
                    <Skeleton style={{
                        backgroundColor: '#e8e8e8',
                        borderRadius: '20px',
                        padding: '10px 15px',
                        marginTop: '20px'
                    }} active paragraph={{ rows: 4 }} />
                </div>
            ) : isError ? (
                <Alert
                    message="Veri yüklenirken bir hata oluştu"
                    description={error?.message || "Lütfen tekrar deneyin."}
                    type="error"
                    showIcon
                />
            ) : (
                <div className="card-container">
                    <div className="one-card">
                        <div className="titles">
                            <h1>{brandOne}</h1>
                            <h2>{bankNameOne}</h2>
                        </div>
                        <div className="icons">
                            <Wallet1 />
                            <Wallet2 />
                        </div>
                        <div className="number">{cardOne?.cardNumber}</div>
                    </div>

                    <div className="two-card">
                        <div className="titles">
                            <h1>{brandTwo}</h1>
                            <h2>{bankNameTwo}</h2>
                        </div>
                        <div className="icons">
                            <Wallet1 />
                            <Wallet2 />
                        </div>
                        <div className="visa">
                            <div className="number">
                                <span className="first">{cardTwo?.cardNumber}</span>
                                <span className="second">{cardTwo?.expiryMonth}/{cardTwo?.expiryYear}</span>
                            </div>
                            <div className="icon">
                                <Wallet3 />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </S.WalletStyled>
    )
}

export default Wallet;