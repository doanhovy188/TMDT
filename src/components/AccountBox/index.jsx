import React from 'react'
import styled from 'styled-components';
import {TextField, Typography, Box, Button, makeStyles, IconButton, InputAdornment} from '@material-ui/core';
import { AccountCircle, VpnKey, Search } from '@material-ui/icons';
import { fabClasses } from '@mui/material';
import UnstyledInput from './unStyleText';
import UnstyledUser from './unStyledUser';
import Custom from './search';
import Password from './password';

const BoxContainer = styled.div`
  width: 100%;
  min-height: 450px;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  background-color: #fff;
  box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
  position: relative;
  overflow: hidden;
`;

const TopContainer = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0 1.8em;
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
    padding-left: 35px;
    // text-align: center;
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
  align-items: center;
  margin-left: 70px;
`;

const LoginBtn = styled.button`
    background-color: #FF725E;
    width: 100%;
    height: 50px;
    font-size: 16px;
`;

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 1,
            width: '60px',
            marginLeft: '79px',
            marginTop: '20px'
        }}
    />
);

const useStyles = makeStyles({
    login: {
        // marginLeft: '60px',
        marginTop: '20px',
        borderRadius: "5em",
        //color: '#fff',
        background: '#FF725E',
        width: '76%'
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
        marginLeft: '10px'
    }
})


export function AccountBox(props) {
    const classes =  useStyles();
    return (
        <BoxContainer>
            <TopContainer>
                <HeaderContainer>
                    <HeaderText> Welcome to </HeaderText>
                    <Typography>
                        <Box sx={{marginTop: '10px' }}>
                            <Custom/>
                        </Box>
                        <Box sx={{marginTop: '20px' }}>
                            <Password/>
                        </Box>
                        <Button className={classes.forgot} href="#text-buttons">Forgot password ?</Button>
                        <Button className={classes.login} variant="outlined" size="large">
                            Login
                        </Button>
                    </Typography>
                    <ColoredLine color='black'/>
                    <SmallText > Are you new? 
                        <Button className={classes.register} href="#text-buttons">Register</Button>
                    </SmallText>
                </HeaderContainer>  
            </TopContainer>
        </BoxContainer>
    );
}
