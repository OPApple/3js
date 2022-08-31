import React, { Component } from 'react'

var turn = true



const takenSquares = []


//
const winCheck = () =>{

}


function clicked(event){
  console.log(takenSquares)


  

  for(var i = 0; i < takenSquares.length; i++){
    if (event.currentTarget === takenSquares[i]){
      return false;
    }
  }

  if (turn === true){
    event.currentTarget.innerHTML = "X"
    turn = false
    takenSquares.push(event.currentTarget)

    

  }else {
    event.currentTarget.innerHTML = "O"
    turn = true
    takenSquares.push(event.currentTarget)
  }
}


export default class Square extends Component {


  render() {
    return (


      

      <div className='board'>

        <div onClick={ (event) => {clicked(event)} } id='top-left' className='squares'>

         

        </div>
        <div onClick={ (event) => {clicked(event)} } id='top-mid' className='squares'>

         

        </div>
        <div onClick={ (event) => {clicked(event)} } id='top-right' className='squares'>

         

        </div>
        <div onClick={ (event) => {clicked(event)} } id='mid-left' className='squares'>

         

        </div>
        <div onClick={ (event) => {clicked(event)} } id='mid-mid' className='squares'>

         

        </div>
        <div onClick={ (event) => {clicked(event)} } id='mid-right' className='squares'>

         

        </div>
        <div onClick={ (event) => {clicked(event)} } id='bot-left' className='squares'>

         

        </div>
        <div onClick={ (event) => {clicked(event)} } id='bot-mid' className='squares'>

         

        </div>
        <div onClick={ (event) => {clicked(event)} } id='bot-right' className='squares'>

         

        </div>




      </div>
    )
  }
}
