import React from 'react';
import './App.css';

import Header from './components/Header';
import Content from './components/content/Content';
import CardsWrapper from './components/card/Card';
import Footer from './components/Footer';


const App = () => {
    
    return (

        <div>
            <Header />
            <Content></Content>
            <CardsWrapper/>
            <Footer></Footer>
        </div>

    )
};

export default App;