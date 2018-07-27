import * as React from 'react'

export interface DemoP {
  face: string
}

export class Demo extends React.Component<DemoP, {}> {
  render () {
    const {face} = this.props

    return (
      <div id='demo' className='bg-blue column center-xy fill-xy'>
        <h1>Ready to React</h1>
        <div>{face}</div>
      </div>
    )
  }
}
