import React, { Component } from "react";
import "./index.css"
class Footer extends Component {



    render() {
        const { status, onStatusChange ,filter} = this.props
    
        return (
            <footer className="clearfix">
                <div className="pull-left buttons">
                <div>
                    <a title="Add New" onClick={() => onStatusChange("add","btn-left")} className={status === "add" ? "button add selected" : "button add"}></a>
                    <a title="Search" onClick={() => onStatusChange("search","btn-left")} className={status === "search" ? "button search selected" : "button search"}></a></div>
                </div>
                {/* <div className="pull-left" id="items">{ } items left</div> */}
                <div className="pull-right">
                    <ul className="filters  clearfix">
                        <li><a onClick={()=>onStatusChange("all")} className= {filter ==="all" ?"all selected" :"all"}>All</a></li>
                        <li><a onClick={()=>onStatusChange("active")}  className={filter === "active"?"active selected":"active" }>Active</a></li>
                        <li><a onClick={()=>onStatusChange("completed")}  className={filter ==="completed" ?"completed selected":"completed" }>Completed</a></li>
                    </ul>
                </div>
            </footer>
        )
    }

}

export default Footer