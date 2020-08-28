import React from 'react';
import styled from 'styled-components';
import drogaraia from '../images/drogaraia.png'
import drogasil from '../images/drogasil.png'
import farmasil from '../images/farmasil.png'
import univers from '../images/univers.png'
import fourbio from '../images/4bio.png'
import rd from '../images/rd-small.png'

const FooterWrapper = styled.footer`
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const DivImages = styled.div`
    position: relative;
    right: 160px;
    
`;

const P = styled.p`
    font-size: 14px;
    color: #868686;
`;

const ImgLogos = styled.img`
    margin: 4px;
`;  


const Footer = () => {
    return (
        <FooterWrapper>
            <P>RD 2017. Todos os direitos reservados</P>
            <DivImages>
                <ImgLogos src={drogaraia} alt="Logo Drogaraia"></ImgLogos>
                <ImgLogos src={drogasil} alt="Logo Drogasil"></ImgLogos>
                <ImgLogos src={farmasil} alt="Logo Farmasil"></ImgLogos>
                <ImgLogos src={univers} alt="Logo Univers"></ImgLogos>
                <ImgLogos src={fourbio} alt="Logo 4Bio"></ImgLogos>
            </DivImages>
            <img src={rd} alt="Logo RD"></img>
        </FooterWrapper>
    )
};

export default Footer;