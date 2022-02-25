import React from 'react';
import Styled from 'styled-components';
import Product from './Product';
import {popularProducts} from '../data';

const Container = Styled.div`
    display:flex;
    padding:50px;
    flex-wrap:wrap;
    justify-content:space-between;
`

const Products = () => {
    return (

        <div>
        <Container>
            {popularProducts.map((item) => (
                <Product item={item} key={item.id}/>
                ))}
            
        </Container>
    </div>

    )
  
}
export default Products;
