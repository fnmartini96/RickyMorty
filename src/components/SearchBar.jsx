import style from "./Cards.module.css"
import { useState } from "react";

export default function SearchBar(props) {
   const {onSearch} = props;

   const [id, setId] = useState("");
   const handleChange = (e) =>{
      setId(e.target.value);
   }

   return (
      <div className={style.SearchBar}>
         <input type='search' onChange={handleChange} value={id} />
         <button onClick={() => {onSearch(id);}}>Agregar</button>
      </div>
   );
}
