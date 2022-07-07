import { fromJS } from 'immutable';

const defaultState = fromJS({
	title: '',
	content: ''
});

export default function detailReducer (state = defaultState, action) {

	switch(action.type) {
		case 'changeDetail':
			return state.merge({
				title: action.title,
				content: action.content
			})
		default:
			return state;
	}
}