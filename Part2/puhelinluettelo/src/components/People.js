import React from 'react'

const People = ({state, deletePerson}) => { 

    return( 
    
    <table>
        <tbody>
            {state.persons.map(person => 
                <tr key={person.name}>
                    <td>{person.name}  </td>
                    <td>{person.number} </td>
                    <td><button onClick = {deletePerson.bind(person.id)}>Poista</button></td>
                </tr>
            )}
        </tbody>
    </table>  
    )
}        

export default People