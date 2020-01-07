import React, { Component } from 'react';
import Layout from '../../Containers/Layout';
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import * as EmailValidator from "email-validator";

class Login extends Component {
    state={
        email:'',
        emailError: null,
        password:'',
        passwordError: null
    }
    handleChange=event=>{
        this.setState({
            [event.target.name]:event.target.value, emailError: null, passwordError: null
        })
    }
    handSubmit=(event)=>{
        event.preventDefault();
        if(this.state.email==''){
            this.setState({emailError: 'Email is required!'})
            return 
        }
        if(this.state.password==''){
            this.setState({passwordError: 'Password is required!'})
            return
        }
        if(!EmailValidator.validate(this.state.email)){
            this.setState({emailError: 'Email is invalid!'})
            return 
        }
        // if(EmailValidator.validate(this.state.passwordError<5)){
        //     this.setState({passwordError:"Password is not valid"})
        //     return  
        // }
        
        console.log("Submitting");
        console.log(this.state);
    }
    handleBlur=()=>{

    }
    validate=()=>{
       
    }
    
    render() {

        return (
            <Layout>
                <FormWrapper onSubmit={this.handSubmit}>
                <h1>오늘의꽃 로그인</h1>
                    <FormInput
                    name="email" 
                    type="text" 
                    placeholder="Enter your Email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                    />
                    {this.state.emailError?<FormSpan>{this.state.emailError}</FormSpan>:null}
                    <FormInput 
                    name="password"
                    type="password" 
                    placeholder="Enter your Password"
                    value={this.state.password}
                    onChange={this.handleChange} 
                    onBlur={this.handleBlur}/>
                    {this.state.passwordError?<FormSpan>{this.state.passwordError}</FormSpan>:null}
                    <FormInputLabel>
                        <FormLabelInput  type="checkbox" />
                        <Formlabel>Terms of privacy</Formlabel>
                    </FormInputLabel>
                    <FormButton type="submit">Login</FormButton>
                    <FormParagraph>
                        <FormText>아직 계정이 없으신가요?</FormText>
                        <FormText><Link style={{textDecoration:'none',color:'salmon'}} to="/Register">회원가입</Link></FormText>
                    </FormParagraph>
                    <FormLine/>
                <FormLink>
                    <Link style={{textDecoration:'none'}}><FormTextLink>이메일 찾기</FormTextLink></Link> 
                    <Link style={{textDecoration:'none'}}><FormTextLink>비밀번호 찾기</FormTextLink></Link> 
                </FormLink>
                </FormWrapper>
            </Layout>
        );
    }
}

export default Login;
 
const FormWrapper=styled.form`
    width:400px;
    display:flex;
    flex-direction:column;
    border:none;
    outline:none;
    align-items:center;
    justify-content:center;
`
const FormInputLabel=styled.div`
    width:100%;
    height:50px;
    display:flex;
    flex-direction:row;
    margin-top:10px;
`
const FormLabelInput=styled.input`
    width:20px;
    height:20px;
    align-items:left;
    margin-left:0;
`
const Formlabel=styled.label`
    font-size:large;
    align-items:left;
    justify-content:left;
    margin-top:5px;
    margin-left:5px;
    `
const FormInput=styled.input`
    width:100%;
    height:50px;
    margin-top:10px;
    justify-content:center;
    font-size:large;
    border-radius:5px;
    outline:none;
    border:1px solid gray;
    &:active,
    &:focus {
    border-color: salmon;
  }
`
const FormButton=styled.button`
    width:100%;
    height:50px;
    justify-content:center;
    border-radius:5px;
    border:1px solid gray;
    font-size:large;
    background-color:salmon;
    color:white;
    cursor: pointer;
`
const FormParagraph=styled.div`
    width:100%;
    height:50px;
    display:flex;
    flex-direction:row;
    margin-top:10px;
    justify-content:space-around;
     
`
const FormText=styled.p`
    font-size:20px;
    color:black;
`
const FormLine=styled.hr`
    width:100%;

`
const FormLink=styled.div`
    width:100%;
    height:50px;
    display:flex;
    flex-direction:row;
    margin-top:10px;
    justify-content:space-around;
    `
const FormTextLink=styled.p`
    color:black;
`
const FormSpan=styled.span`
    color:red;
`
