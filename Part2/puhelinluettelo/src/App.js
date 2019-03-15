import React from 'react'
import axios from 'axios'


/*const Form = ( props ) => { 
  return(    
  <form onSubmit = {onSubmit} >
            <div>
              Nimi: <input 
                value = {newName}
                onChange = {handleAddName}
              />
            </div>
            <div>
              Numero: <input 
                value = {newNumber}
                onChange = {handleAddNumber}
              />
            </div>
  
  
            <div>
              <button type="submit">Lisää</button>
            </div>
          </form>
  )
  }
  */
/*
const Nimet = ({props}) => {
  return( 
  <div>  
  <h2>Nimet</h2>        
        <table>
          {props.state.persons.map(person => 
            <tr key={person.name}>
            <td>{person.name}  </td>
            <td>{person.number} </td>
            </tr>)}
        </table> 
    </div>      
  )
}
*/

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

    //checking if name already exists ei jostain syystä toimi kuin vasta toisella kerralla
    // kokeiltu (this.state.persons.filter(person => person.name === this.state.newName).length > 0)
    //          (this.state.persons.map (person => person.name).includes(this.state.newName) === true)
    if (persons.map (person => person.name).includes(this.state.newName) === true){
        console.log('iffin sisällä ' + this.state.newName)
        alert (this.state.newName + ' on jo olemassa, lisää uusi nimi')
        this.setState({
          newName: ''
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

      /*
      const newPerson = {
        name: this.state.newName,
        number: this.state.newNumber
      }
      
      persons = this.state.persons.concat(newPerson)

      this.setState ({
        persons:persons,
        newName: ' ',
        newNumber: ' '
      })*/
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

  /*
    const newPersons = Object.assign([], this.state.newPersons)
    newPersons.splice(id,1)
    this.setState({newPersons:newPersons})
  */
    const currentPerson = this.state.persons.find(person => person.id === id);
    if (window.confirm('Poistetaanko ' + currentPerson.name + '?')) {
      axios.delete('http://localhost:3001/persons/' + id)
        .then(res => {
          const oldPersons = [...this.state.persons];
          const index = oldPersons.indexOf(currentPerson);
          if (index !== -1) {
            oldPersons.splice(index, 1);
            this.setState({ persons: oldPersons });
          }
        })
        .catch(err => { console.log(err) })
    }
    

  }



  render() {

    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <form onSubmit = {this.addPerson}>
          <div>
            Nimi: <input 
              value = {this.state.newName}
              onChange = {this.handleAddName}
            />
          </div>
          <div>
            Numero: <input 
              value = {this.state.newNumber}
              onChange = {this.handleAddNumber}
            />
          </div>

          <div>
            <button type="submit">Lisää</button>
          </div>
        </form>

      
        <h2>Nimet</h2>        
        <table>
          <tbody>
          {this.state.persons.map(person => 
            <tr key={person.name}>
            <td>{person.name}  </td>
            <td>{person.number} </td>
            <td><button onClick = {this.deletePerson.bind(this, person.id)}>Poista</button></td>
            </tr>)}
            </tbody>
        </table>  
      
      </div> 

    )
  }
}//class

export default App