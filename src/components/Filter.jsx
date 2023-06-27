import PropTypes from 'prop-types';

export const Filter = ({ filterId, value, onChange }) => {
    return   <label htmlFor={filterId}>
          Find contacts by name
        <input type="text" name="filter" onChange={onChange} value={value}
     
            required />
          </label>
    
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};