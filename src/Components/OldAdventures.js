import React, { Component } from 'react'
import DisplayOld from './DisplayOld';
import axios from 'axios'
// import AddImages from './AddImages'

class Old extends Component {
  constructor(props){
    super(props)

    this.state = {
      adventures: []
    }
  }

  componentDidMount(){
    axios.get('/api/adventure/complete').then(res => {
      this.setState({
        adventures: res.data
      })
    }).catch(err => {
      console.log(err, 'Houston we have a problem getting old Adventures')
    })
  }

  deleteAdventure=(adventure)=>{
    axios.delete(`/api/adventure/${adventure.id}`).then(res => {
      this.setState({
        adventures: res.data
      })
    }).catch(err => console.log(err, 'Problem deleteing adventure'))
  }

  addImages=(adventure)=>{
    axios.put(`/api/adventure/images/${adventure.id}`, adventure).then(res => {
      this.setState({
        adventures: res.data
      })
    }).catch(err => console.log(err, 'problem adding images'))
  }

  render(){
    let {adventures} = this.state
    return(
      <div className='old'
      style={{
        padding: '10px', 
        diplay: 'flex', 
        justifyContent: 'center', 
      }}>
        <DisplayOld 
        adventures={adventures}
        deleteAdventure={this.deleteAdventure}
        addImages={this.addImages}
        updateAdventure={this.props.updateAdventure}
        />
      </div>
    )
  }
}

export default Old