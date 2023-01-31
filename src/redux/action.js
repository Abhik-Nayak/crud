import * as types from "./actionType";
import * as api from "../Api";
import axios from "axios";


const getExchanges = (coin) => ({
    type: types.GET_EXCHANGES,
    payload: coin
})

const getCoins = (coin) => ({
    type: types.GET_COINS,
    payload: coin
})

const getGlobaldata = (data) => ({
    type: types.GET_GLOBALDATA,
    payload: data
})

const getTrendingcoins = (coins) =>({
    type:types.GET_TRENDINGCOINS,
    payload: coins
})

export const loadTrendingcoins = () =>{
    return function (dispatch){
        axios.get(api.getTrendingcoins)
            .then((resp)=>{
                dispatch(getTrendingcoins(resp.data))
            })
    }
}
export const loadCoins = () =>{
    return function (dispatch){
        axios.get(api.getCoins)
            .then((resp)=>{
                dispatch(getCoins(resp.data))
            })
    }
}
export const loadExchanges = () =>{
    return function (dispatch){
        axios.get(api.getExchanges)
            .then((resp)=>{
                // console.log(resp);
                dispatch(getExchanges(resp.data))
            })
    }
}

export const loadGlobaldata = ()=>{
    return function (dispatch){
        axios.get(api.getGlobaldata)
            .then((resp)=>{
                dispatch(getGlobaldata(resp.data.data))
            })
    }
}

// export const getSingleuser = (id) => {
//     return function (dispatch) {
//         axios.get(`${api.getUers}/${id}`)
//             .then((resp) => {
//                 dispatch(singleUser(resp.data));
//             })
//             .catch((err) => console.log("err", err));
//     }
// }

// export const deleteUsers = (ID) => {
//     console.log(ID);
//     return function (dispatch) {
//         axios.delete(`${api.getUers}/${ID}`)
//             .then((resp) => {
//                 dispatch(userDeleted());
//             })
//             .catch((err) => console.log("err", err));

//     }
// }

// export const addUser = (user) => {
//     return function (dispatch) {
//         axios.post(api.getUers, user)
//             .then((resp) => {
//                 console.log("resp", resp);
//                 dispatch(userAdded());
//             })
//             .catch((err) => console.log("err", err));
//     };
// };

// export const updateUser = (ID,user) => {
//     return function (dispatch) {
//         axios.put(`${api.getUers}/${ID}`,user)
//             .then((resp) => {
//                 dispatch(userUpdated())
//             })
//             .catch((err) => console.log("err", err));
//     };
// }