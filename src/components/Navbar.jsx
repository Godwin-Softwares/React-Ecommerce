import React from 'react';
import styled from 'styled-components'
import Search from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {mobile} from '../responsive';

const Container = styled.div`
    height: 60px;
    ${mobile({backgroundolor:"red"})}
`
const Wrapper = styled.div`
    margin: 10px 20px;
    display: flex;
    align-items:center;
    justify-content:space-between;

`
const Left = styled.div`
    flex:1;
    display:flex;
    align-items:center;
`
const Center = styled.div`
    flex:1;
    text-align:center;

`
const Right = styled.div`
    flex:1;
    display:flex;
    justify-content:flex-end;
    
`
const Language = styled.div`
    font-size: 14px;
`
const SearchContainer = styled.div`
    border:0.5px solid lightgray;
    display:flex;
    align-items:center;
    margin-left:25px;
    padding:5px;

`
const Input = styled.input`
    border:none;
`
const Logo = styled.h1`
    font-weight:bold;
`
const MenuItem = styled.div`
    margin-left:25px;
    font-size:14px;
`



const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input/>
                    <Search style={{color:"gray", fontSize:"16px"}}/>
                </SearchContainer>
            </Left>
            <Center>
                <Logo>G-Stores</Logo>
            </Center>
            <Right>
                <MenuItem>REGISTER</MenuItem>
                <MenuItem>SIGN IN</MenuItem>
                <MenuItem>
                    <Badge badgeContent={5} color="primary" >
                        <ShoppingCartIcon/>
                    </Badge>
                </MenuItem>
                
            </Right>
        </Wrapper>
    </Container>
  )
};

export default Navbar;
