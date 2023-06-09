import React from "react";

class ClassState extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: true,
    };
  }
  render() {
    return (
      <div>
        <h2>Eliminar {this.props.name}</h2>
        <p>Porfavor, escribe el codigo de seguridad</p>

        {this.state.error && <p>Error: el codigo es incorrecto</p>}

        <input type="text" placeholder="Codigo de seguridad" />
        <button onClick={() => this.setState({ error: !this.state.error })}>Comprobar</button>
      </div>
    );
  }
}

export { ClassState };
