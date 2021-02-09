import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
    background: linear-gradient(45deg, rgb(106, 120, 209), rgb(0, 164, 189));
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
`;

export const Home = () => {
    return (
        <Background>
            Hello world!
        </Background>
    );
};

export default Home;
