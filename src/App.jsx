import { BrowserRouter, Route, Routes } from 'react-router'
import ListaItens from './pages/ListaItens.jsx'
import NovoItem from './pages/NovoItem.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/itens" element={<ListaItens />} />
        <Route path="/itens/novo" element={<NovoItem />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
