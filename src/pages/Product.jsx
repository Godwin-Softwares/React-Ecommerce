
import Remove from '@mui/icons-material/Remove';
import Add from '@mui/icons-material/Add';
import Styled from 'styled-components';
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Newsletter from '../components/Newsletter' 
import Footer from '../components/Footer'

const Container = Styled.div`
    
`
const Wrapper = Styled.div`
    margin:50px;
    display:flex;
`
const ImageContainer = Styled.div`
    flex:1;
`
const Image = Styled.img`
    width:100%;
    height:90vh;
    object-fit:contain;
`
const InfoContainer = Styled.div`
    flex:1;
    margin:0px 50px;
`
const Title = Styled.h1`
    font-weight:200;
    margin-bottom:20px;

`
const Desc = Styled.p`
    margin-bottom:20px;
`
const Price = Styled.span`
    font-size:24px;
`
const FilterContainer = Styled.div`
    margin:50px 0px 0px 0px;
    display:flex;
    justify-content:space-between;
`
const Filter = Styled.div`
    display:flex;
    width:70%;
    align-items:center;
`
const FilterTitle = Styled.p`
    font-size:20px;
    font-weight:200;
    margin-right:20px;
`
const FilterColor = Styled.div`
    width:30px;
    height:30px;
    border-radius:50%;
    background-color:${props=>props.color};
    margin-right:10px;
`
const FilterSize = Styled.select`
    padding:10px;
`
const FilterSizeOption = Styled.option`
    
    font-size:20px;
    font-weight:200;
`

const AddContainer = Styled.div`
 display:flex;
 margin: 50px 0px 0px 0px;
 align-items:center;
 width:70%;
 justify-content:space-between;
`
const AmountContainer = Styled.div`
    display:flex;
    align-items:center;
    font-size:24px;

`
const Amount = Styled.span`
    margin:0px 10px 0px 10px;
    width:50px;
    height:50px;
    border-radius:20px;
    display:flex;
    align-items:center;
    justify-content:center;
    font-weight:bold;
    border:1px solid #999;

`
const Button = Styled.button`
    padding:20px;
    background-color:white;
    border:2px solid teal;
    font-weight:bold;
    font-size:18px;
    cursor:pointer;

    &:hover{
        background-color:#eee;
        
    }
    
`

const Product = () => {
    
    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Wrapper>
                <ImageContainer>
                    <Image src="https://i.ibb.co/1z5MvTX/tommy1.png"/>
                </ImageContainer>
                <InfoContainer>
                    <Title>Tommy Wears</Title>
                    <Desc>
                    In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is
                    </Desc>
                    <Price>N5,000.00</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                                <FilterColor color="black"/>
                                <FilterColor color="darkblue"/>
                                <FilterColor color="gray"/>
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                                <FilterSize>
                                <FilterSizeOption selected>Size</FilterSizeOption>
                                <FilterSizeOption>XS</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                                <FilterSizeOption>XXL</FilterSizeOption>
                                
                                </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                   <AmountContainer>
                        <Remove/>
                        <Amount>1</Amount>
                        <Add/>
                   </AmountContainer>
                   <Button>ADD TO CART</Button>
                </AddContainer>
                
                </InfoContainer>
               
            </Wrapper>
            <Newsletter/>
            <Footer/>
        </Container>
    )
}
export default Product