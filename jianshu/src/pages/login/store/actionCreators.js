import axios from 'axios';

const  changeLogin = () => ({
	type: "changeLogin",
	value: true
})

export const logout = () => ({
	type: "logout",
	value: false
})

export const login = (accout, password) => {
	return (dispatch) => {
		axios.get('/api/login.json?account=' + accout + '&password=' + password).then((res) => {
			const result = res.data.data;
			if (result) {
				dispatch(changeLogin())
			}else {
				alert('登陆失败')
			}
		})
	}
}