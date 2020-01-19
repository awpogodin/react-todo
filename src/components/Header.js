import React from "react";
import Typography from '@material-ui/core/Typography';
import logo from '../assets/logo.png'

const Header = () => {
    return (
        <div className="header">
            <a className="header_logo" href="https://dev-pogodin.ru" target="_blank" rel="noopener noreferrer">
                <img src={logo} alt=""/>
            </a>
            <Typography variant="h1" className="header_title">todos</Typography>
        </div>
    )
};

export default Header;