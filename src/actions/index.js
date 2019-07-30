import API from '../utils/API'

export const START_READ_ARTICLE_LIST = 'START_READ_ARTICLE_LIST';
export const FINISH_READ_ARTICLE_LIST = 'FINISH_READ_ARTICLE_LIST';

export const NEXT_PAGE = 'NEXT_PAGE';
export const PREVIOUS_PAGE = 'PREVIOUS_PAGE';

export const START_READ_ARTICLE_DETAIL = 'START_READ_ARTICLE_DETAIL';
export const FINISH_READ_ARTICLE_DETAIL = 'FINISH_READ_ARTICLE_DETAIL';

export const START_READ_COMMENT_BY_ARTICLE_ID = 'READ_COMMENT_BY_ARTICLE_ID';
export const FINISH_READ_COMMENT_BY_ARTICLE_ID = 'FINISH_READ_COMMENT_BY_ARTICLE_ID';

export const START_ADD_COMMENT = 'START_ADD_COMMENT';
export const FINISH_ADD_COMMENT = 'FINISH_ADD_COMMENT';


// 이파일에는 action들이 정의되어있다.
// action 이란 리덕스 스토어를 변경하는 type이란 속성을 가진 객체를 말한다.

export function startReadArticleList(){
    return {
        type : START_READ_ARTICLE_LIST
    }    
}

export function finishReadArticleList(articleList){
    return {
        type : FINISH_READ_ARTICLE_LIST,
        articleList : articleList
    }    
}

export function nextPage(){
    return {
        type : NEXT_PAGE,
    }    
}

export function previousPage(){
    return {
        type : PREVIOUS_PAGE,
    }    
}

export function startReadArticleDetail(){
    return {
        type : START_READ_ARTICLE_DETAIL,
    }
}

export function finishArticleDetail(article){
    return {
        type : FINISH_READ_ARTICLE_DETAIL,
        article : article
    }
}

export function startReadCommentByArticleId(){
    return {
        type : START_READ_COMMENT_BY_ARTICLE_ID,
    }
}

export function finishReadCommentByArticleId(commentList){
    return {
        type : FINISH_READ_COMMENT_BY_ARTICLE_ID,
        commentList : commentList
    }
}

export function startAddComment(){
    return {
        type : START_ADD_COMMENT
    }
}

export function finishAddComment(comment){
    return {
        type : FINISH_ADD_COMMENT,
        comment : comment
    }
}

export function fetchArticleList(pageNumber){
    const size = 30;
    
    return (dispatch)=>{
        dispatch(startReadArticleList());

        API.get('/api/article/list/' + pageNumber +'/'+ size)
            .then((response)=>{
                dispatch(finishReadArticleList(response.data));
            });
    }
}

export function fetchArtcleDetail(articleId){
    return (dispatch) => {
        dispatch(startReadArticleDetail());
        dispatch(startReadCommentByArticleId());
  
        API.get('/api/article/' + articleId).then(result => {
          API.get('/api/comment/byarticle/' + articleId).then(result2 => {
            dispatch(finishArticleDetail(result.data));
            dispatch(finishReadCommentByArticleId(result2.data));
          }).catch(ex =>{
            console.log(ex);
          });
        }).catch(ex =>{
          console.log(ex);
        });
    }
}

export function submitNewComment(newComment){
    return (dispatch)=>{

        dispatch(startAddComment());

        API.put("/api/comment", {
            writer_id: 1,
            article_id: newComment.articleId,
            contents: newComment.newComment
        }).then(() => {
            dispatch(startReadCommentByArticleId());
            API.get('/api/comment/byarticle/' + newComment.articleId).then(result => {
                dispatch(finishReadCommentByArticleId(result.data));
            }).catch(ex =>{
            console.log(ex);
            });
        });
    }
}