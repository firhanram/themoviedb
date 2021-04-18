import { 
    NEXT_FORM,
    PREV_FORM
} from "../actions/types"

const INITIAL_STATE = {
   step: 1
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case NEXT_FORM:
            return {
                ...state,
                step: state.step + 1
            }
        case PREV_FORM:
            return {
                ...state,
                step: state.step - 1
            }
        default:
            return state
    }
}