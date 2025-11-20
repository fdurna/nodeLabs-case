import * as S from './index.styles';

type CardProps = {
  icon?: React.ReactNode;
  title: string;
  price: string | number;
};

const Card = ({ icon, title, price }: CardProps) => {
  return (
    <S.CardStyled>
      <div className="icon">{icon}</div>
      <div className="info">
        <h6 className="title">{title}</h6>
        <span className="price">{price}</span>
      </div>
    </S.CardStyled>
  );
};

export default Card;
