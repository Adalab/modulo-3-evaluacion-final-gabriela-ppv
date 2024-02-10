import PropTypes from "prop-types";

function FilterName({filterNameChar,handleFilterName}) {

const handleChange =(ev)=>{
  handleFilterName(ev.target.value);

}

const handleKey =(event)=>{
  if (event.key === "Enter" && event.target.value.trim() === "") {
    event.preventDefault();
}
}

  return (
    <div>
      <label>
        Buscar por Personaje:
      </label>
      <input type="text"  placeholder="Maria" value ={filterNameChar}  onChange={handleChange}
      onKeyDown={handleKey} />

    </div>
  )
}
FilterName.propTypes ={
  filterNameChar:PropTypes.string,
  handleFilterName:PropTypes.func,
}


export default FilterName;