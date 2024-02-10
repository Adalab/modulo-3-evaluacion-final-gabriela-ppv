import PropTypes from "prop-types";

function FilterHouse({handleFilterHouse,filterHouseChar}) {

const handleOption =(ev)=>{
  handleFilterHouse (ev.target.value);
}

  return (
    <div>

      <label htmlFor="houseFilter" className="form--label">Selecciona la Casa</label>
      <select id="houseFilter" value ={filterHouseChar} onChange={handleOption} className="form--filter__house">
        <option value="Gryffindor">Gryffindor</option>
        <option value="Slytherin">Slytherin</option>
        <option value="Ravenclaw">Ravenclaw</option>
        <option value="Hufflepuff">Hufflepuff</option>

      </select>
    </div>
  )
}
FilterHouse.propTypes ={
  handleFilterHouse:PropTypes.func,
  filterHouseChar:PropTypes.string,
}

export default FilterHouse