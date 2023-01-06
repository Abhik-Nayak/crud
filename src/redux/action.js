import * as types from "./actionType";
import * as api from "../Api";
import axios from "axios";

const getUser = (users) =>({
    type: types.GET_USERS,
    payload: users
})

export const loadUsers =()=>{
    return function(dispatch) {
        axios.get(api.getUers)
        .then((resp) => {
            console.log("resp",resp);
            dispatch(getUser(resp.data));
        })
        .catch((err) => console.log("err", err));

    }
}