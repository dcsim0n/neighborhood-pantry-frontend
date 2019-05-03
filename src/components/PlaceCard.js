import React from 'react'
import {Card,Button,FormControl} from 'react-bootstrap';
export default class PlaceCard extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      name: props.place.data.display_name,
      latitude: props.place.data.lat,
      longitude: props.place.data.lon,
      editing: false
    }
  }
  
  setEditing = ()=>{
    this.setState({editing: !this.state.editing})
  }
  handleChange = (e)=>{
    this.setState({name: e.target.value})
  }
  render(){  
    return (
      
      <Card className="shadow-sm item-card">
          <Card.Body>
              <Card.Title>
                {this.state.editing
                ?
                  <FormControl 
                  type="text" 
                  value={this.state.name}
                  onChange={this.handleChange} 
                  />
                :
                  this.state.name
                }
                <i class="fas fa-edit" onClick={()=>this.setEditing()}></i> 
              </Card.Title>
              <Button onClick={(e)=>this.props.handleClick(this.state)}>Create</Button>
          </Card.Body>
      </Card>
      
    )
  }
}