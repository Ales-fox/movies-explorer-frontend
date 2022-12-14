import React from 'react';

import Promo from '../Promo/Promo';
import NavTab from '../NavTab/NavTab.js';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe'
import Footer from '../Footer/Footer';

import './Main.css';

function Main(props) {
    return (
        <div className='grayWrapper'>
            <main className='main'>
                <Promo/>
                <NavTab/>
                <AboutProject/>
                <Techs/>
                <AboutMe/>
            </main>
            <Footer/>
        </div>
    )
}

export default Main;