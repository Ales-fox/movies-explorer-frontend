import React from 'react';

import Promo from '../Promo/Promo';
import NavTab from '../NavTab/NavTab.js';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe'
import Portfolio from '../Portfolio/Portfolio'
import Footer from '../Footer/Footer';

import './Main.css';

function Main(props) {
    return (
        <>
            <main className='main'>
                <Promo></Promo>
                <NavTab/>
                <AboutProject/>
                <Techs/>
                <AboutMe/>
                <Portfolio/>
            </main>
            <Footer/>
        </>
    )
}

export default Main;