import React, { Component } from 'react';
import styled from 'styled-components'

class Banner extends Component {
    state={
        indeOnFocus:0
        
    }
    
    componentDidMount(){
        setInterval(this.ToNext,5000);
    }

    ToNext=()=>{
        const {banners}=this.props;
        this.setState({indeOnFocus:(this.state.indeOnFocus+1)%banners.length})    
    }
    ToPrevious=()=>{
        const {banners}=this.props;
        this.setState({indeOnFocus:(this.state.indeOnFocus-1)%banners.length<0?banners.length
        :(this.state.indeOnFocus-1)%banners.length})
    }
    render() {
        const {banners}=this.props;
        
        return (
            <Wrapper>
                <ImageWrapper style={{
                        marginLeft:-(this.state.indeOnFocus*window.innerWidth)
                                 }}
                                 >
                
               {banners.map((banner,index)=>{
                   return <Image src={banner.image} 
                                 key={index}/>
                                 
               })} 
               </ImageWrapper>
               <ButtonWrapper>
               <ControlButton onClick={this.ToPrevious}>
                   <ControlButtonIcon src="https://cdn0.iconfinder.com/data/icons/website-kit-2/512/icon_402-512.png"
                   alt="Logo">
                       
                   </ControlButtonIcon>
               </ControlButton>
               <ControlButton onClick={this.ToNext}>
               <ControlButtonIconRotated  
               src="https://cdn0.iconfinder.com/data/icons/website-kit-2/512/icon_402-512.png"
               alt="mypic"/>
               </ControlButton>
               </ButtonWrapper>
                <BannerTitle>
                   <Title>
                       {banners[this.state.indeOnFocus].title}
                   </Title>
                   
               </BannerTitle>
               <DotsWrapper>
                   {banners.map((banner,index)=>{
                       if(index===this.state.indeOnFocus){
                        return  <HighlightedDot onClick={()=>this.setState({indeOnFocus:index})}/>
                       }
                       else{
                        return <SimpleDot onClick={()=>this.setState({indeOnFocus:index})}/>
                       }
                   })}
               </DotsWrapper>
            </Wrapper>
        );
    }
}

export default Banner;

const Wrapper=styled.div`
    width:100%;
    height:700px;
    display:flex;
    flex-direction:row;
    position: relative;
    overflow:hidden;
     
`
const DotsWrapper=styled.div`
    width:100%;
    align-items:center;
    position: absolute;
    justify-content:center;
    display:flex;
    flex-direction:row;
    bottom:30px;
`
const HighlightedDot=styled.button`
    width:15px;
    height:15px;
    border-radius:50%;
    background-color:red;
    margin-left:5px;
`
const SimpleDot=styled.button`
    width:15px;
    height:15px;
    border-radius:50%;
    background-color:gray;
    margin-left:5px;
    `
const ImageWrapper=styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-direction:row;
    transition:1s cubic-bezier(0.075, 0.82, 0.165, 1);
`
const Image=styled.img`
    width:100%;
    height:100%;
    transition:1s cubic-bezier(0.075, 0.82, 0.165, 1);
`
const ButtonWrapper=styled.div`
    height:100%;
    width:100%;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    position:absolute;
    background-color:transparent;
`
const ControlButton=styled.button`
    width:50px;
    height:100px;
    background-color:transparent;
    border:none;
    outline:none;
`
const ControlButtonIcon=styled.img`
    width:100%;
    height:100%;
`
const ControlButtonIconRotated=styled.img`
    width:100%;
    height:100%;
    transform:rotate(0.5turn)
`
const BannerTitle=styled.div`
    width:50%;
    align-items:center;
    display:flex;
    justify-content:center;
    flex-direction:row;
    position:absolute;
    bottom:100px;
    left:70px;
`
const Title=styled.div`
    font-size:50px;
    font-family: 'Times New Roman', Times, serif;
    color:white;
`
