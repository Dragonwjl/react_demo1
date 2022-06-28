
const initSatae = 0;

export default function countReducer(preState = initSatae, action) {
    const { type, data } = action
    switch (type) {
        case "increment":
            return preState + data
        case "decrement":
            return preState - data
        default:
            return preState
    }
}