import React from 'react';
import * as S from './style/ProjectComponent.style';

const ProjectComponent = () => {

    return(
        <S.ProjectComponent>
            <S.Project1>
                <S.ProjectHead>
                    <S.ProjectTitle>Project1</S.ProjectTitle>
                </S.ProjectHead>
                <S.ProjectContent>
                    <S.LinkDiv>
                        <S.None></S.None>
                        <br />
                        <br />
                    </S.LinkDiv>
                    <S.ProjectExplanation>
                        <S.ProjectExplanationDiv>
                            <S.ProjectName><span class="material-symbols-outlined">toys_fan</span> 프로젝트명</S.ProjectName>
                            <S.ProjectNameDetail>- 다2ating</S.ProjectNameDetail>
                        </S.ProjectExplanationDiv>
                        <S.ProjectExplanationDiv>
                            <S.ProjectName><span class="material-symbols-outlined">toys_fan</span> 프로젝트소개</S.ProjectName>
                            <S.ProjectNameDetail>- 다양한 다이어트 식품을 카테고리 별로 찾아보며 편리하게 구매할 수 있습니다.</S.ProjectNameDetail>
                        </S.ProjectExplanationDiv>
                        <S.ProjectExplanationDiv>
                            <S.ProjectName><span class="material-symbols-outlined">toys_fan</span> 팀원</S.ProjectName>
                            <S.ProjectNameDetail>- 5명</S.ProjectNameDetail>
                        </S.ProjectExplanationDiv>
                        <S.ProjectExplanationDiv>
                            <S.ProjectName><span class="material-symbols-outlined">toys_fan</span> 담당 역할</S.ProjectName>
                            <S.ProjectNameDetail>- 프론트엔드 개발 담당</S.ProjectNameDetail>
                        </S.ProjectExplanationDiv>
                        <S.ProjectName><span class="material-symbols-outlined">toys_fan</span> 구현 기능</S.ProjectName>
                        <S.ProjectNameDetail>1. 메인페이지: 쇼핑몰 내의 best 메뉴와 new메뉴 4가지, 진행중인 이벤트를 보여주며 상세페이지로 이동</S.ProjectNameDetail>
                        <S.ProjectNameDetail>2. 마이페이지: 회원정보조회, 변경, 탈퇴기능과 주문정보/배송조회 확인</S.ProjectNameDetail>
                        <S.ProjectNameDetail>3. 헤더: 카테고리, 검색기능, 회원가입, 로그인, 장바구니, 메인페이지로 이동</S.ProjectNameDetail>
                        <S.ProjectNameDetail>4. 푸터: 회사 정보 등록</S.ProjectNameDetail>
                        <S.ProjectNameDetail>5. 사이드: 장바구니, 배송조회, 상단-하단이동</S.ProjectNameDetail>
                    </S.ProjectExplanation>
                </S.ProjectContent>
            </S.Project1>
            <S.Project1>
                <S.ProjectHead>
                    <S.ProjectDetailTitle><span class="material-symbols-outlined">details</span> 구현기능 상세보기</S.ProjectDetailTitle>
                </S.ProjectHead>
                <S.ProjectContent>
                    <S.ImgDiv>
                        <S.Card>
                            <S.CardInner>
                                <S.ProjectImg src="/imgs/1-main.png" alt="" />
                                <S.Back>
                                    <S.BackTitle>메인페이지</S.BackTitle>
                                    <S.BackContent>
                                    메인에서는 구매수에 따른 Best메뉴, 등록일자에 따른 New메뉴를 보여줍니다.<br />카테고리기능을 이용할 수 있습니다.<br />헤더에는 로그인과 마이페이지로 연결이 되어있으며 회원여부에 따라 마이페이지 접근 여부도 정해져있습니다.
                                    </S.BackContent>
                                </S.Back>
                            </S.CardInner>
                        </S.Card>
                        <S.Card>
                            <S.CardInner>
                                <S.ProjectImg src="/imgs/1-search1.png" alt="" />
                                <S.Back>
                                    <S.BackTitle>검색 기능</S.BackTitle>
                                    <S.BackContent>
                                    헤더에는 검색기능이 있습니다. 검색어와 메뉴이름이 한 글자 이상 같은 경우 해당되는 상품들을 반환합니다.
                                    </S.BackContent>
                                </S.Back>
                            </S.CardInner>
                        </S.Card>
                        <S.Card>
                            <S.CardInner>
                                <S.ProjectImg src="/imgs/1-search2.png" alt="" />
                                <S.Back>
                                    <S.BackTitle>검색페이지</S.BackTitle>
                                    <S.BackContent>
                                    검색어를 입력해 반환되는 아이템들을 한 줄에 4개씩 모두 반환해줍니다.
                                    </S.BackContent>
                                </S.Back>
                            </S.CardInner>
                        </S.Card>
                        <S.Card>
                            <S.CardInner>
                                <S.ProjectImg src="/imgs/1-side.png" alt="" />
                                <S.Back>
                                    <S.BackTitle>사이드바</S.BackTitle>
                                    <S.BackContent>
                                    고정된 사이드바를 이용해 쇼핑 중 바로 배송조회, 장바구니이용이 가능하며, 화면 상단, 하단으로 바로 이동가능합니다.
                                    </S.BackContent>
                                </S.Back>                            
                            </S.CardInner>
                        </S.Card>
                    </S.ImgDiv>
                    <S.ImgDiv>
                        <S.Card>
                            <S.CardInner>
                                <S.ProjectImg src="/imgs/1-mypage1.png" alt="" />
                                <S.Back>
                                    <S.BackTitle>회원정보조회</S.BackTitle>
                                    <S.BackContent>
                                    마이페이지에는 로그인 후에만 접근 가능하며, 나의 정보를 조회할 수 있습니다.
                                    </S.BackContent>
                                </S.Back>                            
                            </S.CardInner>
                        </S.Card>
                        <S.Card>
                            <S.CardInner>
                                <S.ProjectImg src="/imgs/1-mypage2.png" alt="" />
                                <S.Back>
                                    <S.BackTitle>회원정보변경</S.BackTitle>
                                    <S.BackContent>
                                    이름, 휴대폰번호, 주소, 비밀번호를 변경가능합니다.<br />주소는 다음 post를 이용하여 주소를 검색할 수 있습니다.<br />비밀번호 양식에 따라 비밀번호를 변경해야합니다.
                                    </S.BackContent>
                                </S.Back>                            
                            </S.CardInner>
                        </S.Card>
                        <S.Card>
                            <S.CardInner>
                                <S.ProjectImg src="/imgs/1-mypage3.png" alt="" />
                                <S.Back>
                                    <S.BackTitle>회원탈퇴</S.BackTitle>
                                    <S.BackContent>
                                    회원탈퇴 시 회원정보가 삭제됩니다.
                                    </S.BackContent>
                                </S.Back>                            
                            </S.CardInner>
                        </S.Card>
                        <S.Card>
                            <S.CardInner>
                                <S.ProjectImg src="/imgs/1-mypage4.png" alt="" />
                                <S.Back>
                                    <S.BackTitle>주문목록/배송조회</S.BackTitle>
                                    <S.BackContent>
                                    내가 주문한 상품의 목록 및 배송상태를 조회할 수 있습니다.
                                    </S.BackContent>
                                </S.Back>                            
                            </S.CardInner>
                        </S.Card>
                    </S.ImgDiv>
                </S.ProjectContent>
            </S.Project1>
            <S.Project1><S.Project1Img src="/imgs/1-persona.jpg" alt="" /></S.Project1>
            <S.Project1><S.Project1Img src="/imgs/1-stack.jpg" alt="" /></S.Project1>
            <S.Project1><S.Project1Img src="/imgs/1-folder1.jpg" alt="" /></S.Project1>
            <S.Project1><S.Project1Img src="/imgs/1-folder2.jpg" alt="" /></S.Project1>
            <S.Project1><S.Project1Img src="/imgs/1-manage1.jpg" alt="" /></S.Project1>
            <S.Project1><S.Project1Img src="/imgs/1-manage2.jpg" alt="" /></S.Project1>
            <S.Project1><S.Project1Img src="/imgs/1-member.jpg" alt="" /></S.Project1>
            <S.Project1><S.Project1Img src="/imgs/1-nonmember.jpg" alt="" /></S.Project1>
            <S.Project2>
                <S.ProjectHead>
                    <S.ProjectTitle>Project2</S.ProjectTitle>
                </S.ProjectHead>
                <S.ProjectContent>
                    <S.LinkDiv>
                        <S.None></S.None>
                        <br />
                        <br />
                    </S.LinkDiv>
                    <S.ProjectExplanation>
                        <S.ProjectExplanationDiv>
                            <S.ProjectName><span class="material-symbols-outlined">toys_fan</span>  프로젝트명</S.ProjectName>
                            <S.ProjectNameDetail>- TastyTogether</S.ProjectNameDetail>
                        </S.ProjectExplanationDiv>
                        <S.ProjectExplanationDiv>
                            <S.ProjectName><span class="material-symbols-outlined">toys_fan</span> 프로젝트소개</S.ProjectName>
                            <S.ProjectNameDetail>- 맛집에 진심인 사람들을 위해 나만의 맛집을 공유하거나 다른 사람과 함께 맛집 방문을 약속할 수 있습니다.</S.ProjectNameDetail>
                        </S.ProjectExplanationDiv>
                        <S.ProjectExplanationDiv>
                            <S.ProjectName><span class="material-symbols-outlined">toys_fan</span> 팀원</S.ProjectName>
                            <S.ProjectNameDetail>- 6명</S.ProjectNameDetail>
                        </S.ProjectExplanationDiv>
                        <S.ProjectExplanationDiv>
                            <S.ProjectName><span class="material-symbols-outlined">toys_fan</span> 담당 역할</S.ProjectName>
                            <S.ProjectNameDetail>- 프론트엔드 개발 담당</S.ProjectNameDetail>
                        </S.ProjectExplanationDiv>
                        <S.ProjectName><span class="material-symbols-outlined">toys_fan</span> 구현 기능</S.ProjectName>
                        <S.ProjectNameDetail>1. 맛집등록페이지: 회원인 경우 새로운 맛집을 찾아 상세정보를 기입하면 맛집등록이 가능합니다.</S.ProjectNameDetail>
                        <S.ProjectNameDetail>2. 검색페이지: 메인페이지 및 헤더의 검색기능과 연결하여 검색키워드에 대한 결과로 맛집위치 및 맛집정보를 볼 수 있습니다.</S.ProjectNameDetail><br /><br />
                    </S.ProjectExplanation>
                </S.ProjectContent>
            </S.Project2>
            <S.Project2>
                <S.ProjectHead>
                    <S.ProjectDetailTitle><span class="material-symbols-outlined">details</span> 구현기능 상세보기</S.ProjectDetailTitle>
                </S.ProjectHead>
                <S.ProjectContent>
                    <S.ImgDiv>
                        <S.Card>
                            <S.CardInner>
                            <S.ProjectImg src="/imgs/2-storeregister.png" alt="" />
                                <S.Back>
                                    <S.BackTitle>맛집등록페이지</S.BackTitle>
                                    <S.BackContent>
                                    고객이 직접 자신이 가 본 맛집을 등록할 수 있는 페이지입니다.
                                    <br />가게정보를 자세하게 작성하기 위해, 주소검색기능, 등록확인기능, 상세정보 입력, 이미지등록기능을 이용해야합니다.
                                    </S.BackContent>
                                </S.Back>
                            </S.CardInner>
                        </S.Card>
                        <S.Card>
                            <S.CardInner>
                            <S.ProjectImg src="/imgs/2-storeregister2.png" alt="" />
                                <S.Back>
                                    <S.BackTitle>주소검색 및 지도기능</S.BackTitle>
                                    <S.BackContent>
                                    다음 post를 이용하여 주소검색기능을 이용할 수 있고, 검색한 주소를 위도, 경도로 변환하여 카카오맵API를 이용해 지도에 마커를 찍어 확인할 수 있습니다.
                                    주소와 변환된 위도, 경도는 맛집정보에 등록됩니다.
                                    검색한 주소가 웹페이지에 등록된 주소인지 확인할 수 있습니다.
                                    </S.BackContent>
                                </S.Back>
                            </S.CardInner>
                        </S.Card>
                        <S.Card>
                            <S.CardInner>
                            <S.ProjectImg src="/imgs/2-storeregister3.png" alt="" />
                                <S.Back>
                                    <S.BackTitle>업종선택</S.BackTitle>
                                    <S.BackContent>
                                    모달페이지를 이용해 업종을 선택하면 정보입력칸에 선택한 업종이 입력이 됩니다.
                                    </S.BackContent>
                                </S.Back>
                            </S.CardInner>
                        </S.Card>
                        <S.Card>
                            <S.CardInner>
                            <S.ProjectImg src="/imgs/2-storeregister4.png" alt="" />
                                <S.Back>
                                    <S.BackTitle>이미지업로드</S.BackTitle>
                                    <S.BackContent>
                                    이미지파일을 한 번에 여러 개를 추가할 수 있고, 최대 8개까지 추가할 수 있도록 지정하였습니다. 
                                    추가된 이미지는 삭제가능합니다.
                                    </S.BackContent>
                                </S.Back>                            
                            </S.CardInner>
                        </S.Card>
                    </S.ImgDiv>
                    <S.ImgDiv>
                        <S.Card>
                            <S.CardInner>
                            <S.ProjectImg src="/imgs/2-main.png" alt="" />
                                <S.Back>
                                    <S.BackTitle>메인페이지</S.BackTitle>
                                    <S.BackContent>
                                    이 웹페이지의 주요 기능은 맛집검색과 소셜네트워크(혼밥메이트찾기)입니다.
                                    검색기능을 통해 키워드로 맛집을 찾을 수 있습니다.
                                    회원인 경우 맛집등록페이지를 이용할 수 있습니다.
                                    </S.BackContent>
                                </S.Back>                            
                            </S.CardInner>
                        </S.Card>
                        <S.Card>
                            <S.CardInner>
                            <S.ProjectImg src="/imgs/2-search.png" alt="" />
                                <S.Back>
                                    <S.BackTitle>검색페이지</S.BackTitle>
                                    <S.BackContent>
                                    검색키워드가 포함된 맛집들을 보여주는 페이지입니다.
                                    정렬기능, 지도기능, 페이지네이션기능이 있습니다. 
                                    </S.BackContent>
                                </S.Back>                            
                            </S.CardInner>
                        </S.Card>
                        <S.Card>
                            <S.CardInner>
                            <S.ProjectImg src="/imgs/2-search2.png" alt="" />
                                <S.Back>
                                    <S.BackTitle>지도기능/정렬기능</S.BackTitle>
                                    <S.BackContent>
                                    지도 API를 이용하여 모든 검색결과 중 한 페이지 내의 맛집 위치를 지도에 마커로 표시합니다.
                                    각 맛집정보에 저장된 평점, 리뷰, 찜수를 확인하여 내림차순으로 정렬해줍니다.
                                    </S.BackContent>
                                </S.Back>                            
                            </S.CardInner>
                        </S.Card>
                        <S.Card>
                            <S.CardInner>
                            <S.ProjectImg src="/imgs/2-search3.png" alt="" />
                                <S.Back>
                                    <S.BackTitle>검색결과/페이지네이션</S.BackTitle>
                                    <S.BackContent>
                                    검색키워드가 맛집정보의 지역, 가게이름, 음식이름에서 포함여부를 검사하여 검색결과를 출력하고,
                                    한 페이지당 5개이하의 맛집정보를 출력합니다.
                                    </S.BackContent>
                                </S.Back>                            
                            </S.CardInner>
                        </S.Card>
                    </S.ImgDiv>
                </S.ProjectContent>
            </S.Project2>
            <S.Project2>
            <S.Project2><S.Project2Img src="/imgs/2-1.png" alt="" /></S.Project2>
            <S.Project2><S.Project2Img src="/imgs/2-2.png" alt="" /></S.Project2>
            <S.Project2><S.Project2Img src="/imgs/2-3.png" alt="" /></S.Project2>
            <S.Project2><S.Project2Img src="/imgs/2-4.png" alt="" /></S.Project2>
            <S.Project2><S.Project2Img src="/imgs/2-5.png" alt="" /></S.Project2>
            <S.Project2><S.Project2Img src="/imgs/2-6.png" alt="" /></S.Project2>
            <S.Project2><S.Project2Img src="/imgs/2-7.png" alt="" /></S.Project2>
            <S.Project2><S.Project2Img src="/imgs/2-8.png" alt="" /></S.Project2>
            <S.Project2><S.Project2Img src="/imgs/2-9.png" alt="" /></S.Project2>
            <S.Project2><S.Project2Img src="/imgs/2-10.png" alt="" /></S.Project2>
            <S.Project2><S.Project2Img src="/imgs/2-11.png" alt="" /></S.Project2>
            <S.Project2><S.Project2Img src="/imgs/2-12.png" alt="" /></S.Project2>
            <S.Project2><S.Project2Img src="/imgs/2-13.png" alt="" /></S.Project2>
            <S.Project2><S.Project2Img src="/imgs/2-14.png" alt="" /></S.Project2>
            <S.Project2><S.Project2Img src="/imgs/2-15.png" alt="" /></S.Project2>
            <S.Project2><S.Project2Img src="/imgs/2-16.png" alt="" /></S.Project2>
            </S.Project2>
        </S.ProjectComponent>
    )
}

export default ProjectComponent;