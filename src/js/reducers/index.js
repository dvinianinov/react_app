import { ADD_ARTICLE, GET_DATA, DATA_LOADED, OPEN_MODAL, CLOSE_MODAL } from "../constants/action-types";

const initialState = {
    articles: [],
    loading: false,
    posts: [],
    modalOpen: false
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_ARTICLE:
            return Object.assign({}, state, {
                articles: state.articles.concat(action.payload)
            });
        case GET_DATA:
            return { ...state, loading: true };
        case DATA_LOADED:
            return { ...state, posts: action.json, loading: false };
        case OPEN_MODAL:
            return { ...state, modalOpen: true };
        case CLOSE_MODAL:
            return { ...state, modalOpen: false };
        default:
            return state;
    }
}

export default rootReducer;