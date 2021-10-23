import axios from "axios";
import statics from "./statics"

export const addTask = (data) => {
    return new Promise((resolve, reject)=>{
        let url = `${statics.API_URL}/tasks/add`;
        let headers = {};
        axios.post(url,{data},headers)
            .then(res => {
                resolve(res.data.data[0])
            })
    })
}
export const getTasks = () => {
    return new Promise((resolve, reject)=>{
        let url = `${statics.API_URL}/tasks/all`;
        axios.get(url)
            .then(function (res) {
                resolve(res.data.data)
            })
            .catch((err)=>{
                resolve([])
            })
    })
}
export const deleteTask = (id) => {
    return new Promise((resolve, reject)=>{
        let url = `${statics.API_URL}/tasks/delete`;
        let headers = {};
        axios.post(url,{id},headers)
            .then(res => {
                resolve()
            })
    })
}
export const updateTask = (data) => {
    return new Promise((resolve, reject)=>{
        let url = `${statics.API_URL}/tasks/update`;
        let headers = {};
        axios.put(url,{data},headers)
            .then(res => {
                resolve(data)
            })
    })
}