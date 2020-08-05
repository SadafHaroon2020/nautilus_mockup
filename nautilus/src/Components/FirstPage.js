import React, { Component } from 'react'
import MatchesImg from '../assets/matches.png'
import App from '../App.css'



export default class FirstPage extends Component {
  render() {
    return (
      <div  styles={MatchesImg} >
         <div className="bg"></div>
         <div className="text">
         </div>
      </div>
    )
  }
}