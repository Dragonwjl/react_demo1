
const initState = [{type:1,title:"add"},{type:2,title:"all"}];
export default function footerReducer(preState = initState, action) {
    const { type, data } = action
    switch (type) {
        case "changInputState":
            return [...data]
        case "changFilterState":
            return [...data]
        default:
            return preState
    }
}