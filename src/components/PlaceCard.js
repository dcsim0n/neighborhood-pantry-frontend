import React from 'react'
import {Card,Button,Col} from 'react-bootstrap';
import {postOne} from '../fetch';
import C from '../constants'
export default function PlaceCard(props) {
    const handleClick = (place)=>{
        const {data } = place
        const newNeighborhood = {
            name: data.display_name,
            latitude: data.lat,
            longitude: data.lon
        }
        postOne(`${C.API_ROOT}/neighborhoods`,
            newNeighborhood,
            (data)=>{console.log('data', data)}
        )
    }
  return (
    <Col>
        <Card style={{width: '14em'}}>
            <Card.Body>
                <Card.Title>{props.place.data.display_name}</Card.Title>
                <Button onClick={handleClick}>Create</Button>
            </Card.Body>
        </Card>
    </Col>
  )
}