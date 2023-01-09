import axios from "axios";
const api="http://localhost:5000";

export const getUers=`${api}/user`;

// const url = "http://localhost:5000/user";


// export const getUse =() =>{ axios.get(url).then((res) =>{return res})};
// export const createUser =(user) =>{ axios.post(url,user).then((res) =>{return res})};
// export const deleteUser =(id) =>{ axios.delete(`${url}/${id}`).then((res) =>{return res})};
// export const getSingleuser = (id) =>{ axios.get(`${url}/${id}`).then((res) =>{return res})};
// export const updateUser = (id,user) =>{ axios.put(`${url}/${id}`,user).then((res) =>{return res})};