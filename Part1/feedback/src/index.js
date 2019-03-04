import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
    constructor() {
      super()
      this.state = {
        counter: 1
      }
    }
  
    asetaArvoon = (arvo) => {
      return () => {
        this.setState({ counter: arvo })
      }
    }
  
    render() {
      return (
        <div>
          <Display counter =  {this.state.counter}/>
          <div>
            <Button 
                handleClick={this.asetaArvoon(this.state.counter + 1)}
                text = "Plus"
            />
            <Button 
                handleClick={this.asetaArvoon(this.state.counter - 1)}
                text = "Miinus"
            />
            <Button 
                handleClick={this.asetaArvoon(0)}
                text = "Nollaa"
            />
          </div>
        </div>
      )
    }
  }

  const Display = (counter) => {
    return (
      <div>{counter}</div>
    )
  }

  const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
      {text}
    </button>
  )


  

  ReactDOM.render(
    <App />,
    document.getElementById('root')
  )

