import styled from 'styled-components';

export const Container = styled.main`
    width: 100%;
    height: 100vh;
    background: linear-gradient(45deg,#ff5e00,#d18b5a, #b3b0b0,#6888a3,#6762d1d6);
    background-size: 300% 300%;
    animation: colors 12s ease infinite;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @keyframes colors {
        0% {
            background-position: 0% 50%;
        }
    
        50% {
            background-position: 100% 50%;
        }
    
        100% {
            background-position: 0% 50%;
        }
    }
`