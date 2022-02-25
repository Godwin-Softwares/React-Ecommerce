import Remove from '@mui/icons-material/Remove';
import Add from '@mui/icons-material/Add';
import Styled from 'styled-components';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer'
const Container = Styled.div`
    
`
const Wrapper = Styled.div`
    padding:20px;
`
const Title = Styled.h1`
    font-weight:300;
    text-align:center;
    margin:20px 0px;
`
const Top = Styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
`

const TopButton = Styled.button`
    padding:10px;
    font-size:14px;
    font-weight:300;
    cursor:pointer;
    border: ${props=>props.type==='filled'&& 'none'};
    background-color: ${props => props.type==='filled'?'black':'transparent'};
    color: ${props => props.type==='filled'&&'white'};
    
`

const TopTexts = Styled.div`
    display:flex;
    
`

const TopText = Styled.p`
    margin-right: 10px;
    text-decoration:underline;
    font-size:14px;
    font-weight:300;
    cursor:pointer
`
const Bottom = Styled.div`
    margin:30px 0px 0px 0px;
    display:flex;
    justify-content:space-between;
`

const Info = Styled.div`
    flex:3;
`


const Product = Styled.div`
    display:flex;
`
const ProductDetails = Styled.div`
    flex:2;
    display:flex;
`
const Image = Styled.img`
    width:200px;
`
const Details = Styled.div`
    padding:20px;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    line-height:50px;
`
const ProductName = Styled.span`
    
`
const ProductId = Styled.span`

`
const ProductColor = Styled.div`
    width:20px;
    height:20px;
    border-radius:50%;
    background-color:${props=>props.color}
`
const ProductSize = Styled.span`

`
const PriceDetails = Styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`


const ProductAmountContainer = Styled.div`
    display:flex;
    align-items:center;
    margin-bottom:10px;
`
const ProductAmount = Styled.span`
    font-size:24px;
    margin:5px;
`
const ProductPrice = Styled.span`
    font-size:20px;
    font-weight:200;
`
const Hr = Styled.hr`
    border:none;
    background-color:#eee;
    height:1px;
`
const Summary = Styled.div`
    flex:1;
    border:0.5px solid #eee;
    padding:20px;
    height:50vh;
`
const SummaryTitle = Styled.h1``
const SummaryItem = Styled.div`
    margin:30px 0px;
    display:flex;
    justify-content:space-between;
    font-weight:${props=>props.type==='total'&&'500'}
    font-size:${props=>props.type==='total'&&'24px'}

`
const SummaryItemText = Styled.span``
const SummaryItemPrice = Styled.span``
const SummaryButton = Styled.button`
    padding:10px;
    background-color:black;
    color:white;
    font-weight:600;
    font-size:16px;
    width:100%;
    margin-top:10px;
`


const Cart = () => {
    
    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Wrapper>
                <Title>Your Bag</Title>
                <Top>
                    <TopButton>CONTINUE SHOPPING</TopButton>
                        <TopTexts>
                            <TopText>Shopping Bag(2)</TopText>
                            <TopText>Your Wishlist (0)</TopText>
                        </TopTexts>
                    <TopButton type="filled">CHECKOUT NOW</TopButton>

                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetails>
                                <Image src="https://i.ibb.co/XJkrjsQ/ladies-shoe1.png"/>
                                <Details>
                                    <ProductName><b>Product:</b> JESSIE THUNDER SHOES</ProductName>
                                    <ProductId><b>ID:</b>9867594534</ProductId>
                                    <ProductColor color="black"/>
                                    <ProductSize><b>Size:</b>37.5</ProductSize>
                                </Details>
                            </ProductDetails>
                            <PriceDetails>
                                <ProductAmountContainer>
                                    <Remove/>
                                        <ProductAmount>2</ProductAmount>
                                    <Add/>
                                </ProductAmountContainer>
                                <ProductPrice>N4000.00</ProductPrice>
                            </PriceDetails>
                        </Product>
                        <Hr/>
                        <Product>
                            <ProductDetails>
                                <Image src="https://i.ibb.co/XJkrjsQ/ladies-shoe1.png"/>
                                <Details>
                                    <ProductName><b>Product:</b> JESSIE THUNDER SHOES</ProductName>
                                    <ProductId><b>ID:</b>9867594534</ProductId>
                                    <ProductColor color="black"/>
                                    <ProductSize><b>Size:</b>37.5</ProductSize>
                                </Details>
                            </ProductDetails>
                            <PriceDetails>
                                <ProductAmountContainer>
                                    <Remove/>
                                        <ProductAmount>2</ProductAmount>
                                    <Add/>
                                </ProductAmountContainer>
                                <ProductPrice>N4000.00</ProductPrice>
                            </PriceDetails>
                        </Product>
                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>N10000.00</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>N1000.00</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Discount</SummaryItemText>
                            <SummaryItemPrice>-N500.00</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>N10000.00</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryButton>CHECKOUT NOW</SummaryButton>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Newsletter/>
            <Footer/>
        </Container>
    )
}
export default Cart;