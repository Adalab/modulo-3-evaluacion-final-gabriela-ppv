

function FilterHouse({handleFilterHouse,filterHouseChar}) {

const handleOption =(ev)=>{
  handleFilterHouse (ev.target.value);
}

  return (
    <div>

      <label htmlFor="houseFilter">Selecciona la Casa:</label>
      <select name="" id="houseFilter" value ={filterHouseChar} onChange={handleOption}>
        <option value="Gryffindor">Gryffindor</option>
        <option value="Slytherin">Slytherin</option>
        <option value="Ravenclaw">Ravenclaw</option>
        <option value="Hufflepuff">Hufflepuff</option>

      </select>
    </div>
  )
}

export default FilterHouse