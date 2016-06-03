import React, { Component, PropTypes} from 'react';

export default class RedditPicker extends Component {
	 render() {
    const { value, onChange, options } = this.props

    return (
      <span>
        <select className="form-control" onChange={e => onChange(e.target.value)}
                value={value}>
          {options.map(option =>
            <option value={option} key={option}>
              {option}
            </option>)
          }
        </select>
      </span>
    )
  }
}

RedditPicker.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.string.isRequired
  ).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}