
export const createIncrementAction = data => ({ type: "increment", data })

export const createDecrementAction = data => ({ type: "decrement", data })

//异步action
export const createAnscIncrementAction = (data, time) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(createIncrementAction(data))
        }, time)
    }
}