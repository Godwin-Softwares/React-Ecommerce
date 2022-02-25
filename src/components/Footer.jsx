import Styled from 'styled-components';
import Facebook from '@mui/icons-material/Facebook';
import Instagram from '@mui/icons-material/Instagram';
import Twitter from '@mui/icons-material/Twitter';
import Pinterest from '@mui/icons-material/Pinterest';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const Container = Styled.div`
    display:flex;
    padding:20px 50px 50px 50px;
    


`
const Left = Styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    padding-right:50px; 
`


const Logo = Styled.h1`
    font-weight:bold;
    margin-bottom:20px;

`

const Desc = Styled.div`
    
`

const SocialContainer = Styled.div`
    display:flex;

`

const SocialIcon = Styled.div`
    width:40px;
    height:40px;
    margin:20px 10px; 0px 0px ;
    border-radius:50%;
    color:white;
    background-color: #${props=>props.color};
    display:flex;
    align-items:center;
    justify-content:center;
    
    

`

const Center = Styled.div`
    flex:1
`

const Title = Styled.h1`
    margin-bottom:20px;
`

const List = Styled.ul`
    margin:0px;
    padding:0px;
    list-style:none;
    display:flex;
    flex-wrap:wrap;
`

const ListItem = Styled.li`
    width:50%;
    margin-bottom:10px;
`

const Right = Styled.div`
    flex:1
`
const Title2 = Styled.h1`
    font-weight:bold;
    margin-bottom:20px;

`
const ContactItem = Styled.div`
    margin-bottom:20px;
    display:flex;
    align-items:center;
`


const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo> G-Stores </Logo>
                <Desc>
                    In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is
                </Desc>
                <SocialContainer>
                    <SocialIcon  color="3B5999">
                        <Facebook/>
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram/>
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Twitter/>
                    </SocialIcon>
                    <SocialIcon color="E60023">
                        <Pinterest/>
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                    <Title>Useful Links</Title>
                    <List>
                        <ListItem>Home</ListItem>
                        <ListItem>Cart</ListItem>
                        <ListItem>Man Fashion</ListItem>
                        <ListItem>Woman Fashion</ListItem>
                        <ListItem>Kids Fashion</ListItem>
                        <ListItem>Accessories</ListItem>
                        <ListItem>My Account</ListItem>
                        <ListItem>Order Tracking</ListItem>
                        <ListItem>WishList</ListItem>
                        <ListItem>Terms and Condition</ListItem>
                    </List>
            </Center>
            <Right>
                    <Title2>Contact</Title2>
                    <ContactItem>
                        <LocationOnOutlinedIcon style={{marginRight:"10px"}}/> 14 Bode Thomas Rd, Surulere, Lagos Nigeria.
                    </ContactItem>
                    <ContactItem>
                        <LocalPhoneOutlinedIcon style={{marginRight:"10px"}}/> +234 8103 9444 402
                    </ContactItem>
                    <ContactItem>
                        <EmailOutlinedIcon style={{marginRight:"10px"}}/> contact@gstores.com
                    </ContactItem>
            </Right>
        </Container>
    )
}
export default Footer;