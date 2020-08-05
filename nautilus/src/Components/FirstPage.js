import React, { Component } from 'react'
import MatchesImg from '../assets/matches.png'
import App from '../App.css'



export default class FirstPage extends Component {
  render() {
    return (
      <div>

         <div className="bg">
         <div className="text">
           <h4>Issue 079</h4>
           <h2>Catalyst</h2>
           <h5>Agents of change</h5>
           <h4>Read More</h4>
         </div>
         <div className="_btn">
         <button className = "btn">See Full Issue</button>
         </div>
      </div>
      </div>
      
    )
  }
}