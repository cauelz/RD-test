import React from 'react';
import Title from './Title'
import Info from './Info'
import styled from 'styled-components';


const StyledContent = styled.section`
    text-align: center;
`;

const Content = () => {

    return (
        <StyledContent>
            <Title />
            <Info />
        </StyledContent>
    )
};

export default Content;