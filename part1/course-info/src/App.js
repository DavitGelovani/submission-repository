import React from 'react'
const content = {
  course: 'Half Stack application development',
  part1: 'Fundamentals of React',
  exercises1: 10,
  part2: 'Using props to pass data',
  exercises2: 7,
  exercises3: 14,
  part3: 'State of a component'
}
const App = () => {
  return (
    <div>
      <Header {...content} />
      <Content {...content} />
      <Total {...content} />
    </div> 
  )
}

const Header = (props) => {
  return(
    <h1>{props.course}</h1>
  )
}
const Content = (props) => {
  return(
    <>
      <p>
        {props.part1} {props.exercises1}
      </p>
      <p>
        {props.part2} {props.exercises2}
      </p>
      <p>
        {props.part3} {props.exercises3}
      </p>
    </>
  )
    
}
const Total = (props) => {
  return(
    <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
  )
}



export default App