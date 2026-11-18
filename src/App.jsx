import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import ListaItens from './pages/ListaItens'
import NovoItem from './pages/NovoItem'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <main className="app">
        <Routes>
          <Route path="/" element={<Navigate to="/itens" replace />} />
          <Route path="/itens" element={<ListaItens />} />
          <Route path="/itens/novo" element={<NovoItem />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
