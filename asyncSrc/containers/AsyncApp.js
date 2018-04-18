import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Picker from '../conponents/Picker'
import Posts from '../conponents/Posts'
import {
  fetchPosts,
  shouldFetchPosts,
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
    if(nextProps.selectedSubreddit != this.state.selectedSubreddit){
      const {dispatch,selectedSubreddit} = nextProps
      dispatch(fetchPostsIfNeeds(selectedSubreddit))
    }
  }
  handleChange(nextSubreddit){
    this.props.dispatch(selectSubreddit(nextSubreddit))
  }
  handleRefreshClick(e){
    e.preventDefault()
    
  }
  render() {
    return (
      <div>
          
      </div>
    );
  }
}
AsyncApp.propTypes = {
  selectedSubreddit:PropTypes.string.isRequired,
  posts:PropTypes.array.isRequired,
  isFetching:PropTypes.bool.isRequired,
  lastUpdated:PropTypes.number,
  dispatch:PropTypes.func.isRequired
}

export default AsyncApp;