import C from '../constants'
import {fetchAll} from '../fetch'

export const startFetch = () =>{
    return {type: C.FETCHING, payload: true}
}
export const completeFetch = () =>{
    return {type: C.FETCHING, payload: false}
}

export const getNeighborhoods = () => {
    return (dispatch,getState)=> {
        const {id, token} = getState().user
        fetchAll(`${C.API_ROOT}/users/${id}/neighborhoods?token=${token}`,(data)=>{
        return dispatch({type: C.SET_USER_NEIGHBORHOODS, payload: data})
    })}
}

export const getUserInfo = () =>{
    
    return (dispatch,getState)=> {
        const {id, token} = getState().user
        fetchAll(`${C.API_ROOT}/users/${id}?token=${token}`,(info)=>{
        return dispatch({type: C.USER_INFO, payload: info})
    })}
}