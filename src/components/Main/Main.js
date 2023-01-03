import React from 'react';
import NavTab from '../NavTab/NavTab.js';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe'
import Footer from '../Footer/Footer';

import './Main.css';

function Main({ children }) {
    return (
        <div className='grayWrapper'>
            <div className='page'>
                {children}
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