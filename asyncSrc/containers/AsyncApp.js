import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Picker from '../conponents/Picker'
import Posts from '../conponents/Posts'
import {
  selectSubreddit,
  invalidateSubreddit,
  fetchPostsIfNeeds
} from '../store/action'

class AsyncApp extends Component {
  constructor(props){
    super(props)
    this.handleChange.bind(this)
    this.handleRefreshClick.bind(this)
  }
  componentDidMount(){
    const {selectedSubreddit,dispatch} = this.props
    dispatch(fetchPostsIfNeeds(selectedSubreddit))
  }
  componentWillReceiveProps(nextProps){
    if (nextProps.selectedSubreddit !== this.props.selectedSubreddit) {
      const { dispatch, selectedSubreddit } = nextProps
      dispatch(fetchPostsIfNeeds(selectedSubreddit))
    }
  }
  handleChange(nextSubreddit){
    this.props.dispatch(selectSubreddit(nextSubreddit))
  }
  handleRefreshClick(e){
    e.preventDefault()
    const {selectedSubreddit,dispatch} = this.props
    dispatch(invalidateSubreddit(selectedSubreddit))
    dispatch(fetchPostsIfNeeds(selectedSubreddit))
  }
  render() {
    const {posts,lastUpdated,selectedSubreddit,isFetching} = this.props
    return (
      <div>
        <Picker value={selectedSubreddit} options={[ 'reactjs', 'frontend' ]}
        _onChange={this.handleChange}  />
        <p>
          {lastUpdated && <span>
            Last updated at {new Date(lastUpdated).toLocaleTimeString()}.
              {' '}
          </span>
          }
          {!isFetching && <a href="#" onClick={this.handleRefreshClick}>Refresh</a>}
          
       
          {posts.length>0 && <div style={{ opacity: isFetching ? 0.5 : 1 }}>
            <Posts posts={posts}/>
          </div>}
        </p>

      </div>
    );
  }
}
function mapStateToProps(state) {
  const { selectedSubreddit, postsBySubreddit } = state
  const {
    isFetching,
    lastUpdated,
    items: posts
  } = postsBySubreddit[selectedSubreddit] || {
    isFetching: true,
    items: []
  }

  return {
    selectedSubreddit,
    posts,
    isFetching,
    lastUpdated
  }
}
AsyncApp.propTypes = {
  selectedSubreddit:PropTypes.string.isRequired,
  posts:PropTypes.array.isRequired,
  isFetching:PropTypes.bool.isRequired,
  lastUpdated:PropTypes.number,
  dispatch:PropTypes.func.isRequired
}

export default connect(mapStateToProps)(AsyncApp)