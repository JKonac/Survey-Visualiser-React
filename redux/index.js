import {createStore} from "redux"

export function loadData(surveyData) {
    return {
        type: "LOAD_DATA",
        payload: surveyData,
    }
}

export function isLoaded(bool) {
    return {
        type: "IS_LOADED",
        isLoaded: bool
    }
}

const initialState = {
    isLoaded: false
}

export function reducer(state = initialState, action) {
    switch(action.type) {

        case "LOAD_DATA":
            const loadedState = {...state, ...action.payload}
            for(let sur of loadedState.surveys){
                console.log(sur.surveyId)
            }
            console.log(loadedState.surveys)
            return {
                ...loadedState,

            }
        case "IS_LOADED":
            return {
                ...state,
                isLoaded: true,
            }
        default:
            return state
            
    }
}

const store = createStore(reducer)

export default store
