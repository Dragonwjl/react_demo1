import axios from "axios"
import { fromJS } from 'immutable'

export const changeFocused = data => ({ type: "changeFocused", data })



export const changeMouseIn = data =>
({
    type: "changeMouseIn",
    data
})


export const changePage = data =>({
    type:"changePage",
    data
})

export const getList = data => {
    return (dispatch) => {
        axios.get('api/headerList.json').then((res) => {
            const data = res.data;
            dispatch(changeList(data.data))
        }).catch((err) => {
            console.log(err);
        })
    }
}

const changeList = data => ({
    type: "changeList",
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 10)
})