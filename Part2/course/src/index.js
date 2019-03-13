import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'


const Header = (props) => {
  return(
    <h1>{props.course.name}</h1>
  )
}

const Contents = ({parts}) => {
    const mapped = () => parts.map(part => <Part key = {part.id} part = {part} />)
  return(
    <div>
      {/*<Part part={props.course.parts[0]}  />
      <Part part={props.course.parts[1]}  />
  <Part part={props.course.parts[2]}  />*/}
      {mapped()}
    </div>  
  )
}

const Part = (part) => {
  return(
    <p>{part.name}: {part.exercises}</p>
  )
}

const Total = (props) => {
  return(
    <p>Total {props.parts[0].exercises+props.parts[1].exercises+props.parts[2].exercises} exercises</p>
  )
}


const Course = ({course}) => {
    return (
        <div>
        <Header course = {course}/>
        <Contents course = {course.parts}/>
        </div>
    )    
}


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
