import React from 'react';
import styled from 'styled-components';


const StyledTitle = styled.h1`
    font-size: 4rem;
    color: #007f56;
    font-weight: 300;
`;

const Title = () => {

    return (
        <StyledTitle>Crie este site <b>responsivo</b> com <b>REACT</b> utilizando <b>styled-components</b></StyledTitle>
    )
}

export default Title;