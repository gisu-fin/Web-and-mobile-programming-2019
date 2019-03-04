import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = ({handleClick, text}) => (
    <button onClick = {handleClick}> {text} </button>
)

const Statistics = ({hyva, neutraali, huono, keski, prosentti}) => (
    <table>
        <tbody> 
            <Statistic text="Hyvä" counter={hyva} />
            <Statistic text="Neutraali" counter={neutraali} />
            <Statistic text="Huono" counter={huono} />
            <Statistic text="Keskiarvo" counter={keski}/>
            <Statistic text="Positiivisia" counter={prosentti} /> 
        </tbody>  
    </table>
)

const Statistic = (props) => (
        <tr><td>{props.text}</td><td>{props.counter}</td></tr>    
)

const Historia = ({hyva, neutraali, huono, keski, prosentti, kaikki}) => {
    if (kaikki === 0){
        return(
            <div>
                <p>Yhtään palautetta ei ole annettu</p>
            </div>
        )
    }
    return (
        <div>
            <Statistics hyva={hyva} neutraali={neutraali} huono={huono} keski={keski} prosentti={prosentti}/>
        </div>
    )
}

class App extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        hyva: 0,
        neutraali: 0,
        huono: 0
      }
    }

    klikHyva = () => {
        this.setState({
            hyva: this.state.hyva +1
        })
    }

    klikNeutraali = () => {
        this.setState({
            neutraali: this.state.neutraali +1
        })
    }

    klikHuono = () => {
        this.setState({
            huono: this.state.huono +1
        })
    }
  
    render() {
        const {hyva, neutraali, huono} = this.state
        //lasketaan kaikki yhteen
        const kaikki = (hyva + neutraali + huono) 
        //lasketaan keskiarvo
        const keski = ((hyva*1 + neutraali*0 + huono*(-1))/kaikki).toFixed(2)
        //lasketaan hyvien prosenttiosuus
        const prosentti = ((hyva/kaikki)*100).toFixed(2)+"%"

        return (
            <div>
                <h1>Anna palautetta</h1>
                    <Button handleClick={this.klikHyva} text = "Hyvä"/>
                    <Button handleClick={this.klikNeutraali} text = "Neutraali"/>
                    <Button handleClick={this.klikHuono} text = "Huono"/>
                    
                <h1>Statistiikka</h1>
                    <div>
                        <Historia kaikki={kaikki} hyva={hyva} neutraali={neutraali} huono={huono} keski={keski} prosentti={prosentti}/>
                    </div>                    
            </div>
      )
    }
  }

  ReactDOM.render(
    <App />,
    document.getElementById('root')
  )

