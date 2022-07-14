import { connect } from "react-redux";
import {addPerson} from "../../redux/actions/person"
import PersonUI from "../../components/Person"

export default  connect (
    state=>({person:state.person,count:state.count}),
    {
        addPerson:addPerson
    }
)(PersonUI)




