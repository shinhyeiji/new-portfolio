import styled, { css, keyframes } from 'styled-components';
import isPropValid from '@emotion/is-prop-valid';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    width : 1440px;
    height: 870px;
    margin: auto;
    padding-left: 60px;
    padding-right: 60px;
`
export const Head = styled.div`
    width: 100%;
    height: 20%;
    margin-top: 50px;
    display: flex;
    align-items: center;
`
export const StyledLink = styled(Link)`
    text-decoration: none;
    color: #000;
    &:hover{
        color:#FFF;
    }
`
export const Title = styled.p`
    width: 250px;
    height: 150px;
    padding: 20px;
    line-height: 70px;
    background-color: #D9D9D9;
    font-size: 50px;
    text-align: left;
    font-weight: bold;
    text-decoration: none;
`
export const Slider = styled.div`
    width: 1150px;
    height: 170px;
    overflow: hidden;
    position: relative;
    border: 10px solid black;
    background-color: black;
`
export const ImageBox = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  flex-wrap: nowrap;
  animation: ${keyframes`
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(-100%, 0);
    }
  `} 40s linear infinite;
`;
export const FilmDiv = styled.div`
    width: 1100px;
    height: 170px;
    flex: 0 0 auto;
    line-height: 170px;
    background-color: #369;
    vertical-align: top;
    text-align: center;
`
export const FilmImg = styled.img`
    width: 100%;
    height: 100%;
`
export const MainIntro = styled.div`
    width: 70%;
    position: absolute;
    left: 400px;
    display: flex;
    opacity: 0.3;
    font-family: 'Yeon Sung', cursive;
`
export const MainIntroImg = styled.img`
    width: 200px;
    height: 200px;
`
export const MainIntroText = styled.h5`
    font-size: 25px;
    line-height: 40px;
    transform: rotate(-6deg);
`
export const MainItem = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: row;
`
export const Side = styled.div`
    width: 30%;
    margin-top: 100px;
`
export const SideDiv = styled.div.withConfig({
    shouldForwardProp: (prop) => isPropValid(prop) && prop !== 'active',
    })`
        width: 275px;
        height: 108px;
        padding: 20px;
        ${(props) => props.active && css`
            font-weight: 700
        `}
`

export const SideText = styled.p`
    font-size: 40px;
    &:hover{
        color:#F0F0F0;
        cursor: pointer;
    }
`
export const Content = styled.div`
    width: 70%;
    margin-top: 280px;
`
export const ContentName = styled.p`
    margin: 10px;
    font-size: 48px;
    text-align: right;
    font-weight: bold;
`
export const ContentText = styled.p`
    margin: 10px;
    font-size: 128px;
    font-weight: bold;
    text-align: right;
`
export const Detail = styled.div.withConfig({
    shouldForwardProp: (prop) => isPropValid(prop) && prop !== 'active',
    })`
        width: 1440px;
        ${(props) => props.active && css`
            height: auto;
        `}

`
export const WeatherSite = styled.h6`
    text-decoration: none;
    color: #000;
    font-weight: 700;
    cursor: pointer;
`