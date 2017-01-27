import React, {PropTypes} from 'react'

import TextInput from '../commons/TextInput'

const FormMovie = ({movie, onChange, onSave, onClear}) => {
  return (
   <form role="form" className="m-t-s">
     <TextInput
       name="name"
       label="Nombre"
       onChange={onChange}
       value={movie.name}
       width="col-lg-12"
       placeholder="Ingrese nombre de la pelicula"/>
     <TextInput
       name="actor"
       label="Actor"
       onChange={onChange}
       value={movie.actor}
       width="col-lg-12"
       placeholder="Ingrese nombre del actor"/>
     <TextInput
       name="link"
       label="Link"
       onChange={onChange}
       value={movie.link}
       width="col-lg-12"
       placeholder="Ingrese link de la pelicula"/>
     <div className="col-lg-12 m-t-m">
       <input type="submit" onClick={onSave} value="Guardar" className="btn btn-primary btn-lg col-lg-5 col-lg-offset-1 m-r-m"/>
       <input type="reset" onClick={onClear} value="Limpiar" className="btn btn-default btn-lg col-lg-5"/>
     </div>
   </form>
  )
}

FormMovie.propTypes = {
  movie: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onClear: PropTypes.func
}


export default FormMovie
