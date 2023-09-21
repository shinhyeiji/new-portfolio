import React, { useState, useEffect } from 'react';
import * as S from './style/AboutComponent.style';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, LabelList } from 'recharts';

const AboutComponent = () => {
    AboutComponent.demoUrl = 'https://codesandbox.io/s/tiny-bar-chart-35meb';

    const introduce = "Hello. Welcome To My Website."
    const [introduceText, setIntroduceText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(()=>{
      if(currentIndex < introduce.length){
        const timer = setTimeout(()=>{
          setIntroduceText((prevText) => prevText + introduce[currentIndex]);
          setCurrentIndex((prevIndex) => prevIndex + 1);
        }, 100);

        return () => clearTimeout(timer);
      }
    }, [currentIndex, introduce])

    const studyData = [
        {
          name: 'PASSION',
          percentage: 100,
        },
        {
          name: 'JavaScript',
          percentage: 70,
        },
        {
          name: 'TypeScript',
          percentage: 30,
        },
        {
          name: 'React',
          percentage: 60,
        },
        {
          name: 'Html',
          percentage: 80,
        },
        {
          name: 'CSS',
          percentage: 60,
        },
        {
          name: 'StyledComponent',
          percentage: 60,
        },
        {
          name: 'Figma',
          percentage: 70,
        },
        {
          name: 'GitHub',
          percentage: 40,
        },
        {
          name: 'GitLab',
          percentage: 50,
        },
        {
          name: 'Notion',
          percentage: 50,
        },
    ];

    
    return(
        <S.AboutComponent>
            <S.AboutIntro>
                <S.IntroTitle>About</S.IntroTitle>
                <S.IntroContent>
                    <S.IntroImage src="/imgs/2.png" alt="" />
                    <S.Introduce>{introduceText}</S.Introduce>
                </S.IntroContent>

            </S.AboutIntro>
            <S.AboutIntro>
                <S.IntroTitle2>Stack</S.IntroTitle2>
                <S.IntroContent>
                    <ResponsiveContainer width={1200} >
                        <BarChart
                            layout="vertical"
                            width={500}
                            height={200}
                            data={studyData}
                        >
                          <XAxis type="number" interval="20" />
                          <YAxis dataKey="name" type="category" width={200} fontWeight={700} />
                          <Bar 
                              dataKey="percentage" 
                              fill="skyblue"
                              formatter={(value) => `${value}%`}
                          >
                            <LabelList
                                dataKey="percentage"
                                position="insideRight"
                                fontWeight="700"
                                fill="#fff" // 텍스트 색상 지정
                                formatter={(value) => `${value}%`} // 텍스트 형식 지정
                            />
                          </Bar>
                          <Tooltip />
                        </BarChart>
                    </ResponsiveContainer>
                </S.IntroContent>
            </S.AboutIntro>
            <S.AboutIntro>
                <S.IntroTitle2>Experience</S.IntroTitle2>
                <S.IntroContent>
                    <S.ExperienceDiv>
                        <S.ExperienceTitle>교육</S.ExperienceTitle>
                        <S.ExperienceContentDiv>
                            <S.ExperienceContentTitle><span class="material-symbols-outlined">toys_fan</span> 엘리스트랙 SW5 엔지니어 5기 수료</S.ExperienceContentTitle>
                            <S.ExperienceContent>- 기간 : 2023.05.15 ~ 2023.09.01</S.ExperienceContent>
                        </S.ExperienceContentDiv>
                        <S.ExperienceImage src="/imgs/graduation-ex.png" alt="" />
                    </S.ExperienceDiv>
                    <S.ExperienceDiv>
                        <S.ExperienceTitle>스터디</S.ExperienceTitle>
                        <S.ExperienceContentDiv>
                            <S.ExperienceContentTitle><span class="material-symbols-outlined">toys_fan</span> 스터디명 : JavaScript 기초 스터디</S.ExperienceContentTitle>
                            <S.ExperienceContent>- 기간 : 2023.05.24 ~ 2023.05.28</S.ExperienceContent>
                            <S.ExperienceContent>- 목표</S.ExperienceContent>
                            <S.ExperienceContent>1) 'Do it! 모던 자바스크립트 프로그래밍의 정석' 책 완독</S.ExperienceContent>
                            <S.ExperienceContent>2) 프로그래머스 코딩테스트 하루 1 문제</S.ExperienceContent>
                            <S.ExperienceContentTitle><span class="material-symbols-outlined">toys_fan</span> 스터디명 : JavaScript 웹페이지 리팩토링</S.ExperienceContentTitle>
                            <S.ExperienceContent>- 기간 : 2023.07.24 ~ 2023.08.11</S.ExperienceContent>
                            <S.ExperienceContent>- 목표</S.ExperienceContent>
                            <S.ExperienceContent>1) 웹페이지 리팩토링</S.ExperienceContent>
                            <S.ExperienceContent>2) 리팩토링을 통한 JS 공부</S.ExperienceContent>

                        </S.ExperienceContentDiv>
                    </S.ExperienceDiv>
                    <S.ExperienceDiv>
                        <S.ExperienceTitle>프로젝트</S.ExperienceTitle>
                        <S.ExperienceContentDiv>
                            <S.ExperienceContentTitle><span class="material-symbols-outlined">toys_fan</span> 프로젝트1 : 다이어트 식사 판매 웹페이지</S.ExperienceContentTitle>
                            <S.ExperienceContent>- 기간 : 2023.07.03 ~ 2023.07.14</S.ExperienceContent>
                            <S.ExperienceContentTitle><span class="material-symbols-outlined">toys_fan</span> 프로젝트2 : 맛집 추천 소셜 웹페이지</S.ExperienceContentTitle>
                            <S.ExperienceContent>- 기간 : 2023.08.14 ~ 2023.09.01</S.ExperienceContent>
                        </S.ExperienceContentDiv>
                        <S.ExperienceImage src="/imgs/project-ex.png" alt="" />
                    </S.ExperienceDiv>
                </S.IntroContent>
            </S.AboutIntro>
        </S.AboutComponent>
    )
}

export default AboutComponent;