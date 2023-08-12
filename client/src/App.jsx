import "./App.css";

import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Perfil from "./components/PerfilUser/Perfiluser";
import Sorts from "./components/Sorts/Sorts";

import FilterMascotas from "./components/FilterButtons/FilterButtons";

import Detail from "./components/Detail/Detail";



function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/home" element={<Home />} />



      
        <Route path="/filter" element={<FilterMascotas />} />

        <Route path="/perfil" element={<Perfil />} />
        <Route path="/detail" element={<Detail />} />
				<Route path='/sorts' element={<Sorts />} />


      </Routes>
    </>
  );
}

export default App;
