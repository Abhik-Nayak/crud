import * as types from "./actionType";
import * as api from "../Api";
import axios from "axios";

const getUser = (users) => ({
    type: types.GET_USERS,
    payload: users
})

const userDeleted = () => ({
    type: types.DELETE_USER
})

const userAdded = () => ({
    type: types.ADD_USER
})

const singleUser = (users) => ({
    type: types.GET_SINGLE_USER,
    payload: users
})

const userUpdated = () => ({
    type: types.UPDATE_USER,
})

export const loadUsers = ()  => {
    return function (dispatch) {
        axios.get(api.getUers)
            .then((resp) => {
                dispatch(getUser(resp.data));
            })
            .catch((err) => console.log("err", err));
    }
}

export const getSingleuser = (id) => {
    return function (dispatch) {
        axios.get(`${api.getUers}/${id}`)
            .then((resp) => {
                dispatch(singleUser(resp.data));
            })
            .catch((err) => console.log("err", err));
    }
}

export const deleteUsers = (ID) => {
    console.log(ID);
    return function (dispatch) {
        axios.delete(`${api.getUers}/${ID}`)
            .then((resp) => {
                dispatch(userDeleted());
            })
            .catch((err) => console.log("err", err));

    }
}

export const addUser = (user) => {
    return function (dispatch) {
        axios.post(api.getUers, user)
            .then((resp) => {
                console.log("resp", resp);
                dispatch(userAdded());
            })
            .catch((err) => console.log("err", err));
    };
};

export const updateUser = (ID,user) => {
    return function (dispatch) {
        axios.put(`${api.getUers}/${ID}`,user)
            .then((resp) => {
                dispatch(userUpdated())
            })
            .catch((err) => console.log("err", err));
    };
}