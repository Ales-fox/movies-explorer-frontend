import React from 'react';

import Header from '../Header/Header';
import NavTab from '../NavTab/NavTab.js';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe'
import Footer from '../Footer/Footer';

import './Main.css';

function Main({ loggedIn }) {
    return (
        <div className='grayWrapper'>
            <div className='page'>
                <Header loggedIn={loggedIn}/>
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