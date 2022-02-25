import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlined from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlined from '@mui/icons-material/FavoriteBorderOutlined';
import React from 'react';
import Styled from 'styled-components';

const Info = Styled.div`
    opacity:0;
    width:100%;
    height:100%;
    position:absolute;
    top:0;
    left:0;
    display:flex;
    background-color:rgba(0,0,0,0.2);
    z-index:3;
    align-items:center;
    justify-content:center;
    transition:all 0.5s ease;
    cursor:pointer;
`

const Container = Styled.div`
    flex:1;
    margin:5px 5px;
    background-color:#e9f5f9;
    min-width:300px;
    height:350px;
    display:flex;
    border-radius:10px;
    align-items:center;
    justify-content:center;
    position:relative;
    overflow:hidden;

    &:hover ${Info}{
        opacity:1;

    }
`
const Circle = Styled.div`
    width:200px;
    height:200px;
    background-color:white;
    border-radius:50%;
    position:absolute;
`
const Image = Styled.img`
    height:75%;
    z-index:2;
`

const Icon = Styled.div`
    width:40px;
    height:40px;
    border-radius:50%;
    background-color:white;
    align-items:center;
    justify-content:center;
    display:flex;
    margin:10px;
    transition:all 0.5s ease;

    &:hover {
        background-color: lightyellow;
        transform:scale(1.1);
    }
    

`

const Product = ({item}) => {
    return (
        <div>
            <Container>
                <Circle/>
                <Image src={item.img}/>
                <Info>
                    <Icon>
                        <ShoppingCartOutlined/>
                    </Icon>
                    <Icon>
                        <SearchOutlined/>
                    </Icon>
                    <Icon>
                        <FavoriteBorderOutlined/>
                    </Icon>
                </Info>
            </Container>
        </div>
    )
    
}
export default Product