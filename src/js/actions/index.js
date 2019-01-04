
import { ADD_ARTICLE, GET_DATA, DATA_LOADED } from "../constants/action-types"

export function addArticle(payload) {
    return { type: ADD_ARTICLE, payload }
}

export const getData = () => ({
    type: GET_DATA
});