import { fromJS } from 'immutable'

const initState = fromJS({
	topicList: [{
		id: 1,
		title: "社会热点",
		imgUrl: ""
	}],
	articleList: [],
	recommendList: [],
	articlePage: 1,
	showScroll: false
})
const changeHomeData = (state, action) => {
	return state.merge({
		topicList: fromJS(action.topicList),
		articleList: fromJS(action.articleList),
		recommendList: fromJS(action.recommendList)
	});
};

const addArticleList = (state, action) => {
	return state.merge({
		'articleList': state.get('articleList').concat(action.list),
		'articlePage': action.nextPage
	});
};

export default function homeReducer(preState = initState, action) {
	switch (action.type) {
		case "changeHomeData":
			return changeHomeData(preState, action);
		case "addArticleList":
			return addArticleList(preState, action);
		case "toggleTopShow":
			return preState.set('showScroll', action.show);
		default:
			return preState;
	}

}