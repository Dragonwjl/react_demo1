import { fromJS } from 'immutable';

const defaultState = fromJS({
	login: false
});

export default function loginReducer (state = defaultState, action)   {
	switch (action.type) {
		case "changeLogin":
			return state.set('login', action.value);
		case "logout":
			return state.set('login', action.value);
		default:
			return state;
	}
}