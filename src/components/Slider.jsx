import React, {useState} from 'react';
import Styled from 'styled-components';
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import {sliderItems} from '../data';

const Container = Styled.div`
    height:100vh;
    display:flex;
    width:100%;
    position: relative;
    overflow:hidden;
`
const Arrow = Styled.div`
    width:50px;
    height:50px;
    border-radius: 50%;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:white;
    position:absolute;
    top:0px;
    bottom:0px;
    margin:auto;
    left: ${props => props.direction ==="left" && "10px"};
    right: ${props => props.direction ==="right" && "10px"};
    cursor:pointer;
    opacity:0.5;
    z-index:2;

`

const Wrapper = Styled.div`
    height:100%;
    display:flex;
    transition:all 1.5s ease;
    transform:translateX(${props=>props.slideIndex * -100}vw)
`
const Slide = Styled.div`
    height:100vh;
    width:100vw;
    display:flex;
    align-items:center;
    background-color: #${props => props.bg};
    align-items:center;
`
const ImgContainer = Styled.div`
    flex:1;
    height:100%;
    text-align:center;
    padding-left:50px;
`
const InfoContainer = Styled.div`
    flex:1;
    padding:50px;
`
const Image = Styled.img`
    height:80%;
`
const Title = Styled.h1`
    font-weight:bold;
    font-size:60px;

`
const Desc = Styled.p`
    font-size:20px;
    font-weight:500;
    margin:50px 0px;
    letter-spacing:3px;
    width:90%;

`
const Button = Styled.button`
    padding:10px;
    font-size:20px;
    background-color:transparent;
    cursor:pointer;

`

  const Slider = () => {
      const [slideIndex, setSlideIndex] = useState(0);
      const handleClick = (direction)=>{
          if(direction === "left"){
              setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2)
          }else{
              setSlideIndex(slideIndex < 2 ? slideIndex+1 : 0)
          }
      };
  
  return (
      <Container>
            <Arrow direction="left" onClick={() => handleClick("Left")}>
                    <ArrowLeftOutlinedIcon/>
            </Arrow>
            <Wrapper slideIndex = {slideIndex}>
               {sliderItems.map(item =>
                <Slide bg={item.bg}>
                    <ImgContainer>
                        <Image src={item.image}/>
                    </ImgContainer>
                    <InfoContainer>
                        <Title>{item.title} </Title>
                        <Desc>{item.desc}</Desc>
                        <Button>SHOP NOW</Button>

                    </InfoContainer>
                </Slide>
                )}
               
            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick("right")}>
                <ArrowRightOutlinedIcon/>
            </Arrow>
      </Container>
  );
};

export default Slider;
