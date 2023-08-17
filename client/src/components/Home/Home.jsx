// //Dependencias
// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// // import Paginated from "../Paginated/Paginated";
// import { useState, useEffect } from "react";
// //Acciones del redux
// import { getMascotas } from "../../redux/actions";
// //Componentes
// import PetCard from "../PetCard/PetCard";
// import Sorts from "../Sorts/Sorts";
// import FilterMascotas from "../FilterButtons/FilterButtons";
// import Padinated from "../Paginated/Paginated";

// export default function Home() {
//   const mascotas = useSelector((state) => state.mascotas);
//   const dispatch = useDispatch();
//   const [currentPage, setCurrentPage] = useState(1);

//   //Guardame el estado guardame cuantas Mascotas guardo por pagina, en este caso 8.
//   const [petsPerPage, setPetsPerPage] = useState(8);
//   //El índice de la ultima Mascota por página.
//   const indexOfLastPet = currentPage * petsPerPage;
//   //El índice de la primera Mascota por página
//   const indexOfFirstPet = indexOfLastPet - petsPerPage;
//   //Se va guardando las mascotas por pagina
//   const currentPet = Array.isArray(mascotas) ? mascotas.slice(indexOfFirstPet, indexOfLastPet) :[mascotas];

//   //Funcion inicial que trae todaas las mascotas de la base de datos
//   useEffect(() => {
//     dispatch(getMascotas());
//     // dispatch(fillDatabase())
//   }, []);

//   // useEffect(() => {
//   //   //funcion que rellena la base de datos con dato de mascotas, mascotas que se hayan en el archivo data.js de server
//   // },[])

<<<<<<< HEAD

export default function Home() {

  const mascotas = useSelector((state) => state.mascotas);
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);

  //Guardame el estado guardame cuantas Mascotas guardo por pagina, en este caso 8.
  const [petsPerPage, setPetsPerPage] = useState(8);
  //El índice de la ultima Mascota por página.
  const indexOfLastPet = currentPage * petsPerPage;
  //El índice de la primera Mascota por página
  const indexOfFirstPet = indexOfLastPet - petsPerPage;
  //Se va guardando las mascotas por pagina
  const currentPet = Array.isArray(mascotas) ? mascotas.slice(indexOfFirstPet, indexOfLastPet) :[mascotas];

  //Funcion inicial que trae todaas las mascotas de la base de datos
  useEffect(() => {
    dispatch(getMascotas());
  }, []);

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  }
  
  useEffect(() => {
    //funcion que rellena la base de datos con dato de mascotas, mascotas que se hayan en el archivo data.js de server
    dispatch(fillDatabase())
  },[])


  return (
    <div className="flex h-screen flex-col ">
      {/* Renderizado de los filtros */}
      <FilterMascotas />
      {/* Renderizado de los ordenamientos */}
      <Sorts />
      {/* {console.log(currentPet)} */}
      <header className="m-0 h-[10%] w-screen bg-white p-0">
        {/* <NavBar /> */}
      </header>
      <div className="m-0 h-full w-screen  flex  bg-white p-0">
        {/* <section className="m-0 h-[100%] w-[20%] bg-gray-300 p-0">
          Ordenamiento
        </section> */}
        <section className="m-0 h-[100%]  w-screen bg-white p-0 flex flex-grow items-center justify-center">
          {/* Cards */}
          {/* {pets.map((pet) => ( */}
          <div className="bg-white w-[90%] h-[90%] ">
            <div className="flex flex-col">
            <Paginated
              petsPerPage={petsPerPage}
              mascotas={mascotas.length}
              paginado={paginado}
            />
           
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-20">
                {currentPet.length === 0 && <h1>No se encontraron resultados</h1>}
                {currentPet.map((mascota) => {
                  return (
                    <div key={crypto.randomUUID()}>
                      <PetCard
                        key={mascota.id}
                        nombre={mascota.nombre}
                        edad={mascota.edad}
                        sexo={mascota.sexo}
                        descripcion={mascota.descripcion}
                        foto={mascota.foto}
                        peso={mascota.peso}
                      />
                    </div>
                  );
                })}
                
              </div>
              <div className="pt-[20px] flex justify-center">
                {/* <Pagination total={10} initialPage={1} /> */}
              </div>
            </div>
          </div>
        </section>
      </div>
      
    </div>
    /*<div className="w-screen h-screen flex flex-row">
=======
//   return (
//     <div className="flex h-screen flex-col ">
//       {/* Renderizado de los filtros */}
//       <FilterMascotas />
//       {/* Renderizado de los ordenamientos */}
//       <Sorts />
//       {/* {console.log(currentPet)} */}
//       <header className="m-0 h-[10%] w-screen bg-white p-0">
//         {/* <NavBar /> */}
//       </header>
//       <div className="m-0 h-full w-screen  flex  bg-white p-0">
//         {/* <section className="m-0 h-[100%] w-[20%] bg-gray-300 p-0">
//           Ordenamiento
//         </section> */}
//         <section className="m-0 h-[100%]  w-screen bg-white p-0 flex flex-grow items-center justify-center">
//           {/* Cards */}
//           {/* {pets.map((pet) => ( */}
//           <div className="bg-white w-[90%] h-[90%] ">
//             <div className="flex flex-col">
//               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-20">
//                 {currentPet
//   .filter(mascota => mascota && mascota.nombre)
//   .map((mascota) =>  {
//                   return (
//                     <div key={crypto.randomUUID()}>
//                       <PetCard
//                         key={mascota.id}
//                         nombre={mascota.nombre}
//                         edad={mascota.edad}
//                         sexo={mascota.sexo}
//                         descripcion={mascota.descripcion}
//                         foto={mascota.foto}
//                         peso={mascota.peso}
//                       />
//                     </div>
//                   );
//                 })}

