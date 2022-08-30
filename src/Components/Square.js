import React, { Component } from 'react'

var turn = true


function clicked(event){
  console.log(event.currentTarget)

  if (turn === true){
    event.currentTarget.innerHTML = "X"
    turn = false

  }else {
    event.currentTarget.innerHTML = "O"
    turn = true
  }
}


export default class Square extends Component {


  render() {
    return (



      <div className='board'>

        <div onClick={ (event) => {clicked(event)} } className='squares'>

         

        </div>
        <div onClick={ (event) => {clicked(event)} } className='squares'>

         

        </div>
        <div onClick={ (event) => {clicked(event)} } className='squares'>

         

        </div>
        <div onClick={ (event) => {clicked(event)} } className='squares'>

         

        </div>
        <div onClick={ (event) => {clicked(event)} } className='squares'>

         

        </div>
        <div onClick={ (event) => {clicked(event)} } className='squares'>

         

        </div>
        <div onClick={ (event) => {clicked(event)} } className='squares'>

         

        </div>
        <div onClick={ (event) => {clicked(event)} } className='squares'>

         

        </div>
        <div onClick={ (event) => {clicked(event)} } className='squares'>

         

        </div>




      </div>
    )
  }
}
