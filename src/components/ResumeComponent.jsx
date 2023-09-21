import React from 'react';
import * as S from './style/ResumeComponent.style';

const ResumeComponent = () => {
    return(
        <S.ResumeComponent>
            <S.ResumePage>
                <S.ResumeHead>
                    <S.ResumeTitle>Resume</S.ResumeTitle>
                </S.ResumeHead>
                <S.ResumeContent>
                    <S.LeftContent>
                        <S.ResumeImage src="imgs/2.png" alt="" />
                    </S.LeftContent>
                    <S.RightContent>
                        <S.ResumeContact>
                            <S.ContactTitle>Contact</S.ContactTitle>
                            <S.ContactDiv>
                                <S.ContactMethod1>Email.</S.ContactMethod1>
                                <S.ContactMethod2>shinhyeiji@gmail.com</S.ContactMethod2>
                            </S.ContactDiv>
                        </S.ResumeContact>
                        <S.ResumeContact>
                            <S.ContactTitle>Channel</S.ContactTitle>
                            <S.ContactDiv>
                                <S.ContactMethod1>Blog.</S.ContactMethod1>
                                <S.ContactMethod2 style={{ whiteSpace: 'nowrap' }}>https://jh-6220.tistory.com</S.ContactMethod2>
                            </S.ContactDiv>
                            <S.ContactDiv>
                                <S.ContactMethod1>Notion.</S.ContactMethod1>
                                <S.ContactMethod2 style={{ whiteSpace: 'nowrap' }}>https://www.notion.so/hyejishin</S.ContactMethod2>
                            </S.ContactDiv>
                            <S.ContactDiv>
                                <S.ContactMethod1>Portfolio.</S.ContactMethod1>
                                <S.ContactMethod2 style={{ whiteSpace: 'nowrap' }}>https://heartfelt-dragon-0086bb.netlify.app</S.ContactMethod2>
                            </S.ContactDiv>
                        </S.ResumeContact>
                    </S.RightContent>
                </S.ResumeContent>
            </S.ResumePage>
            <S.ResumePage>
                <S.ResumeDetailContent>
                    <S.ResumeDetailHead>Introduce</S.ResumeDetailHead>
                    <S.ResumeDetail>
                        <S.ResumeDetailText>
                        안녕하세요, 저는 끊임없이 도전하는 신입 개발자 신혜지입니다.<br />
                        "코딩"과 "개발"이라는 놀라운 신세계에 발을 디딘지 얼마 되지 않았지만, 웹 개발 및 관련 분야에서 열심히 학습하고 성장하고 있는 개발자입니다.<br />
                        개발에 대한 열정은 처음부터 불타오르기 시작했습니다. 처음으로 코드를 작성하고 웹 페이지를 만들 때의 그 즐거움은 저에게 끝없는 동기부여와 열정을 줬습니다.<br />
                        개발 교육 프로그램에 참여하면서, 다양한 동료 개발자들과 함께 공부하고 프로젝트를 수행하며 협업 능력을 키웠습니다. 팀원들과의 협업을 통해 제가 가진 개발 기술을 공유하고 배우며, 함께 문제를 해결하며 개발의 새로운 차원을 경험했습니다.<br />
                        또한, 짧은 시간 동안에도 2개의 스터디와 2개의 프로젝트를 통해 프로그램 개발의 기초를 학습했습니다. 이론을 실제 프로젝트에 적용하면서, 코드가 실제로 작동하는 것을 보며 지식이 얼마나 강력한 도구인지 깨닫게 되었습니다.<br />
                        개인 프로젝트와 실무에서의 경험은 다를 수 있겠지만, 항상 배우고 성장하는 자세를 갖추려 노력하고 있습니다.<br />
                        저는 항상 새로운 도전을 즐기며, 프로젝트와 기회를 통해 더 큰 성장을 이루고자 합니다. 미래에는 더 복잡하고 흥미로운 프로젝트를 수행하고, 개발 커뮤니티에서 활발하게 참여하며 지식을 공유하고자 합니다.<br />
                        감사합니다.
                        </S.ResumeDetailText>
                    </S.ResumeDetail>
                </S.ResumeDetailContent>
            </S.ResumePage>
            <S.ResumePage>
                <S.ResumeDetailContent>
                    <S.ResumeDetailHead>Dev Experience</S.ResumeDetailHead>
                    <S.ResumeDetail>
                        <S.ResumeDevText>
                        <S.DevTable>
                                <S.DevThead>
                                    <S.DevTr>
                                        <S.DevTh>교육</S.DevTh>
                                        <S.DevTd>
                                            <S.DevUl>
                                                <S.DevLi>엘리스트랙 SW5 엔지니어 5기 수료</S.DevLi>
                                                <S.DevLi2> 2023.05.15 ~ 2023.09.01</S.DevLi2>
                                            </S.DevUl>
                                        </S.DevTd>
                                        <S.DevTd2>
                                            <S.DevUl>
                                                <S.DevLi>본 교육에서는 HTML, SCSS, StyledComponent를 학습하고 활용하였습니다.</S.DevLi>
                                                <S.DevLi>자바스크립트와 비동기에 대해 고민하고 타입스크립트에 대해 학습하였으며 자바스크립트를 이용해 프로젝트를 진행하였습니다.</S.DevLi>
                                                <S.DevLi>React와 리액트훅, 라이브러리들을 학습하고 프로젝트를 진행하였습니다.</S.DevLi>
                                            </S.DevUl>
                                        </S.DevTd2>
                                    </S.DevTr>
                                    <S.DevTr>
                                        <S.DevTh>스터디</S.DevTh>
                                        <S.DevTd>
                                            <S.DevUl>
                                                <S.DevLi>JavaScript 기초 스터디</S.DevLi>
                                                <S.DevLi2> 2023.05.24 ~ 2023.05.28</S.DevLi2>
                                                <S.DevLi>JavaScript 웹페이지 리팩토링 스터디</S.DevLi>
                                                <S.DevLi2> 2023.07.24 ~ 2023.08.11</S.DevLi2>
                                            </S.DevUl>
                                        </S.DevTd>
                                        <S.DevTd2>
                                            <S.DevUl>
                                                <S.DevLi>자바스크립트 기초를 좀 더 다지고 비동기에 대해 학습하였습니다.</S.DevLi>
                                                <br />
                                                <S.DevLi>다른 팀 프로젝트에 투입되어 미완성된 코드를 읽고, 코드를 수정하여 완성해보았습니다.</S.DevLi>
                                                <br />
                                            </S.DevUl>
                                        </S.DevTd2>
                                    </S.DevTr>
                                    <S.DevTr>
                                        <S.DevTh>프로젝트</S.DevTh>
                                        <S.DevTd>
                                            <S.DevUl>
                                                <S.DevLi>다이어트 식사 판매 웹페이지</S.DevLi>
                                                <S.DevLi2>2023.07.03 ~ 2023.07.14</S.DevLi2>
                                                <S.DevLi>맛집 추천 소셜 웹페이지</S.DevLi>
                                                <S.DevLi2>2023.08.14 ~ 2023.09.01</S.DevLi2>
                                                <br/>

                                            </S.DevUl>
                                        </S.DevTd>
                                        <S.DevTd2>
                                            <S.DevUl>
                                                <S.DevLi>async-await, fetch, try-catch문을 이용하여 비동기로 데이터를 가져와 처리하였습니다.</S.DevLi>
                                                <S.DevLi>이미지슬라이드, 검색기능, fetchData이용, 토큰이용방법을 학습하였습니다.</S.DevLi>
                                                <S.DevLi>react를 이용해 다음주소, 카카오맵API를 응용하는 방법, 모달, 이미지업로드, 검색 및 정렬기능을 학습하였습니다.</S.DevLi>
                                                <S.DevLi>리액트훅 이용, props전달 방법을 반복해서 사용해보며 심화있게 학습하였습니다.</S.DevLi>
                                            </S.DevUl>
                                        </S.DevTd2>
                                    </S.DevTr>
                                </S.DevThead>
                            </S.DevTable>
                        </S.ResumeDevText>
                    </S.ResumeDetail>
                </S.ResumeDetailContent>
            </S.ResumePage>
            <S.ResumePage>
                <S.ResumeDetailContent>
                    <S.ResumeDetailHead>Project</S.ResumeDetailHead>
                    <S.ResumeDetail>
                        <S.ResumeDetailText>
                            <S.ProjectTitle>
                                <span class="material-symbols-outlined">hdr_strong</span>
                                팀 파2ting - Da2ating
                                <span class="material-symbols-outlined">hdr_weak</span>
                            </S.ProjectTitle>
                            <S.ProjectExplanation>다이어트를 하거나, 바쁜 현대사회에서 가볍고 간편한 식사를 원하는 사람들을 위한 간편 다이어트식 판매 사이트</S.ProjectExplanation>
                            <S.Table>
                                <S.Thead>
                                    <S.Tr>
                                        <S.Th>팀프로젝트</S.Th>
                                        <S.Td>
                                            <S.Ul>
                                                <S.Li>프론트엔드 4명 / 백엔드 1명</S.Li>
                                                <S.Li>프론트엔드 개발 담당</S.Li>
                                            </S.Ul>
                                        </S.Td>
                                    </S.Tr>
                                    <S.Tr>
                                        <S.Th>프로젝트 결과물</S.Th>
                                        <S.Td>
                                            <S.Ul>
                                                <S.Li>http://kdt-sw-5-team02.elicecoding.com</S.Li>
                                                <S.Li>https://kdt-gitlab.elice.io/sw_track/class_05/web_project/team02/f2ting_client</S.Li>
                                            </S.Ul>
                                        </S.Td>
                                    </S.Tr>
                                    <S.Tr>
                                        <S.Th>활용한 기술스택</S.Th>
                                        <S.Td>
                                            <S.StackUl>
                                                <S.StackLi>JavaScript</S.StackLi>
                                                <S.StackLi>HTML</S.StackLi>
                                                <S.StackLi>CSS</S.StackLi>
                                                <S.StackLi>Figma</S.StackLi>
                                                <S.StackLi>node.js</S.StackLi>
                                                <S.StackLi>mongoDB</S.StackLi>
                                                <S.StackLi>mongoose</S.StackLi>
                                            </S.StackUl>
                                        </S.Td>
                                    </S.Tr>
                                    <S.Tr>
                                        <S.Th>프론트엔드 구현기능</S.Th>
                                        <S.Td>
                                            <S.Ul>
                                                <S.Li>메인페이지: 쇼핑몰 내의 best 메뉴와 new메뉴 4가지, 진행중인 이벤트를 보여주며 상세페이지로 이동</S.Li>
                                                <S.Li>마이페이지: 회원정보조회, 변경, 탈퇴기능과 주문정보/배송조회 확인</S.Li>
                                                <S.Li>헤더: 카테고리, 검색기능, 회원가입, 로그인, 장바구니, 메인페이지로 이동</S.Li>
                                                <S.Li>푸터: 회사 정보 등록</S.Li>
                                                <S.Li>사이드: 장바구니, 배송조회, 상단-하단이동</S.Li>
                                            </S.Ul>
                                        </S.Td>
                                    </S.Tr>
                                </S.Thead>
                            </S.Table>
                        </S.ResumeDetailText>
                    </S.ResumeDetail>
                </S.ResumeDetailContent>
            </S.ResumePage>
            <S.ResumePage>
                <S.ResumeDetailContent>
                    <S.ResumeDetailHead></S.ResumeDetailHead>
                    <S.ResumeDetail>
                        <S.ResumeDetailText>
                            <S.ProjectTitle>
                                <span class="material-symbols-outlined">hdr_strong</span>
                                팀 팔레트 - TastyTogether
                                <span class="material-symbols-outlined">hdr_weak</span>
                            </S.ProjectTitle>
                            <S.ProjectExplanation>맛집에 진심인 사람들을 위한 맛집추천 소셜네트워크 사이트</S.ProjectExplanation>
                            <S.Table>
                                <S.Thead>
                                    <S.Tr>
                                        <S.Th>팀프로젝트</S.Th>
                                        <S.Td>
                                            <S.Ul>
                                                <S.Li>프론트엔드 4명 / 백엔드 1명</S.Li>
                                                <S.Li>프론트엔드 개발 담당</S.Li>
                                            </S.Ul>
                                        </S.Td>
                                    </S.Tr>
                                    <S.Tr>
                                        <S.Th>프로젝트 결과물</S.Th>
                                        <S.Td>
                                            <S.Ul>
                                                <S.Li>http://kdt-sw-5-2-team08.elicecoding.com</S.Li>
                                                <S.Li>https://kdt-gitlab.elice.io/sw_track/class_05/web_2_project/team08/tastytogther-fe</S.Li>
                                            </S.Ul>
                                        </S.Td>
                                    </S.Tr>
                                    <S.Tr>
                                        <S.Th>활용한 기술스택</S.Th>
                                        <S.Td>
                                            <S.StackUl>
                                                <S.StackLi>React</S.StackLi>
                                                <S.StackLi>StyledComponent</S.StackLi>
                                                <S.StackLi>Figma</S.StackLi>
                                                <S.StackLi>HTTP</S.StackLi>
                                                <S.StackLi>NGINX</S.StackLi>
                                                <S.StackLi>JWT</S.StackLi>
                                                <S.StackLi>exporess</S.StackLi>
                                                <S.StackLi>PM2</S.StackLi>
                                                <S.StackLi>mongoDB</S.StackLi>
                                                <S.StackLi>Atlas</S.StackLi>
                                            </S.StackUl>
                                        </S.Td>
                                    </S.Tr>
                                    <S.Tr>
                                        <S.Th>프론트엔드 구현기능</S.Th>
                                        <S.Td>
                                            <S.Ul>
                                                <S.Li>맛집등록페이지 : 주소찾기기능, 지도API연결, 기존 정보와 비교하여 등록여부 확인, 맛집정보 저장 및 등록</S.Li>
                                                <S.Li>검색페이지: 메인, 헤더의 검색기능과 검색페이지 연결, 검색키워드에 따른 정보 렌더링, 지도API연결, 정렬기능  </S.Li>
                                            </S.Ul>
                                        </S.Td>
                                    </S.Tr>
                                </S.Thead>
                            </S.Table>
                        </S.ResumeDetailText>
                    </S.ResumeDetail>
                </S.ResumeDetailContent>
            </S.ResumePage>
            <S.ResumePage>
                <S.ResumeDetailContent>
                    <S.ResumeDetailHead></S.ResumeDetailHead>
                    <S.ResumeDetail>
                        <S.ResumeDetailText>
                            <S.ProjectTitle>
                                <span class="material-symbols-outlined">hdr_strong</span>
                                Make a Portfolio
                                <span class="material-symbols-outlined">hdr_weak</span>
                            </S.ProjectTitle>
                            <S.ProjectExplanation>포트폴리오를 위한 웹사이트</S.ProjectExplanation>
                            <S.Table>
                                <S.Thead>
                                    <S.Tr>
                                        <S.Th>프로젝트</S.Th>
                                        <S.Td>
                                            <S.Ul>
                                                <S.Li>개인 프로젝트</S.Li>
                                            </S.Ul>
                                        </S.Td>
                                    </S.Tr>
                                    <S.Tr>
                                        <S.Th>프로젝트 결과물</S.Th>
                                        <S.Td>
                                            <S.Ul>
                                                <S.Li>https://heartfelt-dragon-0086bb.netlify.app</S.Li>
                                                <S.Li>https://kdt-gitlab.elice.io/sw_track/class_05/web_2_project/team08/tastytogther-fe</S.Li>
                                            </S.Ul>
                                        </S.Td>
                                    </S.Tr>
                                    <S.Tr>
                                        <S.Th>활용한 기술스택</S.Th>
                                        <S.Td>
                                            <S.StackUl>
                                                <S.StackLi>React</S.StackLi>
                                                <S.StackLi>StyledComponent</S.StackLi>
                                                <S.StackLi>Figma</S.StackLi>
                                                <S.StackLi>Netlify</S.StackLi>
                                            </S.StackUl>
                                        </S.Td>
                                    </S.Tr>
                                    <S.Tr>
                                        <S.Th>프론트엔드 구현기능</S.Th>
                                        <S.Td>
                                            <S.Ul>
                                                <S.Li>SPA로 웹사이트를 구성하였고, 탭기능을 이용하여 화면전환이 되도록 하였습니다.</S.Li>
                                                <S.Li>Graph를 이용해 기술에 대한 이해도를 나타냈으며, 프로젝트 결과물은 Link태그를 이용하여 해당 사이트로 이동할 수 있도록 설계하였습니다.</S.Li>
                                                <S.Li>Netlify 클라우드 플랫폼을 이용하여 포트폴리오 웹사이트를 배포하였습니다.</S.Li>
                                            </S.Ul>
                                        </S.Td>
                                    </S.Tr>
                                </S.Thead>
                            </S.Table>
                        </S.ResumeDetailText>
                    </S.ResumeDetail>
                </S.ResumeDetailContent>
            </S.ResumePage>
            <S.ResumePage>
                <S.ResumeDetailContent>
                    <S.ResumeDetailHead>Skill</S.ResumeDetailHead>
                    <S.ResumeDetail>
                        <S.ResumeDetailText>
                            <S.StackUl>
                                <S.SkillLi>JavaScript</S.SkillLi>
                                <S.SkillLi>TypeScript</S.SkillLi>
                                <S.SkillLi>React</S.SkillLi>
                                <S.SkillLi>HTML</S.SkillLi>
                                <S.SkillLi>CSS</S.SkillLi>
                                <S.SkillLi>StyledComponent</S.SkillLi>
                                <S.SkillLi>Figma</S.SkillLi>
                                <S.SkillLi>Netlify</S.SkillLi>
                                <S.SkillLi>GitHub</S.SkillLi>
                                <S.SkillLi>GitLab</S.SkillLi>
                                <S.SkillLi>Notion</S.SkillLi>
                            </S.StackUl>
                        </S.ResumeDetailText>
                    </S.ResumeDetail>
                </S.ResumeDetailContent>
            </S.ResumePage>
        </S.ResumeComponent>
    )
}

export default ResumeComponent;