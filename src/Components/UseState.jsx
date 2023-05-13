function UseState({ name }) {
  return (
    <div>
      <h2>Eliminar {name}</h2>
      <p>Porfavor, escribe el codigo de seguridad</p>
      <input type="text" placeholder="Codigo de seguridad" />
      <button>Comprobar</button>
    </div>
  );
}

export { UseState };
