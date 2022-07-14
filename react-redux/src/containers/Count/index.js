import CountUI from "../../components/Count"
import { createIncrementAction, createDecrementAction, createAnscIncrementAction } from "../../redux/actions/count"
import { connect } from 'react-redux'



//container组件给UI组件传递状态映射
// function mapStateToProps(state) {
//     return { count: state }
// }
//container组件给UI组件传递操作状态方法映射
// function mapDispatchToProps(dispatch) {
//     return {
//         increment: (num) => {
//             dispatch(createIncrementAction(num))
//         },
//         decrement: (num) => {
//             dispatch(createDecrementAction(num))
//         },

//         incrementAsync: (num,time) => {
//             dispatch(createAnscIncrementAction(num,time))
//         }

//     }
// }
// 一般方式
// export default connect(mapStateToProps, mapDispatchToProps)(CountUI)

// 简写方式
export default connect(
    state => ({ count: state.count ,personNum:state.person.length}),
    {
        increment: createIncrementAction,
        decrement: createDecrementAction,
        incrementAsync: createAnscIncrementAction
    }
)(CountUI)