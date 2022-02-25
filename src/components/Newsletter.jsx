import Styled from 'styled-components';
import Send from '@mui/icons-material/Send';

const Container = Styled.div`
    height:60vh;
    background-color:#e9f5f9;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`

const Title = Styled.h1`
   font-size:70px;
   margin:50px;
`
const Description = Styled.p`
   font-size:30px;
   letter-spacing:2px;
   margin-bottom:30px;
   font-size:24px;
`
const InputContainer = Styled.div`
   width:50%;
   display:flex;
   height:50px;
   background-color:white;
   justify-content:space-between;
   border:1px solid #eee;

`
const Input = Styled.input`
   flex:8;
   border:none;
   font-size:20px;
   padding:20px;

`
const Button = Styled.button`
   flex:1;
   cursor:pointer;
   background-color: teal;
   color:white;
   border:none;
`
const Newsletter = () => {
    return (
        <Container>
            <Title>
                Newsletter
            </Title>
            <Description>
                Get timely updates from your favorite products.
            </Description>
            <InputContainer>
                <Input/>
                <Button>
                    <Send/>
                </Button>
            </InputContainer>
        </Container>
    )

}
export default Newsletter;