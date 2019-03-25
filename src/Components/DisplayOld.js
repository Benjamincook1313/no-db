import React, { Component } from 'react'
import AddImages from './DisplayAddImages'

class DisplayOld extends Component {
  constructor(props){
    super(props)

    this.state = {
      displayAddImages: false
    }
  }

  handleClick=()=>{
    this.setState({
      displayAddImages: true
    })
  }

  render(){
    let addImages = this.props.addImages
    let displayAdventures = this.props.adventures.map(adventure => {
      if(adventure.complete && !this.displayAddImages){
        return (
          <div key={adventure.id} className='complete' >
            <h1 style={{borderBottom:'2px solid skyblue', color: 'lightgreen'}}>{adventure.activity}</h1>
            <img src={adventure.image} alt='' style={{maxWidth: '500px', maxHeight: '600'}}/>
            <p style={{color: 'skyblue', fontWeight: 'bolder'}}>{adventure.location}</p>
            <button style={{backgroundColor: 'lightgreen', borderRadius: '5px'}} onClick={this.handleClick}>Add Images</button>
            <button style={{backgroundColor: 'lightgreen', borderRadius: '5px'}} onClick={() => this.props.deleteAdventure(adventure)}>delete</button>
          </div> 
        )
      }if (adventure.complete && this.displayAddImages){
        return (
          <div key={adventure.id} className='complete'>
              <h1 style={{borderBottom:'2px solid skyblue', color: 'lightgreen'}}>{adventure.activity}</h1>
              <img src={adventure.image} alt='' style={{maxWidth: '500px', maxHeight: '600'}}/>
              <p style={{color: 'skyblue', fontWeight: 'bolder'}}>{adventure.location}</p>
              <AddImages />
          </div>
        )
      }
    })
    return(
      <div>
        {displayAdventures}
      </div>
    )
  }
}

export default DisplayOld