import { GETORDERS } from "./types";

function adminReducer(state=[],action){
    switch(action.type){
        case GETORDERS:return action.payload
        default:return state
    }
}

export default adminReducer