import React, { lazy, Suspense } from "react";
import { BrowserRouter, Link, Redirect, Route, Switch } from "react-router-dom";

import Home from "./components/Home";

// import Sobre from "./components/Sobre";
// import Contato from "./components/Contato";
// import Users from "./components/Users";

const Sobre = lazy(() => import("./components/Sobre"));
const Contato = lazy(() => import("./components/Contato"));
const Users = lazy(() => import("./components/Users"));
const NotFound = lazy(() => import("./components/NotFound"));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/sobre">Sobre</Link>
          </li>
          <li>
            <Link to="/contato">Contato</Link>
          </li>
          <li>
            <Link to="/users/10">Pegando de Users um User de código 10</Link>
          </li>
        </ul>

        <Route exact path="/">
          <Redirect to="/home" />
        </Route>

        <Suspense fallback={<section>Carregando...</section>}>
          <Switch>
            <Route exact path="/home" component={Home}></Route>
            <Route exact path="/sobre" component={Sobre}></Route>
            <Route exact path="/contato" component={Contato}></Route>
            <Route exact path="/users/:id" component={Users}></Route>
            <Route path="*" component={NotFound} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
