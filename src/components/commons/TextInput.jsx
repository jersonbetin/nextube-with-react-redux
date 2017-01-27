import React, {PropTypes} from 'react'

const TextInput = ({name, label, onChange, placeholder, value, error, width}) => {
  /*let wrapperClass = 'form-group'
  if(error && error.length > 0){
    wrapperClass+=' '+'has-error'
  }*/

  if(!width){
    width = 'col-lg-12'
  }

  return (
    <div className={width +' form-group'}>
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <input
          type="text"
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="form-control"
          />
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  )
}

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.array,
  width: PropTypes.string
}


export default TextInput
