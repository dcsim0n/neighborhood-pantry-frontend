import C from '../constants'
import {fetchAll,postOne} from '../fetch'

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
export const joinNeighborhood = (neighborhood)=>{
    return (dispatch,getState)=>{
        const {id, token}= getState().user
        const body = {
            token: token,
            neighborhood_id: neighborhood.id
        }
        postOne(`${C.API_ROOT}/users/${id}/neighbors`,body,(data)=>{
                return dispatch({type:C.SET_USER_NEIGHBORHOODS,payload:data})
            }
        )
    }
  }

  export const newPR = (pantryRequest)=>{
      // Make a new Pantry Request
      
      console.log("Making a new Pantry Request")
      return (dispatch,getState) =>{
        const {id, token} = getState().user
        const body ={
            token: token,
            pantry_request: {
                user_id: id,
                ...pantryRequest
            }
        }
        postOne(`${C.API_ROOT}/users/${id}/pantry_requests`,body,(data)=>{
            return dispatch({type:C.UPDATE_REQUESTS, payload:data})
        })
    }

  }

  export const newPI = (pantryItem)=>{
      console.log("Making new pantry item..")
    return (dispatch,getState) =>{
        const {id, token} = getState().user
        const body ={
            token: token,
            pantry_item: {
                user_id: id,
                ...pantryItem
            }
        }
        postOne(`${C.API_ROOT}/users/${id}/pantry_items`,body,(data)=>{
            return dispatch({type:C.UPDATE_ITEMS, payload:data})
        })
    }
  }