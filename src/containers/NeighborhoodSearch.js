import React, { Component } from 'react'
import C from '../constants'
import {connect} from 'react-redux'

import {Card, Container, Col, Form, Button, FormControl, InputGroup} from 'react-bootstrap'
import {fetchAll, postOne} from '../fetch';
import { joinNeighborhood } from '../actions/actions';

import NHCard from '../components/NHCard'
import PlaceCard from '../components/PlaceCard';

class NeighborhoodSearch extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       searchString:"",
       searchResults: [],
       nearby:[],
       searchRadius:"5"
    }
  }

  handleChange = (e) =>{
    this.setState({searchString: e.target.value})
  }
  
  handleSearch = (e) =>{
    e.preventDefault()
    fetchAll(`${C.API_ROOT}/neighborhoods/find?q=${this.state.searchString}`,
    (data)=>{
      this.setState({searchResults: data})
    })
    e.target.reset()
  }
  getNearbyNeighborhoods= ()=>{
    const id = this.props.userId
    fetchAll(`${C.API_ROOT}/neighborhoods/search?user_id=${id}&radius=${this.state.searchRadius}`,(data)=>{
      this.setState({nearby: data})
    })

  }
  componentDidMount(){
    this.getNearbyNeighborhoods()
  }
  handleNewNeighborhood = (place)=>{
    
    const newNeighborhood = {
        name: place.name,
        latitude: place.latitude,
        longitude: place.longitude
    }
    postOne(`${C.API_ROOT}/neighborhoods`,
        newNeighborhood,
        (data)=>{ 
          this.setState({searchResults:[]})
          this.getNearbyNeighborhoods()
        }
    )
  }

  render() {
    return (
      <div className="shadow">
        <Card>
          <Card.Body>
              <h3>Find your Neighborhood</h3>
              <label htmlFor="search-radius">Adjust the search radius</label>
              <InputGroup style={{width:"8em"}}>
                <FormControl 
                  id="search-radius" type="number" 
                  value={this.state.searchRadius} 
                  onChange={(e)=>this.setState(
                    {searchRadius: e.target.value}
                  )}/>
                  <InputGroup.Append>
                    <Button onClick={this.getNearbyNeighborhoods}>Find</Button>
                  </InputGroup.Append>
              </InputGroup>
          
              <Card.Title>Neighborhoods in your area:</Card.Title>
              
                {this.state.nearby.map((place,idx)=><NHCard key={idx} place={place} handleClick={this.props.handleJoin} />)}
              

          </Card.Body>
        </Card>
        
        <Card>
          <Card.Body>
            <Card.Title>Create a new neighborhood</Card.Title>
            <Form onSubmit={this.handleSearch} style={{maxWidth:"14em"}}>
              <Form.Group controlId="searchString">
                <Form.Label>Search by City, Address, or Area</Form.Label>
                <Form.Control  type="text" value={this.state.searchString} onChange={this.handleChange} />
              </Form.Group>
              <Button type="submit">Search</Button>
            </Form>
          <Col lg="10">
          
            
              {this.state.searchResults.map((place)=><PlaceCard place={place} handleClick={this.handleNewNeighborhood}/>)}

            
          </Col>
          </Card.Body>
        </Card>
        <Container>
          

        </Container>
        
      </div>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    userId: state.user.id,
    token: state.user.token
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleJoin: (neighborhood) => dispatch(joinNeighborhood(neighborhood))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(NeighborhoodSearch)