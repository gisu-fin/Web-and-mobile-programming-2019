import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [ { name: 'Arto Hellas' } ],
      newName: ''
    }
  } //constructor  

  addName = (event) => {
    event.preventDefault()
    console.log('Nappia painettu!')
    console.log(event.target)

    //checking if name already exists
    if (this.state.persons.map (person => person.name).includes(this.state.newName) === true){
      alert (this.state.newName + ' on jo olemassa, lisää uusi nimi')
      this.setState({
        newName: ''
      })
    }
    else {
    
    const nameObject = {
      name: this.state.newName
    }

    const persons = this.state.persons.concat(nameObject)

    this.setState ({
      persons:persons,
      newName: ' '
    })
  }//else
  }//addName

  handleAddName = (event) => {
    console.log(event.target.value)
    this.setState({ newName: event.target.value })
  }//handle add name


  render() {

    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <form onSubmit = {this.addName}>
          <div>
            Nimi: <input 
              value = {this.state.newName}
              onChange = {this.handleAddName}
            />
          </div>
          <div>
            <button type="submit">Lisää</button>
          </div>
        </form>
        <h2>Nimet</h2>        
        <ul>
          {this.state.persons.map(person => <li key={person.name}>{person.name}</li>)}
        </ul>
       

      </div>

    )
  }
}//class

export default App