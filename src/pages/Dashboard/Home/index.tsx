import * as S from './index.styles';
import WorkingCapital from 'widgets/working-capital';
import RecentTransaction from 'widgets/recent-transaction';
import ScheduledTransfers from 'widgets/scheduled-transfers';
import Total from "widgets/total";
import Wallet from 'widgets/wallet';

const Home = () => {
    return (
        <S.HomeStyled>
            <div className='left-column'>
                <Total />
                <WorkingCapital />
                <RecentTransaction />
            </div>
            <div className='right-column'>
                <Wallet />
                <ScheduledTransfers />
            </div>
        </S.HomeStyled>
    )
}

export default Home;