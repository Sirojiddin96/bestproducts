import React, { Component } from 'react';
import styled from 'styled-components'
import Layout from '../../Containers/Layout';
import {Link} from 'react-router-dom'


class Register  extends Component {
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
                     <h1>회원유형을 선택해주세요</h1> 
                 <RegisterHeader>
                    <RegisterApplyToJoin>
                        <ApplyImage src="http://okkot.com/images/common/img-member-buyer.png"/>
                        <h1>소매사장님(구매회원)</h1>
                        <p>꽃집을 운영중이신 사장님</p>
                        <RegisterButton><Link to="/Agreement">가입신청하기</Link></RegisterButton>
                    </RegisterApplyToJoin>
                    <RegisterApplyToEntry>
                        <ApplyImage src="http://okkot.com/images/common/img-member-seller.png"/>
                        <h1>도매사장님(판매회원)</h1>
                        <p style={{fontSize:'16px'}}>화훼농장을 운영중이시거나 도매점을 운영중이신 사장님</p>
                        <RegisterButton>입점신청하기</RegisterButton>
                    </RegisterApplyToEntry>
                         
                 </RegisterHeader>
               </Wrapper>            
            </Layout>
        );
    }
}

export default Register;
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
const RegisterHeader=styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-around;
    width:1200px;
    height:500px;
`
const RegisterApplyToJoin=styled.div`
    width:450px;
    height:450px;
    display:flex;
    border:1px solid gray;
    flex-direction:column;
    align-items:center;
    justify-content:space-around;
    `
const RegisterApplyToEntry=styled.div`
    width:450px;
    height:450px;
    display:flex;
    flex-direction:column;
    border:1px solid gray;
    align-items:center;
    justify-content:space-around;

`
const ApplyImage=styled.img`
    width:200px;
    height:200px;
    border-radius:50%;
    align-items:center; 
`
const RegisterButton=styled.button`
    width:40%;
    height:60px;
    background-color:black;
    color:white;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-around;
    border:1px solid gray;
    border-color:none;
    border-radius:5px;
    font-weight:bold;
    font-size:x-large;
    outline:none;
    cursor:pointer;


`