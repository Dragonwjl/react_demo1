import React from "react";
import { connect } from "react-redux";
import "./index.css"
import { setListData } from "../../redux/actions/table"
import { setSearchData } from "../../redux/actions/header"

class Header extends React.Component {
    onkeydown = (e) => {
        if (e.keyCode === 13 && this.props.footer[0].title === "add") {
            if (e.target.value != '') {
                this.props.table[1].value.push({ title: e.target.value, done: false, id:this.props.table[1].value.length  })
                this.props.setListData(this.props.table)

            }
            e.target.value = ''
        }
        else if (e.keyCode === 13 && this.props.footer[0].title === "search") {

            console.log("e.target.value", e.target.value);
            this.props.setSearchData(e.target.value)
        }

    }
    render() {
        const { footer } = this.props

        return (
            <header>
                <h1 className="title">To Do Tasks</h1>
                {footer[0].title === "add" ? <input type="text" onKeyDown={(e) => this.onkeydown(e)} className="form-control add-input" placeholder="Add New" required /> : null}
                {footer[0].title === "search" ? <input type="text" onKeyDown={(e) => this.onkeydown(e)} className="form-control search-input" placeholder="Srearch" required /> : null}
            </header>
        )
    }
}

export default connect(
    //store中存储的值
    state => ({
        header: state.header,
        footer: state.footer,
        table: state.table
    }),
    {

        setListData: setListData,
        setSearchData: setSearchData
    }
)(Header)