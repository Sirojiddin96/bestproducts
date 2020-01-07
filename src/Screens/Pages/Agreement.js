import React, { Component } from 'react';
import Layout from '../../Containers/Layout';
import styled from 'styled-components'
import {Link} from 'react-router-dom'

class Agreement extends Component {
    render() {
        return (
            <Layout>
                    <Wrapper>
              <ProcessLine>
              <h1>오늘의꽃 회원가입</h1>
                <ProccessNextDiv>
                    <ProcessLineNext>회원선택  
                        <ControlButtonIcon src="https://cdn0.iconfinder.com/data/icons/website-kit-2/512/icon_402-512.png" alt="Logo"/>
                    </ProcessLineNext>
                    <ProcessLineNext>약관동의
                        <ControlButtonIcon src="https://cdn0.iconfinder.com/data/icons/website-kit-2/512/icon_402-512.png" alt="Logo"/>
                    </ProcessLineNext>
                    <ProcessLineNext>정보입력
                        <ControlButtonIcon src="https://cdn0.iconfinder.com/data/icons/website-kit-2/512/icon_402-512.png" alt="Logo"/>
                    </ProcessLineNext>
                    <ProcessLineNext>가입완료</ProcessLineNext>
                </ProccessNextDiv>
                </ProcessLine> 
                <FormInputLabel>
                        <FormLabelInput  type="checkbox" />
                        <Formlabel><Link style={{textDecoration:'none', color:'black', fontSize:'20px'}}>모든 약관과 SMS/메일 수신에 동의합니다.</Link></Formlabel>
                </FormInputLabel>
                 
                <MainDiv>
                  <h2>회원가입 약관 (필수)</h2>
                  <div className="paragraph">
                    <header>회원가입 약관</header>
                      <p>① 오늘의꽃 은 화훼(꽃) 관련 소도매사업자 회원만이 이용하실 수 있는 도매사이트 이므로 소매사업자에 
                          한해 회원가입 승인이 진행되며, 취급품목 및 업태가 다른 경우 승인이 반려될 수 있습니다.</p>
                      <p>② 입력하신 사업자 정보 확인 후 회원가입 승인 절차가 
                          진행되며, 회원가입 신청 이후 일 이내(주말 및 공휴일 제외) 회원가입이 완료됩니다.</p>
                    <header>아이디/비밀번호 확인</header>
                     <p>② 비밀번호 분실 시, 로그인 화면에 아이디 입력 이후 비밀번호 찾기 
                         버튼을 클릭하시면 회원가입 시 입력하신 이메일로 비밀번호 변경 안내를 받으실 수 있습니다.</p>
                    <header>회원탈퇴 방법</header>
                     <p>회원 탈퇴를 원하시는 경우 고객센터로 회원 탈퇴를 요청하시면 즉시 탈퇴하실 수 있으며, 입력하신 
                         회원가입 정보는 오늘의꽃 개인정보처리방침에 따라 안전하게 파기됩니다.</p>
                    <header>고객센터 정보</header>
                    <p>Tel - 1899-5905 / 카카오톡 플러스친구 – 오늘의꽃/이메일 – cs@okkot.com</p>
                     <header>도매사장님 이용약관</header>
                     <header>제1장 총칙</header>
                     <header>제1조 (목적)</header>
                     <p>㈜ “오늘의꽃” (이하, ‘회사’)에 가입하신 도매 사장님께 감사드립니다. 본 약관은 회사가 제공하는 “오늘의꽃” 서비스 및 이를 지원하기 
                         위한 기타 서비스 (이하, ‘서비스’)에 대해 회사와 도매 사장님 사이의 권리와 의무를 규정하는 것을 목적으로 합니다. 본 약관은 도매 
                         사장님께서 서비스를 이용하시는 데 필요한 사항을 담고 있기 때문에 잠시 시간을 내시어 주의 깊게 살펴봐 주시기 바랍니다.</p>
                    
                    <p>- “오늘의꽃 서비스”라 함은 회사가 제공하는 “오늘의꽃 서비스”를 이용하는 및 온라인 서비스를 의미하며, 이를 지원하기 위해 
                        도·소매 사장님께서 “오늘의꽃” 서비스를 원활히 이용하시기 위해 회사가 제공하는 고객 센터 등 전반적인 지원 서비스를 의미합니다.</p>
                    <header>제2조 (용어의 정의)</header>
                    <p>① 본 약관에서 이용하는 용어의 정의는 다음과 같습니다.</p>
                    <p>가. ‘회원’이라 함은 회사가 제공하는 서비스에 회원 가입을 
                        한 분으로서, 계속적으로 회사가 제공하는 서비스를 이용할 수 있는 만 14세 이상의 개인이나 법인을 의미합니다.</p>
                    <p>- ‘도매 사장님’이라 함은 상품의 재판매 등 상행위만을 목적으로 한 
                        사업자인 분으로서, 회사가 제공하는 서비스를 통해 상품 등을 판매하는 회원을 의미합니다.</p>
                    <p>- ‘소매 사장님’이라 함은 서비스에 등록되어 있는 도매 상인의 상품들을 
                        구매하기 위해 회사가 제공하는 ‘주문 서비스’를 이용하는 회원을 의미합니다.</p>
                    <p>- ‘주문 서비스’라 함은 대량 주문 소매 사장님의 주문을 위해 회사가 별도로 
                        제공하는 사입, 화물 운송과 정산 및 주문 서비스 등 대량 주문 관련 업무 일체를 의미합니다.</p>
                    <p>- ‘도매 사장님’이라 함은 회사의 이용 약관에 동의하고, 
                        서비스가 제공하는 상품 등록 등의 서비스를 이용하는 사업자인 회원을 의미합니다.</p>
                    <p>② 본 조 제1항에 정의되지 않은 본 약관 상의 용어의 정의는 상법 등 관련법령과 일반적인 상거래 관행을 따릅니다.</p>
                    <header>제3조 (약관의 명시, 효력 및 변경)</header>
                    <p>① 본 약관은 회사가 제공하는 서비스에 게시하거나 기타의 방법으로 공지하고, 
                        본 약관에 동의한 도매 사장님 모두에게 그 효력이 발생합니다.</p>

                  </div>
                  <FormLabelInput  type="checkbox" />
                  <Formlabel><Link style={{textDecoration:'none', color:'black', fontSize:'20px'}}>약관에 동의합니다.</Link></Formlabel>

                  <h2>회원가입 약관 (필수)</h2>
                  <div className="paragraph">
                    <header>회원가입 약관</header>
                      <p>① 오늘의꽃 은 화훼(꽃) 관련 소도매사업자 회원만이 이용하실 수 있는 도매사이트 이므로 소매사업자에 
                          한해 회원가입 승인이 진행되며, 취급품목 및 업태가 다른 경우 승인이 반려될 수 있습니다.</p>
                      <p>② 입력하신 사업자 정보 확인 후 회원가입 승인 절차가 
                          진행되며, 회원가입 신청 이후 일 이내(주말 및 공휴일 제외) 회원가입이 완료됩니다.</p>
                    <header>아이디/비밀번호 확인</header>
                     <p>② 비밀번호 분실 시, 로그인 화면에 아이디 입력 이후 비밀번호 찾기 
                         버튼을 클릭하시면 회원가입 시 입력하신 이메일로 비밀번호 변경 안내를 받으실 수 있습니다.</p>
                    <header>회원탈퇴 방법</header>
                     <p>회원 탈퇴를 원하시는 경우 고객센터로 회원 탈퇴를 요청하시면 즉시 탈퇴하실 수 있으며, 입력하신 
                         회원가입 정보는 오늘의꽃 개인정보처리방침에 따라 안전하게 파기됩니다.</p>
                    <header>고객센터 정보</header>
                     
                  </div>
                  <FormLabelInput  type="checkbox" />
                  <Formlabel><Link style={{textDecoration:'none', color:'black', fontSize:'20px'}}>약관에 동의합니다.</Link></Formlabel>
                  ① 본 약관은 회사가 제공하는 서비스에 게시하거나 기타의 방법으로 공지하고, 본 약관에 동의한 도매 사장님 모두에게 그 효력이 발생합니다.
               </MainDiv>
               </Wrapper>
            </Layout>
        );
    }
}

