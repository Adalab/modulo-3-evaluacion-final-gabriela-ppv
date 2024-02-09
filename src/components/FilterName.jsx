

function FilterName({filterNameChar,handleFilterName}) {

const handleChange =(ev)=>{
  handleFilterName(ev.target.value);

}

  return (
    <div>
      <label htmlFor="">
        Buscar por Personaje:
      </label>
      <input type="text"  placeholder="Maria" value ={filterNameChar}  onChange={handleChange}/>

    </div>
  )
}

export default FilterName