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
            <div className='page'>
                <Promo/>
                <main>
                    <NavTab/>
                    <AboutProject/>
                    <Techs/>
                    <AboutMe/>
                </main>
            </div>
            <Footer/>
        </div>
    )
}

export default Main;