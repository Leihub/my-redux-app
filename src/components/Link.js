import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Link extends Component {
  render() {
    let { active, children, _onClick } = this.props
    if(active){
      return <span>{children}</span>
    }
    return (
      <a onClick={(e)=>{
        e.preventDefault()
        _onClick()
      }}>
        {children}
      </a>
    );
  }
}

Link.propTypes = {
  active:PropTypes.bool.isRequired,
  children:PropTypes.node.isRequired,
  _onClick:PropTypes.func.isRequired
};

export default Link;