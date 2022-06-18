import React from "react";
import "./index.css"

class Header extends React.Component {
    


    render() {
        const { status ,onkeydown } = this.props

        return (
            <header>
                <h1 className="title">To Do Tasks</h1>
                {status ==="add"? <input type="text" onKeyDown={(e) =>onkeydown(e)}  className="form-control add-input" placeholder="Add New" required />: null}
               {status === "search" ?<input type="text" onKeyDown={(e) =>onkeydown(e)}   className="form-control search-input" placeholder="Srearch" required />:null}
            </header>
        )
    }
}

export default Header