export default Agreement;

const Wrapper=styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;
`
const ProcessLine=styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    flex-direction:row;
    width:70%;
    height:150px;
    border-bottom:1px solid gray;
`
const ProccessNextDiv=styled.div`
    width:30%;
    display:flex;
    align-items:center;
    flex-direction:row;
    font-size:x-large;
    color:black;
`
const ProcessLineNext=styled.p`
    width:150px;
    height:60px;
    display:flex;
    align-items:center;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
      
`
const ControlButtonIcon=styled.img`
    width:15%;
    transform:rotate(0.5turn)
`
const FormInputLabel=styled.div`
    width:40%;
    height:90px;
    display:flex;
    flex-direction:row;
    align-items:center;
    margin-top:10px;
`
const FormLabelInput=styled.input`
    width:20px;
    height:20px;
    align-items:left;
    margin-left:0;
`
const Formlabel=styled.h2`
    font-size:large;
    align-items:left;
    justify-content:left;
    margin-top:5px;
    margin-left:5px;
`
const MainDiv=styled.div`
    width:40%;
    height:400px;
    display:flex;
    flex-direction:column;
    align-items:left;
    .paragraph{
        width:100%;
        height:40%;
        position:relative;
        overflow-y:scroll;
        border-radius:5px;
        border:1px solid gray;

    }
`