import { useState } from "react";
function UseState({ name }) {
  const [error, setError] = useState(true);

  return (
    <div>
      <h2>Eliminar {name}</h2>
      <p>Porfavor, escribe el codigo de seguridad</p>

      {error && <p>Error: el codigo es incorrecto</p>}

      <input type="text" placeholder="Codigo de seguridad" />
      <button onClick={() => setError(!error)}>Comprobar</button>
    </div>
  );
}

export { UseState };
