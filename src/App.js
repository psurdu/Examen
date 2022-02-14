import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import PaginasApp from './data/PaginasApp';

function App() {
  return (
    <>
      <Router>
        <Menu />
        <Routes>
          {PaginasApp.map((item) => {
            return (
              <Route
                key={item.id}
                path={item.path}
                exact element={item.component}
              />
            );
          })}
        </Routes>
        <p>
          Resuelve los ejercicios propuestos. Para ello, haz un fork de este repositorio desde tu
          cuenta de Github y sube un enlace a la tarea de examen. El repositorio debe
          tener el nombre examen-react-Nombre-Apellido1, donde nombre y apellido
          son los tuyos.
        </p>
      </Router>
    </>
  );
}

export default App;
