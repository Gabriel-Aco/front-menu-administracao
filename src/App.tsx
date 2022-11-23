import { Route, Routes, Navigate, Link, BrowserRouter } from 'react-router-dom'

export default function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Navigate to="/" />}/>

          {/* Pagina inicial */}
          <Route path="/administracao" element={<Link to={'/administracao/cadastroUsuario'}> Adm ir para cadastro </Link>}/>

          {/* Rotas administração */}
          <Route path="/administracao/cadastroUsuario" element={<Link to={'/administracao/listaUsuarios'}>Cadastro ir para Lista</Link>}/>
          <Route path="/administracao/listaUsuarios" element={<Link to={'/administracao/editaUsuario'}>Lista ir para Edita</Link>}/>
          <Route path="/administracao/editaUsuario/" element={<Link to={'/administracao'}>Edita ir para Adm</Link>}/>

        </Routes>
      </BrowserRouter>
    )
}
