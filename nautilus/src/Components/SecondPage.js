import React, { Component } from 'react'
import Logo from '../assets/global/nautilus-logo-sprite@2x.png';
import App from '../App.css'



export default class SecondPage extends Component {
    render() {
        return (
            <div className="navWrap">
                {/* <img src='../assets/global/nautilus-logo-sprite@2x.png' /> */}
                {/* <div className= "navLogo">
                <img className="_logo" src={Logo} />
                </div> */}
                <div className="main-nav">
                    <div className="_logo"><a className="" href="#" ></a></div>
                    <div className="navDiv">
                        <ul className="_list">
                            <li className="issueNav navList"><a href="#">Issues</a></li>
                            <li className="topic navList"><a href="#">Topics</a></li>
                            <li className="navList"><a href="#">Blog</a></li>
                            <li className="newsletter navList"><a href="#">Newsletter</a></li>
                            <li className="navList"><a href="http://www.facebook.com" title="Facebook" target="_blank">Facebook</a></li>
                            <li className="navList"><a href="http://twitter.com" title="Twitter" target="_blank">Twitter</a></li>
                            <li className="navList"><a href="">Login</a></li>
                            <li className="navList"><a href="" className="btnrv" target="">Subscribe</a></li>
                        </ul>
                    </div>
                </div>
                {/* ===================================== */}
                <div className="midDiv">
                    <div className="cardImg"></div>
                    <div className="midText">
                        <p>THE NAUTILUS SPOTLIGHT
                    WHY THE LAWS OF PHYSICS ARE INEVITABLE</p>
                    </div>
                    <div className="">
                        <button className="button ">Read Now</button>
                        {/* <a href="" class="button  btn"> Read Now</a> */}
                    </div>

                </div>
                {/* =============================== */}
                <div className="sideBarWrap">
                    <div className="sideBar">
                        <div className="info">
                            <a href="" className="">Issue 079</a>
                            <h2><a href="#">Catalyst</a></h2>
                            <p className="side_text"> “Whats generate a new theory in science? ...</p>

                            <ul id="issueTabs" className="sub_tabs" >
                                <li className="sideList">
                                    <div className="tabs">
                                        <h4>Chapter one</h4>
                                        <h4>Art</h4>
                                    </div>
                                </li>

                                <li className="sideList">
                                    <div className="tabs">
                                        <h4>Chapter two</h4>
                                        <h4>Mind</h4>
                                    </div>
                                </li>

                                <li className="sideList">
                                    <div className="tabs">
                                        <h4>Chapter three</h4>
                                        <h4 >Energy</h4>
                                    </div>
                                </li>
                                <li className="sideList">
                                    <div className="tabs">
                                        <h4>Chapter Four</h4>
                                        <h4>Stars</h4>
                                    </div>
                                </li>

                            </ul>



                        </div>
                    </div>
                    <div className="centerSection">
                        <div className="centerImg"></div>
                        
                        <div className="details">
                            <span> Artificial Intelligence</span>
                            <h4 >Best Screen Play goes to the Algorithms</h4>
                            <h5 >By Arthur I.Miller </h5>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}