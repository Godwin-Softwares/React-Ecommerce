import React from 'react';
import Styled from 'styled-components';

const Container = Styled.div`
    height: 20px;
    background-color: purple;
    color:white;
    font-size: 14px;
    display:flex;
    font-weight: 500px;
    justify-content:center;
    align-items:center;

`


const Announcement = () => {
  return (
    <Container>
        super deal! Free shipping on orders over N5000.00
    </Container>
  )
};

export default Announcement;
