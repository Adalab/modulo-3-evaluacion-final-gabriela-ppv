import PropTypes from "prop-types";

function FilterGender({handleFilterGender,filterGender}) {


const handleRadio =(ev)=>{
    handleFilterGender(ev.target.value)
}


  return (



    <div>
        <label>
            Genero
        </label>
        <input type="radio" name="gender" value="f" onChange={handleRadio} checked={filterGender === "f"}/>
        <label htmlFor="">Female</label>
        <input type="radio" name="gender" value="m" onChange={handleRadio} checked={filterGender ==="m"}/>
        <label htmlFor="">Male</label>
    </div>
  )
}

FilterGender.propTypes ={
    handleFilterGender:PropTypes.func,
    filterGender:PropTypes.string,
  }
  

export default FilterGender