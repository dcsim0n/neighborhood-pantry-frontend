import React, { Component } from 'react'
import {fetchAll} from '../fetch';
import C from '../constants'
import {Card, Container, Row, Col, Form, Button, InputGroup, FormControl} from 'react-bootstrap'
import PlaceCard from '../components/PlaceCard'

export default class NeighborhoodSearch extends Component {
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
  }

  componentDidMount(){
    fetchAll(`${C.API_ROOT}/neighborhoods/search?user_id=${7}&radius=${this.state.searchRadius}`,(data)=>{
      this.setState({nearby: data})
    })
  }

  render() {
    return (
      <div>
        <Card>
          <Card.Body>
              <Card.Title>Find your Neighborhood</Card.Title>
              <InputGroup as={Col} lg="2">
                <InputGroup.Prepend>
                  <Button onClick={this.down}>-</Button>
                </InputGroup.Prepend>
                <FormControl value={this.state.searchRadius} readOnly />
                <InputGroup.Append>
                  <Button onClick={this.up}>+</Button>
                </InputGroup.Append>
              </InputGroup>
              <Card.Title>Neighborhoods in your area:</Card.Title>
              <Col lg="8">
                {this.state.nearby.map((place)=><PlaceCard place={place} />)}
              </Col>

          </Card.Body>
        </Card>
        
        <Card>
          <Card.Body>
            <Card.Title>Create a new neighborhood</Card.Title>
          <Form onSubmit={this.handleSearch}>
            <Form.Group controlId="searchString">
              <Form.Label>Search by City, Address, or Area</Form.Label>
              <Form.Control type="text" value={this.state.searchString} onChange={this.handleChange} />
            </Form.Group>
            <Button type="submit">Search</Button>
          </Form>
          </Card.Body>
        </Card>
        <Container>
          
          {this.state.searchResults.map((place)=><Row><Col>{place.data.display_name}</Col></Row>)}

        </Container>
        
      </div>
    )
  }
}
