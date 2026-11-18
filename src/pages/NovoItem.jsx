import { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { criarItem } from '../api/itens'
import ItemForm from '../components/ItemForm'

function NovoItem() {
  const navigate = useNavigate()
  const [erroEnvio, setErroEnvio] = useState('')

  async function enviar(valores) {
    setErroEnvio('')

    try {
      await criarItem(valores)
      navigate('/itens')
    } catch (falha) {
      setErroEnvio(falha.message)
    }
  }

  return (
    <section>
      <header className="pagina-topo">
        <h1>Cadastrar item</h1>
        <Link className="botao secundario" to="/itens">
          Voltar para a lista
        </Link>
      </header>

      <ItemForm onEnviar={enviar} erroEnvio={erroEnvio} />
    </section>
  )
}

export default NovoItem
