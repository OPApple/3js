import './App.css';
import Square from './Components/Square';

function App() {
  return (

    <div className='App-container'>
      <div className="App">
        <span className='Score'></span>
	  <div>

	    
	    <button className='' id='undo' onClick={ (event) =>{ undo(event) } }</button>

	  </div>  
	    	
        <Square/>

      </div>
    </div>
  );
}

export default App;
