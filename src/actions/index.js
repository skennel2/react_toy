export const START_READ_ARTICLE_LIST = 'START_READ_ARTICLE_LIST';
export const FINISH_READ_ARTICLE_LIST = 'FINISH_READ_ARTICLE_LIST';

export const READ_ARTICLE_DETAIL = 'READ_ARTICLE_DETAIL';
export const READ_COMMENT_BY_ARTICLE_ID = 'READ_COMMENT_BY_ARTICLE_ID';
export const ADD_COMMENT = 'ADD_COMMENT';


export function startReadArticleList(page){
    return {
        type : START_READ_ARTICLE_LIST,
        page : page
    }    
}

export function finishReadArticleList(articleList){
    return {
        type : FINISH_READ_ARTICLE_LIST,
        articleList : articleList
    }    
}

export function readArticleDetail(id){
    return {
        type : READ_ARTICLE_DETAIL,
        id : id
    }
}

export function readCommentByArticleId(articleId){
    return {
        type : READ_COMMENT_BY_ARTICLE_ID,
        articleId : articleId
    }
}

export function addComment(payload){
    return {
        type : ADD_COMMENT,
        payload
    }
}