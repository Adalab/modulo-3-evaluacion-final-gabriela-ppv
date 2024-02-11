import { Route, Routes } from "react-router-dom";
import "../scss/App.scss";
import CharacterList from "./CharacterList";
import { useEffect, useState } from "react";
import getDataApi from "../services/api";
import Filters from "./Filters";
import CharacterDetail from "./CharacterDetail";
import NotFound from "./NotFound";
import localStorage from "../services/localStorage";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  const [character, setCharacter] = useState([]);
  const [filterNameChar, setFilterNameChar] = useState("");
  const [filterHouseChar, setFilterHouseChar] = useState("Gryffindor");
  const [filterGender, setFilterGender] = useState("");

  useEffect(() => {
    getDataApi().then((cleanData) => {
      setCharacter(cleanData);
      localStorage.set("characters", cleanData);
    });
  }, []);

  const handleFilterName = (value) => {
    setFilterNameChar(value);
  };

  const handleFilterHouse = (value) => {
    setFilterHouseChar(value);
  };

  const handleFilterGender = (value) => {
    setFilterGender(value);
  };

  const filterCharacter = character
    .filter((charac) => charac.name.toLowerCase().includes(filterNameChar))
    .filter((house) => house.house === filterHouseChar)
    .filter((charact) => {
      if (filterGender === "f") {
        return charact.gender === "female";
      } else if (filterGender === "m") {
        return charact.gender === "male";
      } else {
        return true;
      }
    });

  const handleReset = () => {
    setFilterNameChar("");
    setFilterHouseChar("Gryffindor");
    setFilterGender("");
  };

  return (
    <div className="father">
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Filters
                filterNameChar={filterNameChar}
                handleFilterName={handleFilterName}
                handleFilterHouse={handleFilterHouse}
                handleReset={handleReset}
                filterHouseChar={filterHouseChar}
                handleFilterGender={handleFilterGender}
                filterGender={filterGender}
              />
              <CharacterList
                character={filterCharacter}
                filterNameChar={filterNameChar}
              />
            </>
          }
        />
        <Route
          path="/detail/:id"
          element={<CharacterDetail character={character} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
