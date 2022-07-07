import React, { Component } from "react";
import { connect } from 'react-redux';
import { WriterWrapper } from '../style';

class Writer extends Component {
    render() {
        return (
            <WriterWrapper></WriterWrapper>
        )
    }
}

export default connect(
    state => ({
        list: state.home.get('recommendList'),
    }),
    {

    }
)(Writer)