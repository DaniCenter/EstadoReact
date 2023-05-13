import React from "react";

class ClassState extends React.Component {
  render() {
    return (
      <div>
        <h2>Eliminar ClassState</h2>
        <p>Porfavor, escribe el codigo de seguridad</p>
        <input type="text" placeholder="Codigo de seguridad" />
        <button>Comprobar</button>
      </div>
    );
  }
}

export { ClassState };
