import C from '../constants'
import {fetchAll,postOne,deleteOne} from '../fetch'

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
            dispatch({type: C.SET_USER_NEIGHBORHOODS, payload: data})
    })}
}

export const getNHInfo =() =>{
    return (dispatch,getState)=>{
        const{id} = getState().neighborhoods.selected
        const {token} = getState().user
        fetchAll(`${C.API_ROOT}/neighborhoods/${id}?token=${token}`,(data)=>{
            console.log(data)
            dispatch({type: C.UPDATE_ITEMS, payload: data.items})
            dispatch({type: C.UPDATE_REQUESTS, payload: data.requests})
        })
    }
}

export const getUserInfo = () =>{
    
    return (dispatch,getState)=> {
        const {id, token} = getState().user
        fetchAll(`${C.API_ROOT}/users/${id}?token=${token}`,(info)=>{
            dispatch({type: C.USER_INFO, payload: info})
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
                console.log('data :', data);
                dispatch({type:C.SET_USER_NEIGHBORHOODS,payload:data})
            }
        )
    }
}
export const selectActiveNH = (nh)=>{
    return {
        type:C.SELECT_NEIGHBORHOOD,
        payload: nh
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
            dispatch(getNHInfo())
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
            dispatch(getNHInfo())
        })
    }
  }

  export const deleteItem = (id)=>{
        return(dispatch,getState) =>{
            const token = getState().user.token
            deleteOne(`${C.API_ROOT}/pantry_items`,`${id}?token=${token}`,(data)=>{
                dispatch(getNHInfo())
            })
        }
  }
  export const deleteReq = (id)=>{
    return(dispatch,getState) =>{
        const token = getState().user.token
        deleteOne(`${C.API_ROOT}/pantry_requests`,`${id}?token=${token}`,(data)=>{
            dispatch(getNHInfo())
        })
    }
  }
  export const logOut = ()=>{
      return {type:C.LOG_OUT}
  }