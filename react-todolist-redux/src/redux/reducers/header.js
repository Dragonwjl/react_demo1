const initState = '';
export default function headerReducer(preState = initState, action) {
    const { type, data } = action
    switch (type) {
        case 'setSearchData':

            return data;

        default:
            return preState;
    }
}