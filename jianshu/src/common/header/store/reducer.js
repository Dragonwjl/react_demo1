import { fromJS } from 'immutable'
const initState =
    fromJS(
        {
            focused: false,
            mouseIn: false,
            list: [],
            page: 1,
            totalPage: 1
        })


export default function Reducer(preState = initState, action) {
    const { type, data, totalPage } = action

    switch (type) {
        case "changeFocused":
            return preState.set('focused', data.focused)
        // return datas;

        case "changeList":
            return preState.set('list', data).set("totalPage", totalPage)

        case "changeMouseIn":

            return preState.set('mouseIn', data.mouseIn);

        case "changePage":
            return preState.set('page', data.page);

        default:
            return preState;
    }

}