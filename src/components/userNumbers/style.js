import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 80px;
    padding: 0 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const NumberContainer = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px 0;
    
    h1 {
        font-size: 15pt;
        text-align: center;
        color: #444;
        margin: 10px 5px;
    }
    h2 {
        font-size: 13pt;
        text-align: center;
        color: #777;
        margin: 0;
    }
    &:hover {
        cursor: pointer;
        background: rgba(0,0,0,.03);
        transition: .4s ease;
        border-radius: 10px;
    }
    @media (max-width: 825px) {
        flex-direction: column;
        h2{
            font-size:11pt
        }
    }
    @media (max-width: 425px) {
        flex-direction: column;
        h2{
            font-size: 9pt
        }
    }
`