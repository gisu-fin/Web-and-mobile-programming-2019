import React from 'react'
import ReactDOM from 'react-dom'
import Course from './components/course'
import './index.css'

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
            <Course course={course} />
        </div>
    )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

