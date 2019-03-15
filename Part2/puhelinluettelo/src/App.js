import React from 'react'
import axios from 'axios'
import Form from './components/Form';
import People from './components/People';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [ { name: 'Arto Hellas', number: 123441, id: 1 } ],
      newName: '',
      newNumber: ''
    }
  } //constructor  

  componentDidMount = () => {
    console.log ('did mount')
    axios
      .get('http://localhost:3001/persons')
      .then(respond => {
        this.setState({
          persons: respond.data
        })
      }
      ).catch(error => { console.log(error) })
  }


  addPerson = (event) => {
    event.preventDefault()
    console.log('Nappia painettu!')
    console.log('add person ' + this.state.newName)

    let persons = this.state.persons

    //tarkistetaan onko nimi jo olemassa
    if (persons.map (person => person.name).includes(this.state.newName) === true){
        console.log('iffin sisällä ' + this.state.newName)
        alert (this.state.newName + ' on jo olemassa, lisää uusi nimi')
        this.setState({
          newName: '',
          newNumber: ''
        })
      
    }
    
    else {
      console.log (this.state.newName + ' else')
      axios
      .post('http://localhost:3001/persons', {
        name: this.state.newName,
        number: this.state.newNumber
      })
      .then(response => {
        this.setState({
          persons: [...this.state.persons, response.data],
          newName: "",
          newNumber: "",
        })
      })
      .catch(error => { console.log(error) })
    }//else

  }//addName

  handleAddName = (event) => {
    console.log(event.target.value)
    this.setState({ newName: event.target.value })
  }//handle add name

  handleAddNumber = (event) => {
    console.log ('luku')
    this.setState({newNumber: event.target.value})
  }

  deletePerson = (id) => {
    console.log ('poistossa')

    const thisDude = this.state.persons.find(person => person.id === id);
    if (window.confirm('Poistetaanko ' + thisDude.name + '?')) {
      axios
        .delete('http://localhost:3001/persons/' + id)
        .then (response => {
            const people = this.state.persons.filter( person => person.id !== thisDude.id )
            this.setState({
              persons: people
            })
        })
    }//if
  }//delete


  render() {

    return (
      <div>
        <h2>Puhelinluettelo</h2>
        
        <Form
          state = {this.state}
          handleAddName = {this.handleAddName}
          handleAddNumber = {this.handleAddNumber}
          addPerson = {this.addPerson}
        />
      
        <h2>Nimet</h2>        
        
        <People
          state = {this.state}
          deletePerson = {this.deletePerson}
        />
      
      </div> 

    )
  }
}//class

export default App