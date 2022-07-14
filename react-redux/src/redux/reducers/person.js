
const initState = [{id:1111,name:"tom",age:23}]
export default function personReducer(preState = initState, action) {
    const { type, data } = action
    switch (type) {
        case "addPerson":
            return [data, ...preState]
        default:
            return preState
    }

}