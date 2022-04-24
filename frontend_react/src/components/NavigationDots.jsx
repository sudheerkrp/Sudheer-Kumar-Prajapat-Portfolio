import React from 'react';

const NavigationDots = (props) => {
    const active = props.active;
    return (
        <div className='app__navigation'>
            {['home', 'about', 'work', 'skills', 'testimonials', 'contact'].map((item, index)=>{
                return (
                    <a
                        href={`#${item}`}
                        key={item + index}
                        className="app__navigation-dot"
                        style={(active === item)?({backgroundColor : '#313BAC'}):({})}
                    > 
                    </a> // eslint-disable-next-line
                );
            })}
        </div>
    )
}

export default NavigationDots;