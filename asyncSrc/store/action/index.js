import fetch from 'cross-fetch';

export const REQUEST_POSTS  = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT'
export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT'

export function selectSubreddit(subreddit){
  return{
    type:SELECT_SUBREDDIT,
    subreddit
  }
}

export function invalidateSubreddit(subreddit){
  return{
    type:INVALIDATE_SUBREDDIT,
    subreddit
  }
}

export function requestPosts(subreddit){
  return{
    type:REQUEST_POSTS,
    subreddit
  }
}
export function receivePosts(subreddit,json){
  return{
    type:RECEIVE_POSTS,
    subreddit,
    posts:json.data.children.map(child => child.data),
    receiveAt:Date.now()
  }
}

export function fetchPosts(subreddit){
  return dispatch => {
    dispatch(requestPosts(subreddit))
    return (async () => {
      try {
        const res = await fetch(`https://www.reddit.com/r/${subreddit}.json`);
        if (res.status >= 400) {
          throw new Error("Bad response from server");
        }
        const user = await res.json();
        dispatch(receivePosts(subreddit,user))
      } catch (err) {
        console.error(err);
      }
    })();
  }
}
export function shouldFetchPosts(state,subreddit){
  const posts = state.postsBySubreddit[subreddit]
  if(!posts){
    return true
  }else if(posts.isFetching){
    return false
  }else{
    return posts.didInvalidate
  }
}

export function fetchPostsIfNeeds(subreddit){
  return(dispatch,getState)=>{
    if(shouldFetchPosts(getState(),subreddit))
      return dispatch(fetchPosts(subreddit))
  }
}