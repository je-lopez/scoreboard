import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'

let PLAYERS = [
  {
    name: "Jorge Lopez",
    score: 10,
    id: 1
  },
  {
    name: "Zubair Ahmed",
    score: 10,
    id: 2
  },
  {
    name: "Rai Lee",
    score: 10,
    id: 3
  }
]

ReactDOM.render(
  <App initialPlayers={PLAYERS} />, document.getElementById('container')
)
