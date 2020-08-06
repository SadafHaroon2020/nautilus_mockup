import React, { Component } from 'react'
import MatchesImg from '../assets/matches.png'
import App from '../App.css'



export default class FirstPage extends Component {
  render() {
    return (
      <div>

         <div className="bg">
         <div className="text">
           <h6>Issue 079</h6>
           <h2>Catalyst</h2>
           <h6>Agents of change</h6>
           <h5>Read More</h5>
         </div>
         <div className="_btn">
         <button className = "btn">See Full Issue</button>
         </div>
      </div>
      </div>
      
    )
  }
}