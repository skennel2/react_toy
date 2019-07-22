import { START_READ_ARTICLE_LIST, FINISH_READ_ARTICLE_LIST } from '../actions'
import { combineReducers } from 'redux';

const initialState = {
    articleList : [],
    isLoading : false,
    pageNumber : 0,
};

const articleListReducer = function (state = initialState, action){
    if(action.type === START_READ_ARTICLE_LIST){
        return {
            articleList : state.articleList,
            isLoading : true,
            pageNumber : state.pageNumber + 1
        }
    } else if(action.type === FINISH_READ_ARTICLE_LIST){
        return {
            articleList : state.articleList.concat(action.articleList),
            isLoading : false,
            pageNumber : state.pageNumber
        }
    } else {
        return state;
    }
}

const reducers = combineReducers({
    articleListReducer
}); 

export default reducers;

// articleId: 3
// commentId: 17
// contents: "rgrgrg"
// createdDateTime: "2019-07-22T14:20:40.35"
// writerId: 1
// writerLoginId: "skennel"