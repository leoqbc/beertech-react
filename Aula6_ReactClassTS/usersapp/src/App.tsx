import React, { Component } from 'react';
import Relogio from './Relogio';


class App extends Component {
  render() {
    return (
      <section>
        <Relogio hour={22} minutes={10} seconds={22} />
      </section>
    );
  }
}

export default App;


// Quando um componente é criado 1x
// ----------------------------------

// constructor()
// static getDerivedStateFromProps()
// UNSAFE_componentWillMount() (Depreciado)
// render()
// componentDidMount()

// Toda vez que um componente é atualizado
// ----------------------------------------

// UNSAFE_componentWillUpdate() (Depreciado)
// static getDerivedStateFromProps()
// shouldComponentUpdate()
// render()
// getSnapshotBeforeUpdate()
// componentDidUpdate()

// Quando um componente é removido do DOM
// componentWillUnmount()
