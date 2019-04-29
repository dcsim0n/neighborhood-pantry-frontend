import React, { Component } from 'react'
import {fetchAll} from '../fetch';
import C from '../constants'
import {Card, Container, Row, Col, Form, Button} from 'react-bootstrap'

export default class NeighborhoodSearch extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       searchString:"",
       searchResults: []
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

  render() {
    return (
      <div>
        <Card>
          <Card.Body>
            <Card.Title>
              Neighborhoods Close to you:
            </Card.Title>

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
