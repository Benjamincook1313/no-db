import React, { Component } from 'react'

class DisplayEdit extends Component {
  constructor(props){
    super(props)

    this.state = {
      id: props.id,
      location: '',
      activity: '', 
      image: '',
      complete: false
    }
  }

  handleChange=(e)=>{
    let {name, value} = e.target
    this.setState({
      [name]: value
    })
  }

  

  render(){
    let {activity, location, image} = this.state
    let adventure = this.state
    return(
      <div>
        <input 
        className='inputs'
        name='activity'
        value={activity}
        placeholder='              Activity'
        onChange={this.handleChange}
        ></input>
        <input
        className='inputs'
        name='image'
        value={image}
        placeholder='               image'
        onChange={this.handleChange}
        ></input>
        <input
        className='inputs'
        name='location'
        value={location}
        placeholder='             Location'
        onChange={this.handleChange}
        ></input>
        <button onClick={() => this.props.handleClick(adventure)}>Submit</button>
        <button onClick={this.props.handleX}>X</button>
      </div>
    )
  }
}

export default DisplayEdit