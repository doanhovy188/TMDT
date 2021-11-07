import React from 'react'
import styled from "styled-components";
import useStyle from './components/Navbar/styles';
import Navbar from './components/Navbar/Navbar';
import { AccountBox } from './components/AccountBox';
import pic from './assets/Image/Growth curve-pana.png';


const Background = styled.div`
    background-image: linear-gradient(232.5deg, #68DBFF -18.69%, #63FCD1 86.96%);
`;

const Container = styled.div`
    width: auto;
    height: 100%;
    max-width: 1540px;
    margin: 0 auto;
    padding: 0 50px;
    display: flex;
    justify-content: space-between;
    
`;

const AppContainer = styled.div`
    position: relative;
    width: 300px;
    right: 50px;
    top: 200px;
`;

const BoxPic = styled.div`
    position: relative;
    top: 150px;
    left: 100px;
`;


const App2 = () => {
    const classes = useStyle();
    return (
        <div>
                <Navbar />
                <Background>
                    <Container>
                        <AppContainer>
                            <AccountBox />
                        </AppContainer>
                    </Container>
                </Background>
        </div>
    )
}

export default App2;
