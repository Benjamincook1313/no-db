import React, { Component } from 'react'
import axios from 'axios'
import DisplayNext from './DisplayNext'

class Next extends Component {
  constructor(props){
    super(props)

    this.state = {
      adventures: []
    }
  }

  componentDidMount(){
    axios.get('/api/adventures').then(res => {
      this.setState({
        adventures: res.data
      })
    }).catch(err => {
      console.log(err, 'Houston we have a problem')
    })
  }


  updateAdventure=(adventure)=>{
    axios.put(`/api/adventure/${adventure.id}`, adventure).then(res => {
      this.setState({
        adventures: res.data
      })
    }).catch(err => console.log('Failed to update'))
  }

  deleteAdventure=(adventure)=>{
    axios.delete(`/api/adventure/${adventure.id}`).then(res => {
      this.setState({
        adventures: res.data
      })
    }).catch(err => console.log(err, 'Failed to deleteing adventure'))
  }

  completeAdventure=(adventure)=>{
    let {location, activity, image} = this.state
    axios.put(`/api/adventure/complete/${adventure.id}`, adventure).then(res => {
        this.setState({
          location,
          activity,
          image,
          complete: true
        })
      }).catch(err => console.log(err, 'Failed to toggle complete'))
    }

  render(){
    let {adventures} = this.state
    return(
      <div className='next' 
        style={{
          padding: '10px', 
          diplay: 'flex', 
          justifyContent: 'center', 
        }}>
        <DisplayNext 
        adventures={adventures} 
        updateAdventure={this.updateAdventure} 
        deleteAdventure={this.deleteAdventure}
        handleEdit={this.handleEdit}
        completeAdventure={this.completeAdventure}
        />
      </div>
    )
  }
}

export default Next