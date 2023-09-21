import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ProjectComponent = styled.div`
    width: 100%;
    height: 100%;
    font-family: 'IBM Plex Sans KR', 'Kanit',  sans-serif;
    background-color: #f0f0f0;
    `
export const Project1 = styled.div`
    width: 1440px;
    height: 870px;
    margin-bottom: 20px;
`
export const Project2 = styled.div`
    width: 1440px;
    height: 870px;
`
export const ProjectHead = styled.div`
    width: 100%;
    height: 40px;
    margin-bottom: 40px;
    display: flex;
    justify-content: space-between;
    font-size: 50px;
    padding: 20px;
`
export const ProjectTitle = styled.h2`
    margin: 20px;
    font-size: 50px;
    font-weight: 700;
    font-family: 'Bungee Shade', 'Rammetto One', sans-serif;
`
export const ProjectDetailTitle = styled.h5`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    font-size: 25px;
    color: skyblue;
`
export const LinkDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
`
export const None = styled.div`
    flex:1;
`
export const StyledLink = styled(Link)`
    width: 280px;
    text-decoration: none;
    color: #000;
    &:hover{
        color:#FFF;
    }
`
export const ProjectLink = styled.h4`
    font-size: 25px;
    font-weight: 700;
    color: black;
    margin: 20px;
    padding-right: 20px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    text-decoration: none;
    &:hover{
        color:#F0F0F0;
    }
`
export const ProjectContent = styled.div`
    width: 100%;
    height: 720px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 0;
    padding: 20px;
`
export const ProjectExplanation = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`
export const ProjectExplanationDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin: 2px 0;
`
export const ProjectName = styled.h3`
    display: flex;
    align-items: center;
    margin: 2px 0;
    font-size: 25px;
    color: skyblue;
`
export const ProjectNameDetail = styled.p`
    font-weight: 600;
    font-size: 20px;
    margin: 10px 0;
    color: #a2a2a2;
    
`
export const ImgDiv = styled.div`
    height: 350px;
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
`
export const ProjectImg = styled.img`
    width: 250px;
    height: 320px;
    margin-right: 30px;
    background-color: #3498db;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    color: #fff;
    backface-visibility: hidden;
`
export const Card = styled.div`
    width: 250px;
    height: 320px;
    margin-right: 30px;
    perspective: 1000px;
`
export const CardInner = styled.div`
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 1s;
    box-shadow: 10px 10px 10px 5px rgba(0, 0, 0, 0.3); 
    &:hover{
        transform: rotateY(180deg);
    }
`
export const Back = styled.div`
    width: 100%;
    height: 100%;
    background-color: #F0F0F0;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    box-shadow: 10px 10px 10px 5px rgba(0, 0, 0, 0.3); 
    font-size: 18px;
    color: #000;
    backface-visibility: hidden;
    transform: rotateY(180deg);
`
export const BackTitle = styled.h5`
    font-size: 20px;
`
export const BackContent = styled.p`
    font-size: 17px;
`
export const Project1Img = styled.img`
    width: 1440px;
    height: 870px;
`
export const Project2Img = styled.img`
    width: 1440px;
    height: 870px;
`