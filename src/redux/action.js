import * as types from "./actionType";
import * as api from "../Api";
import axios from "axios";

const getUser = (users) =>({
    type: types.GET_USERS,
    payload: users
})

const userDeleted = () =>({
    type: types.DELETE_USER
})

const userAdded = () =>({
    type: types.ADD_USER
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

export const deleteUsers =(ID)=>{
    console.log(ID);
    return function(dispatch) {
        axios.delete(`${api.getUers}/${ID}`)
        .then((resp) => {
            console.log("resp",resp);
            dispatch(userDeleted());
        })
        .catch((err) => console.log("err", err));

    }
}

export const addUser =(user)=>{
    return function(dispatch) {
        axios.post(api.getUers,user)
        .then((resp) => {
            console.log("resp",resp);
            dispatch(userAdded());
        })
        .catch((err) => console.log("err", err));
    };
};