//               </div>
//               <div className="pt-[20px] flex justify-center">
//                 {/* <Pagination total={10} initialPage={1} /> */}
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//       <Padinated pokePerPage={8} allPokemons={mascotas}/>
//     </div>
/*<div className="w-screen h-screen flex flex-row">
>>>>>>> 2a3dd0a820a076ccd251e6db5465dace6f3e409c
      {console.log(mascotas)}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-20">
        {mascotas.map((m) => {
        <div>
          <PetCard
            key={m.id}
            nombre={m.nombre}
            edad={m.edad}
            sexo={m.sexo}
            descripcion={m.descripcion}
            foto={m.foto}
          />
          ;
        </div>;
      })}
        <PetCard
          key={mascotas.id}
          nombre={mascotas.nombre}
          edad={mascotas.edad}
          sexo={mascotas.sexo}
          descripcion={mascotas.descripcion}
          foto={mascotas.foto}
        />
      </div>
      <section className="h-screen w-screen">
        <h1>Hola este es mi HOME</h1>
      </section>
    </div>*/
//   );
// }
// Dependencias
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// Acciones del redux
import { getMascotas } from "../../redux/actions";

// Componentes
import PetCard from "../PetCard/PetCard";
import Sorts from "../Sorts/Sorts";
import FilterMascotas from "../FilterButtons/FilterButtons";
import Paginated from "../Paginated/Paginated";
import { Pagination } from "@nextui-org/react";

//FAVORITOS
// import Favorites from "../Favorites/Favorites";

export default function Home() {
  const mascotas = useSelector((state) => state.mascotas);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [petsPerPage] = useState(8); // Puesto constante ya que nunca lo modificas
  //Guardame el estado guardame cuantas Mascotas guardo por pagina, en este caso 8.
  //const [petsPerPage, setPetsPerPage] = useState(8);
  //El índice de la ultima Mascota por página.

  const indexOfLastPet = currentPage * petsPerPage;
  const indexOfFirstPet = indexOfLastPet - petsPerPage;
  const currentPet = Array.isArray(mascotas)
    ? mascotas.slice(indexOfFirstPet, indexOfLastPet)
    : [mascotas];

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Cálculos de paginación

  //FAVORITOS
  // const Favs = useSelector((state) => state.favorites);
  // const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    dispatch(getMascotas());
  }, [dispatch]); // Agregado dispatch como dependencia para evitar warnings

  return (
    <div className="flex h-screen flex-col ">
      <div className="flex h-full flex-row justify-between pr-12">
        <div className="pl-20 flex flex-col">
          {" "}
          <FilterMascotas />
        </div>
        <Sorts />
      </div>

      <header className="m-0 h-[10%] w-screen bg-white p-0">
        {/* Se parece que tienes un NavBar comentado. Si no lo usas, puedes eliminar este bloque. */}
      </header>
      <div className="m-0 h-full w-screen  flex  bg-white p-0">
        <section className="m-0 h-[100%]  w-screen bg-white p-0 flex flex-grow items-center justify-center">
          <div className="bg-white w-[90%] h-[90%] ">
            <div className="flex flex-col">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-20">
                {currentPet
                  .filter((mascota) => mascota && mascota.nombre)
                  .map((mascota) => (
                    <div key={mascota.id}>
                      <PetCard
                        key={mascota.id}
                        id={mascota.id}
                        nombre={mascota.nombre}
                        edad={mascota.edad}
                        sexo={mascota.sexo}
                        descripcion={mascota.descripcion}
                        foto={mascota.foto}
                        peso={mascota.peso}
                      />
                    </div>
                  ))}
              </div>
              <div className="pt-[20px] flex justify-center">
                <Paginated
                  petsPerPage={petsPerPage}
                  mascotas={mascotas?.length}
                  paginado={paginado}
                />
                {/* <Pagination total={currentPage} initialPage={1} /> */}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}