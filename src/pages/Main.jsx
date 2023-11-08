import * as S from './style/Main.style';
import { useState, useEffect } from 'react';
import About from './About';
import Project from './Project';
import Resume from './Resume';
import AboutComponent from '../components/AboutComponent';
import ProjectComponent from '../components/ProjectComponent';
import ResumeComponent from '../components/ResumeComponent';
import { Link } from 'react-router-dom';

const Main = () => {

    const [tab, setTab] = useState('');
    const tabList = [{category: 'About'}, {category: 'Project'}, {category: 'Resume'}]
    const tabComponent = {
        About: <About />,
        Project: <Project />,
        Resume: <Resume />,
    }
    const tabReset = ()=>{
        setTab('');
    }
    const [slideImage, setSlideImage] = useState([
        "imgs/film.png"])
    const rotateImages = () => {
        setSlideImage((prevImages)=>{
            return [...prevImages, ...prevImages];
        });
    }
    useEffect(()=>{
        const timer = setTimeout(rotateImages, 10);
        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <>
            <S.Container id="container">
                <S.Head onClick={tabReset}>
                    <S.StyledLink to="/" >
                        <S.Title>Front-end <br />Developer</S.Title>
                    </S.StyledLink>
                    {tab === "" && (
                    <S.Slider>
                        <S.ImageBox>
                            {slideImage.map((image, index) => (
                                <S.FilmDiv key={index}>
                                    <S.FilmImg src={image} alt="" />
                                </S.FilmDiv>
                            ))}
                        </S.ImageBox>
                    </S.Slider>)}
                </S.Head>
                {tab === "" &&(
                    <S.MainIntro>
                        <S.MainIntroImg src="imgs/arrow.png" alt="" />
                        <S.MainIntroText>
                            과거엔 열정 넘치던 유치원선생님! 지금은 열정 넘치는 신입개발자-☆
                            <br />오랜 교직생활을 하며 꼭 필요했던 웹사이트!<br />
                            <S.WeatherSite as={Link} to="https://rainbow92.netlify.app/">보러가기🔎</S.WeatherSite>
                        </S.MainIntroText>
                    </S.MainIntro>
                    )}
                <S.MainItem>
                    <S.Side>
                        {tabList.map((item, index)=>{
                            return (
                                <S.SideDiv
                                    key={index}
                                    onClick={()=>setTab(item.category)}
                                    active={tab === item.category ? 'active' : ''}
                                >
                                    <S.SideText>{item.category}</S.SideText>
                                </S.SideDiv>
                            )
                        })}
                    </S.Side>
                    {
                    tab === ''
                    ? <S.Content>
                        <S.ContentName>SHIN HYEJI</S.ContentName>
                        <S.ContentText>PORTFOLIO</S.ContentText>
                    </S.Content>
                    : tabComponent[tab]
                    }
                </S.MainItem>
                <S.Detail
                    active={tab === tabList[0].category ? 'active' : ''}
                >
                    {tab === 'About' && <AboutComponent />}
                    {tab === 'Project' && <ProjectComponent />}
                    {tab === 'Resume' && <ResumeComponent />}
                </S.Detail>
            </S.Container>
            
        </>
    )
}

export default Main;