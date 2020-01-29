import React from 'react';
import { useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const NavMenu = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const history = useHistory();

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const changeRoute = (e) => {
        const path = e.target.getAttribute('href') || '/';
        history.push(path);
        handleClose();
    };

    return (
        <div className='nav-menu'>
            <Button
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
            >
                Menu
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={changeRoute} href='/'>
                    Todos
                </MenuItem>
                <MenuItem onClick={changeRoute} href='/cards'>
                    Cards
                </MenuItem>
                <MenuItem onClick={changeRoute} href='/forms'>
                    Forms
                </MenuItem>
            </Menu>
        </div>
    );
};

export default NavMenu;
