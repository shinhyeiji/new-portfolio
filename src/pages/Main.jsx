import * as S from './style/Main.style';
import { useState } from 'react';
import About from './About';
import Project from './Project';
import Resume from './Resume';
import AboutComponent from '../components/AboutComponent';
import ProjectComponent from '../components/ProjectComponent';
import ResumeComponent from '../components/ResumeComponent';

const Main = () => {

    const [tab, setTab] = useState('');
    const tabList = [{category: 'About'}, {category: 'Project'}, {category: 'Resume'}]
    const tabComponent = {
        About: <About />,
        Project: <Project />,
        Resume: <Resume />
    }
    const tabReset = ()=>{
        setTab('');
    }

    return (
        <>
            <S.Container>
                <S.StyledLink to="/" >
                    <S.Head onClick={tabReset}>
                        <S.Title>Front-end <br />Developer</S.Title>
                    </S.Head>
                </S.StyledLink>
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