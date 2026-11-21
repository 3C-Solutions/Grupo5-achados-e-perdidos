import { Link } from 'react-router'

export default function NovoItem() {
  return (
    <main>
      <h1>Novo item</h1>
      <Link to="/itens">Voltar para a listagem</Link>
    </main>
  )
}
