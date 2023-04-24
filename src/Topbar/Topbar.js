import React from 'react';
import classes from './Topbar.module.css';

const Topbar = () => {
    return (
        <header>
            <nav className={classes.topbar}>
                <img src="https://cdn.shopify.com/s/files/1/3009/3544/files/Amazon-Symbol.jpg?v=16142793910" alt='Amazon Logo' />
            </nav>
        </header>
    );
}

export default Topbar;