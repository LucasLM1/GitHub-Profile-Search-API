import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 110px;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 0;
    @media (max-width: 825px) {
        height: 150px;
    }
`

export const Name = styled.h1`
    width: 100%;
    text-align: center;
    font-size: 18pt;
    font-weight: 700;
    color: #444;
    margin: 0;
`

export const Username = styled.h2`
    width: 100%;
    text-align: center;
    font-size: 12pt;
    font-weight: 500;
    color: #777;
    margin: 0;
    padding: 10px 0;
    height: 30px;
`

export const Description = styled.p`
    width: 100%;
    height: 30px;
    margin: 10px 0;
    font-size: 15px;
    text-align: center;
    color: #777;
    line-height: 1.3;
    overflow: hidden;
    padding: 0 10px;
    @media (max-width: 825px) {
        font-size: 13pt;
        height: 60px;
    }
    @media (max-width: 425px) {
        font-size: 12.3pt;
    }
`