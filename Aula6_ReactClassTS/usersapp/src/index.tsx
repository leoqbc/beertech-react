import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import APIService from './Services/APIService';
import AxiosHandler from "./Services/AxiosHandler";
import IUsers from "./Interfaces/IUsers";

const apiService: APIService = new APIService(new AxiosHandler());

apiService.getUsers().then((users: IUsers) => {
  console.log(users.data);
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
