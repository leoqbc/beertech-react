import React from 'react';

// import Animals from './apifake/Animals';
// import Owners from './apifake/Owners';

import "./style.css";

// chamadas de api fake
// const owners: Owners = new Owners();
// const animals: Animals = new Animals();

// owners.getAll(); // retorna promise
// animals.getByOwnerId(); // retorna promise

function App() {
  return (
    <div className="App">
      <section id="owners-section">
        <label htmlFor="owners">Donos:</label>
        <select id="owners">
          <option value="1">Dono 1</option>
          <option value="2">Dono 2</option>
          <option value="3">Dono 3</option>
          <option value="4">Dono 4</option>
        </select>
      </section>
      <section id="animals-section">
        <label htmlFor="animals">Animais:</label>
        <select id="animals">
          <option>Animal 1</option>
          <option>Animal 2</option>
          <option>Animal 3</option>
          <option>Animal 4</option>
        </select>
      </section>
      <section id="report">
        <button>Ordenar donos com mais animais</button>
        <table id="reportList">
          <thead>
            <tr>
              <th>Dono</th>
              <th>Quantidade</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Fulano 1</td>
              <td>2 animais</td>
            </tr>
            <tr>
              <td>Fulano 2</td>
              <td>1 animal</td>
            </tr>
            <tr>
              <td>Fulano 3</td>
              <td>3 animais</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default App;
