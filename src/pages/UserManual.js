import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import {InterestBox} from '../components/Interest/index';
import {Picture} from '../components/Interest/picture';

const Background = styled.div`
    //background-image: linear-gradient(232.5deg, #68DBFF -18.69%, #63FCD1 86.96%);
    background: linear-gradient(66.94deg, #FF8282 -14.53%, #AA8CFF 132.1%);
    height: 100vh;
`;

const UserManual = () => {
    return (
        <div>
            <Navbar />
                <Background>
                    <Picture />
                    <UserManualBox />
                </Background>
        </div>
    )
}

export default UserManual
