import React, { useState } from "react";
import { baseColaboradores } from "./arrayColaboradores.js";

function App() {
  const [colaborador, setColaborador] = useState("");
  const [array, setArray]= useState(baseColaboradores)
  const [email, setEmail]= useState ("")
  const [name, setName]= useState ("")

//validamos que los campos no esten vacios
const validation= (e) => {
  if (name == "" || email == "") {
    alert("No has rellenado los campos")
    return
    }

  setArray([...array,{nombre: name,correo: email},])
//seteamos los campos en "" para que se puedan reutilizar sin la necesidad de que el usuario borre los campos
  setName("")
  setEmail("")
}

  return (
//utilizamos el onChange para detectar en tiempo real cualquier posible cambio o similitud en la busqueda
<>
<div className="search">
  <div className="search-content">
    <h1>Buscador de Colaboradores</h1>
    <input
      type="text"
      placeholder="Buscar Colaborador/es"
      className="search-inp"
      onChange={(e) => setColaborador(e.target.value)}/>
  </div>
</div>  
<div className="container">
  {/* con el onchange tendremos los datos vistos en tiempo real por lo cual se recibe el valor al escribir y es seteado al momento de desencadenar el evento con el boton para agregar */}
    <h3>Nombre del colaborador</h3>
      <input
        value={name}
        placeholder="Ingrese nombre del Colaborador"
        onChange={(e) => setName(e.target.value)}/>
        <h3>Correo del colaborador</h3>
      <input
        className="input"
        value={email}
        placeholder="Ingrese correo del colaborador"
        onChange={(e)  => setEmail(e.target.value)}/>
    <button onClick={validation}>Agregar colaborador</button>
    <h3>Listado de Colaboradores</h3>
  <ul className="list">
    {/* hacemos un filtrado para la busqueda del colaborador de este modo solo nos dara colaboradores con similitudes*/}
    {array.filter((user) => user.nombre.toLowerCase().includes(colaborador)).map((user) => (
    <li key={user.id} className="listItem">{user.nombre} - {user.correo}</li>))}
  </ul>
</div>
</>
  );
}
export default App;