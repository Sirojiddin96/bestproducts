import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import styled from 'styled-components'


class Header extends Component {
    state={
        dropdown:false
    }
    state={
        isOpen:false
    }

    render() {
        return (
            <Wrapper>
                <div className="left">
                    <button className="top">
                        <p className="blacktext">서울,경기,인천 지역 <span className="redtext">새벽배송</span></p>
                    </button>
                    <button className="bottom" >
                     <img className="bar"src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/440px-Hamburger_icon.svg.png"></img>
                     <button className="text" onClick={()=>this.setState({isOpen:!this.state.isOpen})}>
                         전체 카테거리
                        {/* // <div 
                        //  style={{height:this.state.isOpen ? 270:0}} 
                        //     className="dropdown">
                        //         <button className="dropdown-item">공지사항</button>
                        //         <button className="dropdown-item">고객센터</button>
                        //         <button className="dropdown-item">이벤트</button>
                        //         <button className="dropdown-item">공지사항</button>
                        //         <button className="dropdown-item">고객센터</button>
                        //         <button className="dropdown-item">이벤트</button>
                        //         <button className="dropdown-item">공지사항</button>
                        //         <button className="dropdown-item">고객센터</button>
                        //         <button className="dropdown-item">이벤트</button>
                        //         </div> */}
                         </button>
                    </button>
                </div>
                <Link to="/"><img className="center"
                src={require("../assets/logo.png")}></img></Link>
                <div className="right">
                    <div className="top">
                            <Link className="item" to="/Login">로그인</Link>
                            <Link className="item" to="/Register">회원가입</Link>
                            <button className="item" onClick={()=>this.setState({dropdown:!this.state.dropdown})}>
                                고객센터
                                 {/* toggle Function */}
                                <div 
                                    style={{height:this.state.dropdown ? 90:0}} 
                                     className="dropdown">
                                    <button className="dropdown-item">공지사항</button>
                                    <button className="dropdown-item">고객센터</button>
                                    <button className="dropdown-item">이벤트</button>
                                    </div>
                                </button>
                            
                    </div>
                    <div className="bottom">
                        <input className="search_input" type="text" placeholder="input your text"/>
                        <img
                            className="search_icon"
                            src={"http://simpleicon.com/wp-content/uploads/active-search.png"}
                        />
                    </div>
                </div>
            </Wrapper>
        );
    }
}

export default Header;

const Wrapper=styled.div`
    display:flex;
    align-items:center;
    flex-direction:row;
    justify-content:space-around;
    width:100%;
    height:120px;
    border-bottom:1px solid gray;
    .left{
        display:flex;
        min-width:100px;
        height:100%;
        justify-content:space-around;
        flex-direction:column;
        .top{
            min-width:100%;
            height:20px;
            border:1px solid gray;
            display:flex;
            justify-content:center;
            align-items:center;
            flex-direction:row;
            border-radius:12.5px;
            border:1px solid gray;
            background:none;
            .blacktext{
                margin:0;
                font-size: 10px;
                font-weight: 400;
                text-align: center;
                line-height: 1;
                letter-spacing: normal;
                color: #4a4a4a;
                
            }
            .redtext{
                margin:0;
                font-size: 10px;
                font-weight: 400;
                text-align: center;
                line-height: 1;
                letter-spacing: normal;
                color: #da4d56;
            }
            .icon{
                width:5px;
                height:8px;
            }

        }
        .bottom{
            width:200px;
            display:flex;
            align-items:center;
            justify-content:space-between;
            outline:none;
            border:none;
            background:none;
            .bar{
                width:24px;
                height:18px;
            
            }
            .text{
                width:100%;
                border:none;
                outline:none;
                display:flex;
                align-items:center;
                justify-content:space-between;
                position: relative;
                background:none;
                text-decoration:none;
                color:black;
                cursor:pointer-events;
                .dropdown{
                    position:absolute;
                    width:100%;
                    top:20px;
                    background-color:white;
                    display:flex;
                    flex-direction:column;
                    overflow:hidden;
                    /* transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
                    -webkit-box-shadow: 3px 4px 5px -4px rgba(0,0,0,0.75);
                    -moz-box-shadow: 3px 4px 5px -4px rgba(0,0,0,0.75);
                    box-shadow: 3px 4px 5px -4px rgba(0,0,0,0.75); */
                    .dropdown-item{
                        height:30px;
                        width:100%;
                        outline:none;
                        
                        border-right:none;
                        border-left:none;
                        border-top:none;
                        align-items:center;
                        display:flex;
                        justify-content:center;

                    }
                }
            }
        }
    }
    .center{
        display:flex;
        justify-content:center;
        align-items:center;
    }
    .right{
        display:flex;
        min-width:200px;
        height:100%;
        justify-content:space-around;
        flex-direction:column;
        
        .top{
            width:100%;
            display:flex;
            flex-direction:row;
            align-items:center;
            justify-content:space-around;
            .item{
                border:none;
                outline:none;
                display:flex;
                align-items:center;
                justify-content:space-between;
                position: relative;
                background:none;
                text-decoration:none;
                color:black;
                
                cursor:pointer-events;
                .dropdown{
                    position:absolute;
                    width:100%;
                    top:20px;
                    background-color:white;
                    display:flex;
                    flex-direction:column;
                    overflow:hidden;
                    transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
                    -webkit-box-shadow: 3px 4px 5px -4px rgba(0,0,0,0.75);
                    -moz-box-shadow: 3px 4px 5px -4px rgba(0,0,0,0.75);
                    box-shadow: 3px 4px 5px -4px rgba(0,0,0,0.75);
                    .dropdown-item{
                        height:30px;
                        width:100%;
                        outline:none;
                        border-bottom:0.5px solid gray;
                        border-right:none;
                        border-left:none;
                        border-top:none;
                        align-items:center;
                        display:flex;
                        justify-content:center;

                    }
                }
            }
        }
        .bottom{
            width:100%;
            display:flex;
            flex-direction:row;
            .search_input{
            width:90%;
            outline:none;
            border-bottom:0.5px solid gray;
            border-right:none;
            border-left:none;
            border-top:none;
            background:none;
            padding:5px;
            

            }
            .search_icon{
            width:20px;
            height:20px;
            margin-left:10px;
            cursor:pointer;

            }
        }
    }
`