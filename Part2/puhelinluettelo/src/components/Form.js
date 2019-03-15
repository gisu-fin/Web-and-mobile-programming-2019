import React from 'react'

const Form = ({addPerson, handleAddName, handleAddNumber, state}) => {

    return (   

        <form onSubmit = {addPerson}>
          <div>
            Nimi: <input 
              value = {state.newName}
              onChange = {handleAddName}
            />
          </div>
          <div>
            Numero: <input 
              value = {state.newNumber}
              onChange = {handleAddNumber}
            />
          </div>

          <div>
            <button type="submit">Lisää</button>
          </div>
        </form>
    )

}

export default Form