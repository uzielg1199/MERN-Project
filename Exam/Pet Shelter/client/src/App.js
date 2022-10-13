import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './views/Main';
import Detail from './views/Detail';
import Update from './views/Update';
import CreatePet from './views/CreatePet'

function App(){
  return (
    <div className= "App">
      <Routes>
        <Route element={<Main/>} path="/" />
        <Route element={<CreatePet/>} path="/pets/new" />
        <Route element={<Detail/>} exact path="/pets/:id" />
        <Route element={<Update/>} path="/pets/:id/edit"/>
      </Routes>
    </div>
  );
};
export default App;

