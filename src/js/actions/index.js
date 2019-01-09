
import { ADD_ARTICLE, GET_DATA, OPEN_MODAL, CLOSE_MODAL } from "../constants/action-types"

export function addArticle(payload) {
    return {
        type: ADD_ARTICLE,
        payload
    };
}

export function getData() {
    return {
        type: GET_DATA
    };
}

export function openDetailModal(userId) {
    return {
        type: OPEN_MODAL,
        userId
    };
}

export function closeDetailModal() {
    return {
        type: CLOSE_MODAL,
    };
}