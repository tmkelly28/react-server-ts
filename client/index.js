import React from 'react'
import ReactDOM from 'react-dom'

class Main extends React.Component {
  render () {
    return (
      <h1>Hello React!</h1>
    )
  }
}

ReactDOM.render(
  <Main />,
  document.getElementById('app')
)
