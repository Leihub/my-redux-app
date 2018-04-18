import React, { Component } from 'react';
import FilterLink from '../container/FilterLink'
class Footer extends Component {
  render() {
    return (
      <p>
        show:
        {' '}
        <FilterLink filter="SHOW_ALL">
          ALL
        </FilterLink>
        {', '}
        <FilterLink filter="SHOW_ACTIVE">
          ACTIVE
        </FilterLink>
        {', '}
        <FilterLink filter="SHOW_COMPLETED">
          COMPLETED
        </FilterLink>
      </p>
    );
  }
}


export default Footer;