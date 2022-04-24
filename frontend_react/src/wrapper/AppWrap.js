import React from 'react';
import {NavigationDots, SocialMedia} from '../components';

const AppWrap = (Component, idName, className) => function HOC(){ // HOC -> Higher Order Component 

    return (
        <div id={idName} className={`app__container ${className}`}>
            <SocialMedia></SocialMedia>
            <div className="app__wrapper app__flex">
                <Component></Component>
                <div className="copyright">
                    <p className="p-text">&copy;2022 Sudheer</p>
                    <p className="p-text">All Rights Reserved.</p>
                </div>
            </div>
            <NavigationDots active = {idName}></NavigationDots>
        </div>
    );
}

export default AppWrap;