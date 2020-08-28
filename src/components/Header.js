import React from 'react';
import styled from 'styled-components';
import rd from '../images/rd.png'

const StyledHeader = styled.header`
    border-bottom: solid 1px rgba(134, 134, 134, 0.2);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    
`;

const StyledLink = styled.a`
    color: #007f56;
    font-size: 1.2rem;
    margin: 8px;
    font-weight: 400;

`;

const Header = () => {
    return (
        <StyledHeader>
            <img src={rd} alt="imagem rd"></img>
            <div>
                <StyledLink>HTML5</StyledLink>
                <StyledLink>CSS3</StyledLink>
                <StyledLink>JAVASCRIPT</StyledLink>
                <StyledLink>REACT</StyledLink>
                <StyledLink>REDUX</StyledLink>
            </div>
        </StyledHeader>
    )
};

export default Header;