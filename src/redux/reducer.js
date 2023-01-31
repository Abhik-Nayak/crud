import * as type from "./actionType";

const initialState = {
    exchanges:[],
    cryptos:[],
    globaldata:[],
    trendcoins: [],
    loading: false,
};

const usersReducers = (state = initialState, action) => {
    switch (action.type) {
        case type.GET_COINS:
            return {
                ...state,
                cryptos: action.payload,
                loading: false
            }
        case type.GET_EXCHANGES:
            return {
                ...state,
                exchanges: action.payload,
                loading: false
            }
            
        case type.GET_GLOBALDATA:
            return{
                ...state,
                globaldata: action.payload,
                loading: false
            }
        case type.GET_TRENDINGCOINS:
            return{
               ...state,
               trendcoins: action.payload,
                loading: false
            }
        // case type.GET_SINGLE_USER:
        //     return{
        //         ...state,
        //         user: action.payload,
        //         loading: false
        //     }
        // case type.UPDATE_USER:
        //     return{
        //         ...state,
        //         loading: false
        //     }
        default:
            return state;
    }
};
export default usersReducers;