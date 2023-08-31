import { BrowserRouter, Routes, Route } from "react-router-dom"
import AuthLayout from "./layouts/AuthLayout.jsx"
import Login from "./paginas/login.jsx"
import Registrar from "./paginas/Registrar.jsx"
import OlvidePassword from "./paginas/OlvidePassword.jsx"
import NuevoPassword from "./paginas/NuevoPassword.jsx"
import ConfirmarCuenta from "./paginas/ConfirmarCuenta.jsx"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthLayout/>}>
          <Route index element={ <Login/>} />
          <Route path="registrar" element={ <Registrar/>} />
          <Route path="olvidepassword" element={ <OlvidePassword/>} />
          <Route path="olvidepassword/:token" element={ <NuevoPassword/>} />
          <Route path="confirmar/:id" element={ <ConfirmarCuenta/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
