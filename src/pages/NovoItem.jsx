import { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { criarItem } from '../api/itens.js'
import ItemForm from '../components/ItemForm.jsx'

export default function NovoItem() {
  const navigate = useNavigate()
  const [erro, setErro] = useState('')

  async function cadastrar(valores) {
    try {
      await criarItem(valores)
      navigate('/itens')
    } catch (error) {
      setErro(error.message)
    }
  }

  return (
    <main className="lista-itens">
      <h1>Novo item</h1>
      {erro && <p role="alert">{erro}</p>}
      <ItemForm onSubmit={cadastrar} />
      <Link to="/itens">Voltar para a listagem</Link>
    </main>
  )
}
