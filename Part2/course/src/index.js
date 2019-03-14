import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const Course = ({course}) => {
    return (
        <div>
        <Header course = {course}/>
        <Contents parts = {course.parts}/>
        <Total parts = {course.parts}/>
        </div>
    )    
}

const Header = ({course}) => {
  return(
    <h1>{course.name}</h1>
  )
}

const Contents = ({parts}) => {
  return(
    <div>
      {parts.map(part => <p key = {part.id}>{part.name} {part.exercises}</p>)}
    </div>  
  )
}

const Total = ({parts}) => {
    return (
        <div>
            <p>
                Total {parts.reduce ((sum, {exercises}) => sum + exercises,0)} exercises.
            </p>
        </div>
    )
    }        


/*const Part = ({part}) => {
  return(
    <p>{part.name} {part.exercises}</p>
  )
}
*/

const App = () => {
    const course = {
      name: 'Superadvanced web and mobile programming',
      parts: [
        {
          name: 'Basics of React',
          exercises: 8,
          id: 1
        },
        {
          name: 'Using props',
          exercises: 10,
          id: 2
        },
        {
          name: 'Component states',
          exercises: 12,
          id: 3
        }
      ]
    }

  return (
    <div>
      <Course course = {course} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

