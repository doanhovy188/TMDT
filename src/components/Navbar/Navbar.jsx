import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart, Phone, AttachMoney, Info } from '@material-ui/icons';
import { classExpression } from '@babel/types';

// import { TableView } from '@mui/icons-material';
import logo from '../../assets/commerce.png';
import flagVN from '../../assets/flag-vn.png';
import useStyle from './styles';
// import { TableViewRounded } from '@mui/icons-material';


const Navbar = () => {

    const classes = useStyle();

    return (
        <>
            <AppBar position='fixed' className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography variant="h6" className={classes.title} color="inherit">
                        <img src={logo} alt="Commerce.js" height="25px" className={classes.image}/>
                        Universe Bank
                    </Typography>
                    <div className={classes.grow}/>
                    <Typography variant="h6">
                        <IconButton>
                            <Phone /> 0842805550 
                        </IconButton>
                    </Typography>
                    <div className={classes.button}>
                        <IconButton> 
                            <AttachMoney /> Interest rate
                        </IconButton>
                    </div>
                    <div className={classes.button}>
                        <IconButton> 
                            <Info /> About Us
                        </IconButton>
                    </div>
                    <div className={classes.button}>
                        <Typography className="classes.title">
                            <IconButton aria-label="Change Language" color="inherit"> 
                                <img src={flagVN}alt="Flag Vn" height="35px" className={classes.image} />
                            </IconButton>
                        </Typography>
                    </div>
                    
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
