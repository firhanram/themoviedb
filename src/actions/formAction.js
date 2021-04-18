import { NEXT_FORM, PREV_FORM } from "./types"

export const nextForm = () => (dispatch) => {
    dispatch({type: NEXT_FORM})
}

export const prevForm = () => (dispatch) => {
    dispatch({type: PREV_FORM})
}