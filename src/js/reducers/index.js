import { ADD_ARTICLE, GET_DATA, DATA_LOADED } from "../constants/action-types";

const initialState = {
    articles: [],
    loading: false,
    posts: []
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
        default:
            return state;
    }
}

export default rootReducer;