import * as type from "./actionType";

const initialState = {
    users: [],
    user: {},
    loading: false,
};

const usersReducers = (state = initialState, action) => {
    switch (action.type) {
        case type.GET_USERS:
            return {
                ...state,
                users: action.payload,
                loading: false
            }
        case type.DELETE_USER:
            return{
                ...state,
                loading: false
            }
        case type.ADD_USER:
            return{
               ...state,
                loading: false
            }
        case type.GET_SINGLE_USER:
            return{
                ...state,
                user: action.payload,
                loading: false
            }
        case type.UPDATE_USER:
            return{
                ...state,
                loading: false
            }
        default:
            return state;
    }
};
export default usersReducers;