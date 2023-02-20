import { API_CALL_REQUEST, API_CALL_SUCCESS, API_CALL_FAILURE } from "../actions/actions"

const initialState = {
    fetching: false,
    token: null,
    error: null,
    logged: false,
}

export const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case API_CALL_REQUEST:
            return {
                ...state,
                fetching: true,
                token: null,
                error: null,
                logged: false
            }
        case API_CALL_SUCCESS: {
            return {
                ...state,
                fetching: false,
                token: action.token,
                error: null,
                logged: true
            }
        }
        case API_CALL_FAILURE: {
            return {
                ...state,
                fetching: false,
                token: null,
                error: action.error,
                logged: false
            }
        }
        default: 
            return state;
    }
}