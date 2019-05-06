import React, { Component } from 'react'
import {connect} from 'react-redux';

import UserFormFields from './UserFormFields'
class EditUser extends Component {
    handleSubmit = (userData)=>{
        console.log('userData :', userData);
        
    }
    render() {
        return (
        <div className="d-flex justify-content-center">
            <UserFormFields
                user={this.props.user}
                formAction={this.handleSubmit}
                title="Edit Account Settings"
                buttonLabel="Save" />

        </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        user: state.user
    }
}
export default connect(mapStateToProps)(EditUser)