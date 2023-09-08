import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, useNavigate } from "react-router-dom";
import About from './views/About';
import Detail from './components/Detail';
import PATHROUTES from './helpers/PathRoutes';
import Form from './components/Form';

function App() {

const [characters, setCharacters] = useState([]);

const navigate = useNavigate();
const [access, setAccess] = useState(false);
const EMAIL = 'ejemplo@gmail.com';
const PASSWORD = 'nichoevans1';

function login(userData) {
   if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate('/home');
   }
}

useEffect(() => {
   !access && navigate('/');
}, [access]);

function onSearch(id) {
   axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
      } else {
         window.alert('¡No hay personajes con este ID!');
      }
   });
}

const onClose = (id) => {
   setCharacters(characters.filter((char)=>{
      return char.id !== Number(id)
   }))
}

   return (
      <div className='App'>
         <Nav onSearch={onSearch} />
         <Routes>
            <Route path={PATHROUTES.FORM} element={<Form login={login}/>} />
            <Route path={PATHROUTES.HOME} element={<Cards characters={characters} onClose={onClose}/>}/>
            <Route path={PATHROUTES.ABOUT} element={<About/>} />
            <Route path={PATHROUTES.DETAIL} element={<Detail/>} />
         </Routes>
      </div>
   );
}

export default App;
