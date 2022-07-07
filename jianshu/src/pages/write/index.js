import React, { PureComponent } from 'react';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';

class Write extends PureComponent {
	render() {
		const { loginStatus } = this.props;
		if (loginStatus) {
			return (
				<div>写文章页面</div>
			)
		}else {
			return <Navigate to='/login'/>
		}
	}
}


export default connect(
	state =>({
		loginStatus: state.login.get( 'login')
	}),
	null
)(Write);