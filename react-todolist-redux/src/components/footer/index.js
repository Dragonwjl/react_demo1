import React, { Component } from "react";
import { connect } from "react-redux"
import "./index.css"

import { changInputState, changFilterState } from "../../redux/actions/footer"
class Footer extends Component {

    changeStatus = (data, type) => {
        console.log("footer中的props", this.props);
        if (type === "btn-left") {
            this.props.footer[0].title = data
            this.props.changInputState(this.props.footer)
        }
        else {
            this.props.footer[1].title = data
            this.props.changFilterState(this.props.footer)
        }
    }


    render() {
        const { footer, table } = this.props
        // table
        return (
            <footer className="clearfix">
                <div className="pull-left buttons">
                    <div>
                        <a title="Add New" onClick={() => this.changeStatus("add", "btn-left")} className={footer[0].title === "add" ? "button add selected" : "button add"}></a>
                        <a title="Search" onClick={() => this.changeStatus("search", "btn-left")} className={footer[0].title === "search" ? "button search selected" : "button search"}></a></div>
                </div>
                <div className="pull-left" id="items">{table[0].value} items left</div>
                <div className="pull-right">
                    <ul className="filters  clearfix">
                        <li><a onClick={() => this.changeStatus("all")} className={footer[1].title === "all" ? "all selected" : "all"}>All</a></li>
                        <li><a onClick={() => this.changeStatus("active")} className={footer[1].title === "active" ? "active selected" : "active"}>Active</a></li>
                        <li><a onClick={() => this.changeStatus("completed")} className={footer[1].title === "completed" ? "completed selected" : "completed"}>Completed</a></li>
                    </ul>
                </div>
            </footer>
        )
    }

}

// export default Footer

export default connect(
    //store中存储的值
    state => ({
        footer: state.footer,
        table: state.table

    }),
    {
        changInputState: changInputState,
        changFilterState: changFilterState
    }

)(Footer)