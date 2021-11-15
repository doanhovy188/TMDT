import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import React from 'react'
import styles from '../components/Interest/i'
import {InterestBox} from '../components/Interest/index';
import {Picture} from '../components/Interest/picture';

const Background = styled.div`
    //background-image: linear-gradient(232.5deg, #68DBFF -18.69%, #63FCD1 86.96%);
    background: linear-gradient(66.94deg, #FF8282 -14.53%, #AA8CFF 132.1%);
    height: 100vh;
`;

const Interest = () => {
    return (
        <div>
            <Navbar />
                <Background>
                    <Picture />
                    <InterestBox />
                </Background>
        </div>
    )
}

export default Interest
