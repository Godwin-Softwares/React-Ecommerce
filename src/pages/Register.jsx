import Styled from 'styled-components';

const Container = Styled.div`
    width:100vw;
    height:100vh;
    display:flex;
    align-items:center;
    justify-content:center;
`
const Wrapper = Styled.div`
    padding:20px;
    width:40%;
    background-color:white;
    border:1px solid #eee;

`

const Title = Styled.h1`
    font-size:24px;
    font-weight:300;
`
const Form = Styled.form`
    display:flex;
    flex-wrap:wrap;
`
const Input = Styled.input`
    flex:1;
    min-width:40%;
    margin:10px 20px 10px 0px;
    font-size:12px;
    padding:10px;
`
const Agreement = Styled.span`
    margin:20px 0px 20px 0px;
    font-size:16px;
    font-weight:300;
`
const Button = Styled.button`
    padding:15px;
    border:none;
    font-size:16px;
    font-weight:bold;
    width:40%;
    cursor:pointer;

    &:hover{
        background-color:white;
        border:1px solid #e4e0e0;
    }
`


const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>CREAT AN ACCOUNT</Title>
                <Form>
                    <Input placeholder="first name"/>
                    <Input placeholder="last name"/>
                    <Input placeholder="username"/>
                    <Input placeholder="email"/>
                    <Input placeholder="password"/>
                    <Input placeholder="confirm password"/>
                    <Agreement>By creating an account, i consent to the processing of my personal data in accordance with the  <b>PRIVACY POLICY</b>
                    </Agreement>
                    <Button>Register</Button>
                </Form>

            </Wrapper>
        </Container>
    )
}
export default Register;