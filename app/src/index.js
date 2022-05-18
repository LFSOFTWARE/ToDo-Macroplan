import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import { TarefaProvider } from './providers/Tarefa';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TarefaProvider>
    <Home />

    </TarefaProvider>
  </React.StrictMode>
);


