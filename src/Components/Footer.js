import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

class Footer extends Component {
    render() {
        return (
            <Wrapper>
               <FooterImg src="http://okkot.com/images/common/logo-tf-vert.png"/> 
               <ServiceDiv>
                   <li  style={{listStyleType:'none'}}>오늘의꽃 고객센터</li>
                   <h1>1899-5905</h1>
                   <li  style={{listStyleType:'none'}}>평일 09:00 ~ 18:00</li>
                   <li  style={{listStyleType:'none'}}>점심 12:00 ~ 13:00</li>
                   <li  style={{listStyleType:'none'}}>토요일, 일요일 휴일</li>
               </ServiceDiv>
               <FooterInfo>
                   <h4>오늘의꽃 정보</h4>
                   <li  style={{listStyleType:'none'}}>사업자등록번호: 111-91-50021</li>
                   <li  style={{listStyleType:'none'}}>통신판매업신고 : 2019-인천연수구-1034</li>
                   <li  style={{listStyleType:'none'}}>대표전화 : 1899-5905</li>
                   <li  style={{listStyleType:'none'}}>FAX : 02-540-2203</li>
                   <li  style={{listStyleType:'none'}}>정보관리책임자 : 이대건</li>
                   <li  style={{listStyleType:'none'}}>이메일: cs@okkot.com</li>
                   <li  style={{listStyleType:'none'}}>대표이사 : 임재범</li>
                   <li  style={{listStyleType:'none'}}>주소 : 서울특별시 강남구 강남대로 128길 75 서원빌딩 3F</li>
               </FooterInfo>
               <FooterInfoLink>
                   <Link className="item">서비스 이용약관</Link>
                   <Link className="item">소매사장님 이용약관</Link>
                   <Link className="item">도매사장님 이용약관</Link>
                   <Link className="item">개인정보 취금방침</Link>
                   <Link className="item">전자상거래 표준약관</Link>
               </FooterInfoLink>
            </Wrapper>
        );
    }
}

export default Footer;
const Wrapper=styled.div`
    display:flex;
    align-items:center;
    flex-direction:row;
    justify-content:space-evenly;
    width:100%;
    height:250px;
    bottom:0;
    background-color:whitesmoke;
    border:  1px solid gray;
    
`
const FooterImg=styled.img`
    width:150px;
    height:200px;
`
const ServiceDiv=styled.div`
    width:200px;
    align-items:left;
    justify-content:space-around;
    display:flex;
    flex-direction:column;
    .item{
        list-style-type:none;
    }
    
`
const FooterInfo=styled.div`
    width:500px;
    align-items:left;
    justify-content:space-around;
    display:flex;
    flex-direction:column;
`
const FooterInfoLink=styled.div`
    width:300px;
    align-items:left;
    justify-content:space-around;
    display:flex;
    flex-direction:column;
    line-height: 1.8;
    .item{
        text-decoration:none;
        color:black;
        cursor:pointer;
    }

`