import React, { Component } from 'react'
import Logo from '../assets/global/nautilus-logo-sprite@2x.png';
import App from '../App.css'



export default class SecondPage extends Component {
    render() {
        return (
            <div className="navWrap">

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

                <div className="midDiv">
                    <div className="cardImg"></div>
                    <div className="midText">
                        <p>THE NAUTILUS SPOTLIGHT
                    WHY THE LAWS OF PHYSICS ARE INEVITABLE</p>
                    </div>
                    <div className="">
                        <button className="button ">Read Now</button>

                    </div>

                </div>

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
                    <div className="bottomMid">
                        <div className="midBtm1"></div>
                        <div className="details2">
                            <span> Music</span>
                            <h4>How I taught My Computer to write its Own Music</h4>
                            <h5 >By John Supko </h5>
                        </div>
                        <div className="midBtm2"></div>
                        <div className="details">
                            <span> Art</span>
                            <h4 >Picasso's got Nothing on AI Artist</h4>
                            <h5 >By Kevin Berger </h5>
                        </div>
                    </div>
                    <div className="lastItem">
                        <h3>Channels</h3>
                        <h4>Tune in to Nautilus' deep dive portals</h4>

                    </div>

                    <div className="container">

                        <div className="conA">
                            <label className="imageText">Making sense ofGenome , at last</label>
                        </div>
                        <div className="conB">
                            <label className="imageText">Your Brain is on Brink of Chaos</label>
                        </div>
                        <div className="conC">
                            <label className="imageText">Mathematics Calculate How Randomness creeps in</label>
                        </div>
                    </div>
                    <div className="container1">

                        <div className="conA1">
                            <label className="imageText">
                                The Deep time of Walden Pond
                        </label>
                        </div>
                        <div className="conB1">
                            <label className="imageText">
                                The Best Burger place is a Lab
                        </label>
                        </div>
                        <div className="conC1">
                            <label className="imageText">
                                How much Shoud Expectation drive Science ?
                        </label>
                        </div>
                    </div>
                    <div className="container2">

                        <div className="conA2">
                            <label className="imageText">
                                On observation and Imagination
                        </label>
                        </div>
                        <div className="conB2">
                            <label className="imageText">
                                Yes , Life in the fast Lane Kills you
                        </label>
                        </div>
                        <div className="conC2">
                            <label className="imageText">
                                Taking to the Stars
                        </label>
                        </div>

                    </div>
                    <div className="C2">
                        <label className="imageText">
                            Taking to the Stars
                        </label>
                    </div>
                    <p className="_pop"> Popular on Nautilus</p>
                    <p className="_pop"> Facts so Romantic</p>

                    <div className="container">

                        <div className="conA3">
                            <label className="imageText">Making sense ofGenome , at last</label>
                        </div>
                        <div className="conB3">
                            <label className="imageText">Your Brain is on Brink of Chaos</label>
                        </div>
                        <div className="conC3">
                            <label className="imageText">Mathematics Calculate How Randomness creeps in</label>
                        </div>
                        <div className="conD3">
                            <label className="imageText">Mathematics Calculate How Randomness creeps in</label>
                        </div>
                        
                    </div>
                    <p className="_pop">Listen To Nautilus</p>



                </div>
            </div>

        )
    }
}