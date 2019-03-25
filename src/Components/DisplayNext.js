import React, { Component } from 'react'
import DisplayEdit from './DisplayEdit'

class DisplayNext extends Component {
  constructor(props){
    super(props)
    
    this.state = {
      displayEdit: false
    }
  }
  
  handleEdit=()=>{
    this.setState({
      displayEdit: true
    })
  }

  editClick=(adventure)=>{
    this.setState({
      displayEdit: false
    })
    this.props.updateAdventure(adventure)
  }

  handleX=()=>{
    this.setState({
      displayEdit: false
    })
  }


  render(){
    let {displayEdit} = this.state
    let updateAdventure = this.props.updateAdventure
    let displayAdventures = this.props.adventures.map(adventure => {
      if(displayEdit && !adventure.complete){
        return (
          <div key={adventure.id} className='adventure' >
            <h1 style={{borderBottom:'2px solid skyblue', color: 'lightgreen'}}>{adventure.activity}</h1>
            <img src={adventure.image} alt='' style={{maxWidth: '500px', maxHeight: '600'}}/>
            <p style={{color: 'skyblue'}}>{adventure.location}</p>
            <DisplayEdit updateAdventure={updateAdventure} handleClick={this.editClick} handleX={this.handleX} id={adventure.id}/>
          </div>
        )
      } else if(!displayEdit && !adventure.complete){
        return (
          <div key={adventure.id} className='adventure' >
            <h1 style={{borderBottom:'2px solid skyblue', color: 'lightgreen'}}>{adventure.activity}</h1>
            <img src={adventure.image} alt='' style={{maxWidth: '500px', maxHeight: '600'}}/>
            <p style={{color: 'skyblue', fontWeight: 'bolder'}}>{adventure.location}</p>
            <button className='buttons' onClick={this.handleEdit} style={{backgroundColor: 'lightgreen', borderRadius: '5px'}}>Edit</button>
            <button className='buttons' onClick={() => this.props.completeAdventure(adventure)} style={{backgroundColor: 'black', color: 'white', borderRadius: '5px'}}>Complete</button>
            <button className='buttons' onClick={() => this.props.deleteAdventure(adventure)} style={{backgroundColor: 'lightgreen', borderRadius: '5px'}}>Delete</button>
          </div>
        )
      }
    })
    
    return (
      <div>
        {displayAdventures}
      </div>
    )
  }
}
export default DisplayNext