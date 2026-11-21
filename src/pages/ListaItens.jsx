import { Link } from 'react-router'

export default function ListaItens() {
  return (
    <main>
      <h1>Itens cadastrados</h1>
      <Link to="/itens/novo">Cadastrar novo item</Link>
    </main>
  )
}
