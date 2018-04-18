import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Picker extends PureComponent {
  render() {
    const {value,_onChange,options} = this.props
    return (
      <span>
        <h1>{value}</h1>
        <select onChange={(e)=>{_onChange(e.target.value)}} value={value} >{
          options.map( option => {
            return <option value={option} key={option}>
              {option}
            </option>
          })
        }</select>
      </span>
    );
  }
}

Picker.propTypes = {
  value:PropTypes.string.isRequired,
  _onChange:PropTypes.func.isRequired,
  options:PropTypes.arrayOf(
    PropTypes.string.isRequired
  ).isRequired
};

export default Picker;