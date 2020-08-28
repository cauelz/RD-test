import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';


const StyledParagraph = styled.p`
    font-size: 2rem;
    color: #868686;
    font-weight: 300;
    margin: 0;
    padding: 0;
`;

const Info = () => {
    return (

        <React.Fragment>
            <StyledParagraph>A fonte Utilizada é a Open Sans de 300 a 800.</StyledParagraph>
            <StyledParagraph>exemplo: "Open Sans", Helvetica, sans-serif, arial;</StyledParagraph>
            <StyledParagraph>Já as cores são:</StyledParagraph>
            <StyledParagraph>
                <FontAwesomeIcon icon={faCircle} size="xs" color="#007f56" />#007f56,
                <FontAwesomeIcon icon={faCircle} size="xs" color="#868686" />#868686,
                <FontAwesomeIcon icon={faCircle} size="xs" color="#fe9481" />#FE9481,
                <FontAwesomeIcon icon={faCircle} size="xs" color="#FCDA92" />#FCDA92,
                <FontAwesomeIcon icon={faCircle} size="xs" color="#9C8CB9" />#9C8CB9
            </StyledParagraph>
        </React.Fragment>
    )
}

export default Info;