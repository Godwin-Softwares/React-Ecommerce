import React from 'react';
import Styled from 'styled-components';
import {categories} from '../data';
import CategoryItem from './CategoryItem';

const Container = Styled.div`
    display:flex;
    padding:20px;
    justify-content:space-between;
`

const Categories = () => {
  return <div>
      <Container>
          
        {categories.map(item =>(
           <CategoryItem item={item}/> 
           ))}  
        
      </Container>
  </div>;
};

export default Categories;
