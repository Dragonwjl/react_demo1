const initState = [{type:"num",value:0},{type:"data",value:[]}];
export default function tableReducer(preState = initState, action) {
    const { type, data } = action
    switch (type) {
        case 'setListNum':
            return [...data]
            
        case "setListData":
            console.log("setListData",data);
            return [...data]

        default:
            return preState;
    }
}