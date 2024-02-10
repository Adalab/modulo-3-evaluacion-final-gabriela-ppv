import FilterHouse from "./FilterHouse"
import FilterName from "./FilterName"
import PropTypes from "prop-types";

function Filters({filterNameChar,handleFilterName,handleFilterHouse, handleReset,filterHouseChar}) {

 const handleClickReset =(event)=>{
  event.preventDefault();
  handleReset();
 }



  return (
   <form >
    <h2>Tus Personajes</h2>
    <FilterName filterNameChar={filterNameChar} handleFilterName ={handleFilterName}/>
    <FilterHouse handleFilterHouse ={handleFilterHouse} filterHouseChar ={filterHouseChar}/>
    <button className="button" onClick={handleClickReset}>Reset</button>

   </form>
  )
}

Filters.propTypes ={
  filterNameChar:PropTypes.string,
  handleFilterName:PropTypes.func,
  handleFilterHouse:PropTypes.func,
  handleReset:PropTypes.func,
  filterHouseChar:PropTypes.string,
}

export default Filters