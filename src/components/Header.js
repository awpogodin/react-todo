import React from "react";
import Typography from '@material-ui/core/Typography';

const Header = (props) => {
    const {title} = props || 'Header';
    return (
        <div className="header">
            <Typography variant="h1" className="header_title">{title}</Typography>
        </div>
    )
};

export default Header;