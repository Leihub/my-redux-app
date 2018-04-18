import {combineReducers} from 'redux'
import {
    SELECT_SUBREDDIT,
    REQUEST_POSTS,
    RECEIVE_POSTS,
    INVALIDATE_SUBREDDIT
}from '../action'

function selectedSubreddit(state='reactjs',action){
  switch(action.type){
    case SELECT_SUBREDDIT:
      return action.subreddit;
    default:
      return state
  }
}

function posts(state={
  isFetching:false,
  didInvalidate:false,
  items:[]
},action){
  switch(action.type){
    case REQUEST_POSTS:
     return Object.assign({},state,{
      isFetching:true,
      didInvalidate:false
     })
    case RECEIVE_POSTS:
     return Object.assign({},state,{
       isFetching:false,
       didInvalidate:false,
       items:action.posts,
       lastUpdated:action.receiveAt
     })
    case INVALIDATE_SUBREDDIT:
     return Object.assign({},state,{
       didInvalidate:true
     })
  }
}

function postsBySubreddit(state={},action){
  switch(action.type){
    case REQUEST_POSTS:
    case RECEIVE_POSTS:
    case INVALIDATE_SUBREDDIT:
      return Object.assign({},state,{
        [action.subreddit]:posts(action.subreddit,action)
      })
    default:
      return state
  }
}

const rootReducers = combineReducers({
  postsBySubreddit,
  selectedSubreddit
})
export default rootReducers