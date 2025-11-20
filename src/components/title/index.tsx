type TitleProps = {
    title: string;
  };
  
const Title = ({title}: TitleProps) => {
    return(
        <h1 style={{
            fontSize:'18px',
            fontWeight:'600',
            color:'#1B212D',
            margin:'0px 0px'
        }}>{title}</h1>
    )
}

export default Title;