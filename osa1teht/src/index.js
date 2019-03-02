import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
    return (
        <div>
            <header>{course}</header>
        </div>
    )
} 

const Contents = (props) => {
    return (
        <div>
            <p>{part1}{exercises1}</p>
            <p>{part2}{exercises2}</p>
            <p>{part3}{exercises3}</p>
        </div>
    )
}

const Total = (props) => {
    return (
        <div>
            <p>Total {exercises1+exercises2+exercises3} exercises</p>
        </div>
    )
}

const App = () => {
    const course = 'Superadvanced web and mobile programming'
    const part1 = 'Basics of React'
    const exercises1 = 8
    const part2 = 'Using props'
    const exercises2 = 10
    const part3 = 'Component states'
    const exercises3 = 12

    return (
        <div>
            <header course = {course}></header>
            <p>{part1} {exercises1}</p>
            <p>{part2} {exercises2}</p>
            <p>{part3} {exercises3}</p>
            <p>Total {exercises1+exercises2+exercises3} exercises</p>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

