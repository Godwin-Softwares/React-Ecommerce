import React from 'react';
import Styled from 'styled-components';

const Container = Styled.div`
  flex:1;
  margin:3px;
  height:70vh;
  position:relative;
`
const Image = Styled.img`
  width:100%;
  height:100%;
  object-fit:cover;
`
const Info = Styled.div`
  position:absolute;
  width:100%;
  height:100%;
  top:0;
  left:0;
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;
  
`
const Title = Styled.h1`
  color:white;
  margin-bottom:20px;
`
const Button = Styled.button`
  border:none;
  padding:10px;
  background-color:white;
  color:gray;
  cursor:pointer;
  font-weight:600;
`

const Category = ({item}) => {
  return <div>
    <Container>
      <Image src={item.img}/>
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
     
    </Container>
  </div>;
}
export default Category;
