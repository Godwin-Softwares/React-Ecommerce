import React from 'react';
import Styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter' 
import Footer from '../components/Footer'



const Container = Styled.div`
    
`
const Title = Styled.h1`
    margin:20px 0px 50px 50px;
    font-weight:bold;
    
`
const FilterContainer = Styled.div`
    display:flex;
    justify-content:space-between;
    margin: 0px 50px 30px 50px;
`
const Filter = Styled.div`
    font-weight:bold;
    display:flex;
    align-items:center;
    
    
`
const FilterText = Styled.div`
    font-size:20px;
    font-weight:600;
    margin-right:20px;
`
const Select = Styled.select`
    margin-right:20px;
    padding:10px;
`
const Option = Styled.option`
    
`

const ProductList = () => {
  return (
  <Container>
     <Navbar/>
     <Announcement/>
     <Title>Dresses</Title>
     <FilterContainer>
         <Filter>
             <FilterText>Filter Product</FilterText>
             <Select>
                 <Option disabled selected>Color</Option>
                 <Option>White</Option>
                 <Option>Black</Option>
                 <Option>Red</Option>
                 <Option>Blue</Option>
                 <Option>Yellow</Option>
                 <Option>Green</Option>
             </Select>
             <Select>
                 <Option disabled selected>Size</Option>
                 <Option>xs</Option>
                 <Option>s</Option>
                 <Option>M</Option>
                 <Option>L</Option>
                 <Option>XL</Option>
                 <Option>XXL</Option>
             </Select>
         </Filter>
         <Filter>
             <FilterText>Sort Product</FilterText>
             <Select>
                 <Option selected>Newest</Option>
                 <Option>Price(asc)</Option>
                 <Option>Price(desc)</Option>
             </Select>
         </Filter>
     </FilterContainer>
     <Products/>
     <Newsletter/>
     <Footer/>
  </Container>
  )
};

export default ProductList;
