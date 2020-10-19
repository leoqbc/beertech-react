import React from "react";

function Contato() {
  return (
    <section>
      <h1>Entre em contato</h1>
      <form action="">
        <div>
          <label htmlFor="titulo">Titulo</label>
          <input type="text" id="titulo" />
        </div>
        <div>
          <label htmlFor="texto">Texto</label>
          <input type="text" id="texto" />
        </div>
      </form>
    </section>
  );
}

export default Contato;
