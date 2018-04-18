import React, { Component } from 'react';
import Link from '../components/Link'
import { connect } from 'react-redux'
import { setVisibilityFilter } from '../redux/action'

class FilterLink extends Component {
  render() {
    return (
      <div>
        
      </div>
    );
  }
}

const mapStateToProps = (state,ownProps) => {
  return {
    active: ownProps.filter === state.filter
  }
}
const mapDispatchToProps = (dispatch,ownProps) => {
  return{
    _onClick:() => {
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
}

const FilterLinkBox = connect(mapStateToProps,mapDispatchToProps)(Link)
export default FilterLinkBox;