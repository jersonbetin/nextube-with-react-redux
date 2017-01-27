import React, {PropTypes} from 'react'

const InputSearch = ({type, placeholder, onpress}) => {
  return (
    <div className="input-group">
      <input
        type={type}
        className="form-control input-lg"
        placeholder={placeholder}
        onChange={onpress}/>
      <span className="input-group-btn">
        <button className="btn btn-info btn-lg" type="button">
          <i className="glyphicon glyphicon-search"></i>
        </button>
      </span>
    </div>
  )
}

InputSearch.propTypes = {
  type: PropTypes.string.isRequired,
  onpress:PropTypes.func.isRequired,
  placeholder:PropTypes.string
}

export default InputSearch
