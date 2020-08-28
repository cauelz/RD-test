import React, { useState } from 'react';
import styled from 'styled-components';
import desktop from '../../images/desktop.png';
import tablet from '../../images/tablet.png';
import mobile from '../../images/mobile.png';
import Popup from '../popup/Popup';



const CardWrapper = styled.div`
    width: 400px;
    height: 400px;
    background-color: #fff;
    margin: 16px;
    
`;

const ImgDiv = styled.div`
background-color: ${(props) => {
        if (props.tipo === "desktop") {
            return "#FE9481";
        } else if (props.tipo === "tablet") {
            return "#FCDA92";
        } else {
            return "#9C8CB9"
        }
    }};
text-align: center;
color: #fff;
font-size: 32px;
font-weight: 300;
padding: 1px;
`;

const Img = styled.img`
    padding-top: 16px;
`;

const Button = styled.button`
    background-color: ${(props) => {
        if (props.tipo === "desktop") {
            return "#FE9481";
        } else if (props.tipo === "tablet") {
            return "#FCDA92";
        } else {
            return "#9C8CB9"
        }
    }};
    color: #fff;
    font-size: 18px;
    border: none;
    position: relative;
    left: 250px;
    cursor: pointer;
`;

const P = styled.p`
    margin: 12px;
`;



const ContainerCards = styled.section`
    display: flex;
    flex-direction: ${({changeDisplay}) => changeDisplay ? "rows": "column"};
    align-items: ${({changeDisplay}) => changeDisplay ? "center": "center"};
`;



const CardsWrapper = (props) => {


    const [changeDisplay, setChangeDisplay] = useState(true);

    function mudarDisplay() {
        return setChangeDisplay(!changeDisplay);
    }


    const [isOpen, setIsOpen] = useState(false);
 
    const togglePopup = () => {
      setIsOpen(!isOpen);
    }

    return (
        <ContainerCards changeDisplay={changeDisplay} isOpen={isOpen}>
            <Card
                tipo="desktop"
                imagem={desktop} titulo="Site Responsivo Desktop"
                texto={<P>Quando pressionado o botão <b>Leia mais...</b> o restante da informação deverá aparecer em scroll down.</P>}
                textoButtom={"Leia mais..."}
                quandoClicar={mudarDisplay}
            >
            </Card>

            <Card
                tipo="tablet"
                imagem={tablet}
                titulo="Site Responsivo TABLET"
                texto={<P>Quando pressionado o botão <b>Leia mais...</b> informação deverá aparecer completa em um popup na tela.</P>}
                textoButtom={"Leia mais..."}
                quandoClicar={togglePopup}
                isOpen={isOpen}
            ></Card>

            <Card
                tipo="mobile"
                imagem={mobile}
                titulo="Site Responsivo MOBILE"
                texto={<P>Quando pressionado o botão <b>alterar tema</b> modifique o tema do site para blackfriday a seu gosto.</P>}
                textoButtom={"alterar tema"}
            ></Card>
        </ContainerCards>
    )

};

export default CardsWrapper;



const Card = (props) => {
    
    return (
        <CardWrapper>
            <ImgDiv tipo={props.tipo}>
                <Img src={props.imagem} alt="" />
                <p>{props.titulo}</p>
            </ImgDiv>
            {props.texto}
            <Button tipo={props.tipo} onClick={() => props.quandoClicar()}>{props.textoButtom}</Button>
            {props.isOpen ? <Popup handleClose={props.quandoClicar}></Popup> : null}
        </CardWrapper>
    )
};



export { Card, CardsWrapper }