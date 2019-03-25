import React, { Component } from 'react'
import Next from './NextAdventure'
import Old from './OldAdventures'
import axios from 'axios'

class Add extends Component {
  constructor(){
    super()
    this.state = {
      location: '',
      activity: '',
      image: '',
      complete: false
    }
  }

  createAdventure=()=>{
    let adventure = this.state
    axios.post('/api/adventure', adventure).then(res => {
      this.setState({
        location: '',
        activity: '',
        image: '',
        complete: false
      })
    }).catch(err => console.log(err, 'Houston we have a problem'))
  }
  
  

  handleInput=(e)=>{
    let {name, value} = e.target
    this.setState({
      [name]: value
    })
  }

  updateAdventure=(adventure)=>{
    axios.put(`/api/adventure/${adventure.id}`, adventure).then(res => {
      this.setState({
        adventures: res.data
      })
    }).catch(err => console.log('Failed to update'))
  }

  render(){
    let {location, activity, image} = this.state
    return(
      <div className='newAdventure' style={{}}>
        <h2 style={{float: 'left', margin: '90px 0 0 160px'}}>Previous Adventures</h2>
        <input 
          className='inputs'
          type='text' 
          name='location' 
          value={location} 
          placeholder='            City, State' 
          onChange={this.handleInput}
          />
        <input 
          className='inputs'
          type='text' 
          name='activity' 
          value={activity}
          placeholder='              Activity' 
          onChange={this.handleInput}
          />
        <input 
          className='inputs'
          type='text' 
          name='image' 
          value={image}
          placeholder='           Image URL' 
          onChange={this.handleInput}
          />
        <button onClick={this.createAdventure} style={{position: 'relative', top: '30px', right: '245px'}}>Add</button>
        <h2 style={{float: 'right', margin: '90px 250px 0 0'}}>What's Next?</h2>
        <div className='add'>
          <Old updateAdventure={this.updateAdventure}/>

          <Next completeAdventure={this.completeAdventure} updateAdventure={this.updateAdventure}/>
        </div>
      </div>
    )
  }
}

export default Add