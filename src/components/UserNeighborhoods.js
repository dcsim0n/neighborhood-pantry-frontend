import React from 'react'
import {connect} from 'react-redux';

import {Form} from 'react-bootstrap'
import { selectActiveNH } from '../actions/actions';

function UserNeighborhoods(props) {
    const selectNH = (e)=>{
        const id = e.target.value
        const newSelection = props.neighborhoods.all.find(nh=>{
            return nh.id === parseInt(id)
        })
        console.log("selecting", newSelection)
        props.selectNH(newSelection)
    }
    return (
        <div className="d-flex justify-content-center" >
            <div className="user-form">
                <Form.Group controlId="neighborhood-select">
                    <Form.Label>Neighborhoods you've joined</Form.Label>
                    <Form.Control as="select" onChange={selectNH}>
                        {props.neighborhoods.all.map((nh)=>(
                            <option value={nh.id}>{nh.name}</option>
                        ))}
                    </Form.Control>
                    
                </Form.Group>
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        neighborhoods: state.neighborhoods
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        selectNH: (nh) => dispatch(selectActiveNH(nh))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserNeighborhoods)