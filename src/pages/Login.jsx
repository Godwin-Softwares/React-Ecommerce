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
    width:30%;
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
    margin-bottom:20px;
`
const Input = Styled.input`
    flex:1;
    min-width:60%;
    margin:10px 20px 10px 0px;
    font-size:16px;
    font-weight:500;
    padding:10px;
`

const Button = Styled.button`
    padding:15px;
    border:none;
    font-size:16px;
    font-weight:bold;
    width:40%;
    cursor:pointer;
    margin-top:20px;

    &:hover{
        background-color:white;
        border:1px solid #e4e0e0;
    }
`
const LinkContainer = Styled.div`
    display:flex;
    flex-direction:column;
`
const Link = Styled.a`
    margin-top:10px;
    text-decoration:underline;
    cursor:pointer;

    
`


const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                  
                    <Input placeholder="username"/>
                    <Input placeholder="password"/>
                    <Button>SIGN IN</Button>
                </Form>
                <LinkContainer>
                        <Link>Do Not Remember your password?</Link>
                        <Link>Create and Account</Link>
                </LinkContainer>    
            </Wrapper>
        </Container>
    )
}
export default Login;