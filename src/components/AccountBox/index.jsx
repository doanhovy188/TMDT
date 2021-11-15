import React from 'react';
import styled from 'styled-components';
import { TextField, Typography, Box, Button, makeStyles, IconButton, InputAdornment } from '@material-ui/core';
import { AccountCircle, VpnKey, Search } from '@material-ui/icons';
import { fabClasses } from '@mui/material';
import UnstyledUser from './unStyledUser';
import Custom from './search';
import Password from './password';
import { useState } from 'react';
import styles from './style.module.css';

const BoxContainer = styled.div`
  width: 100%;
  min-height: 450px;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  background-color: #fff;
  box-shadow: 20px 10px 10px rgba(2, 128, 144, 0.2);
  position: relative;
  overflow: hidden;
`;

const TopContainer = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
//   padding: 0 1.8em;
  padding-top: 20px;
`;

const HeaderContainer = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
`;

const HeaderText = styled.h2`
    font-size: 30px;
    font-weight: 600;
    line-height: 1.2;
    color: black;
    margin: 0;
    z-index: 20;
    font-family: asap, sans-serif;
    // padding-left: 35px;
    text-align: center;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const SmallText = styled.h3`
  color: black;
  display: flex;
  font-family: asap, sans-serif;
  font-weight: 500;
  font-size: 11px;
  z-index: 10;
  margin: 10;
  margin-top: 7px;
  justify-content: center;
  align-items: center;
`;


const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 0.5,
            width: '60px',
            display: 'flex',
            alignItems: 'center',
            marginTop: '30px',
        }}
    />
);

const useStyles = makeStyles({
    login: {
        display: 'flex',
        marginTop: '20px',
        borderRadius: "5em",
        background: '#FF725E',
        width: '76%',
        boxShadow: '2px 4px 6px rgba(0, 0, 0, 0.25)',
        textAlign: 'center',
        margin: 'auto'
    },
    forgot: {
        fontSize: '10px',
        marginLeft: '100px',
        marginTop: '10px',
        color: '#FF725E'
    },
    cirle: {
        borderRadius: "5em"
    },
    register: {
        margin: '0',
        color: '#FF725E',
        marginLeft: '10px',
        textTransform: 'none',
    },
    shadow: {
        filter: 'drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.25))'
    }

})


export function AccountBox(props) {
    const classes = useStyles();

    const admin ={
        user: 'admin',
        pass: '123',
    }

    const [pass, setPass] = useState('');
    const [user, setUser] = useState('');

    function handleUserInput(e) {
        setUser(e.target.value);
    }
    function handlePassInput(e) {
        setPass(e.target.value);
    }

    function handleSubmit()
    {
        console.log('User:' + user);
        console.log('Pass:' + pass);

        if(user == admin.user && pass == admin.pass)
            console.log("Login");
    }
    return (
        <BoxContainer>
            <TopContainer>
                <HeaderContainer>
                    <HeaderText> Welcome to </HeaderText>
                    <Typography>
                        <Box sx={{ marginTop: '10px' }}>
                        <div className={styles.boxPassword}>
                                <figure className="key"> <img src="../assets/flag-vn.png" alt="flag" /> </figure>
                                <input
                                    type="text"
                                    className={styles.passwordInput}
                                    placeholder = "User"
                                    value={user}
                                    onChange={handleUserInput}
                                />
                            </div>
                        </Box>
                        <Box sx={{ marginTop: '20px' }}>
                            <div className={styles.boxPassword}>
                                <figure className="key"> <img src="../assets/flag-vn.png" alt="flag" /> </figure>
                                <input
                                    type="password"
                                    className={styles.passwordInput}
                                    placeholder = "Password"
                                    value={pass}
                                    onChange={handlePassInput}
                                />
                            </div>
                        </Box>
                        <Button className={classes.forgot} href="#text-buttons">Forgot password ?</Button>
                        <Button className={classes.login} onClick={handleSubmit} variant="outlined" size="large">
                            Login
                        </Button>
                    </Typography>
                    <ColoredLine color='black' />
                    <SmallText href="google.com" > Are you new?
                        <Button className={classes.register} href="/register">Register</Button>
                    </SmallText>
                </HeaderContainer>
            </TopContainer>
        </BoxContainer>
    );
}
