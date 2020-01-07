import React, { Component } from 'react';
import styled from 'styled-components'
import Header from '../Components/Header';
import Footer from '../Components/Footer';
 
class Layout extends Component {
    render() {
        return (
            <Wrapper>
               <Header/>
                {this.props.children}
                <Footer/>
                <h1>Copyright </h1>
            </Wrapper>
        );
    }
}

export default Layout;

const Wrapper=styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    `
