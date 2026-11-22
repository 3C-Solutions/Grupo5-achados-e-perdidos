import { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { listarItens } from '../api/itens.js'
import ItemCard from '../components/ItemCard.jsx'
import './ListaItens.css'

export default function ListaItens() {
  const [itens, setItens] = useState([])
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState('')
  const [tentativa, setTentativa] = useState(0)

  useEffect(() => {
    let ativo = true

    async function carregarItens() {
      try {
        const dados = await listarItens()
        if (ativo) setItens(dados)
      } catch (error) {
        if (ativo) setErro(error.message)
      } finally {
        if (ativo) setCarregando(false)
      }
    }

    carregarItens()

    return () => {
      ativo = false
    }
  }, [tentativa])

  return (
    <main className="lista-itens">
      <h1>Itens cadastrados</h1>
      <Link to="/itens/novo">Cadastrar novo item</Link>

      <section className="lista-itens-conteudo" aria-label="Itens cadastrados" aria-busy={carregando}>
        {carregando ? (
          <p role="status">Carregando itens...</p>
        ) : erro ? (
          <div className="lista-itens-erro" role="alert">
            <p>{erro}</p>
            <button
              type="button"
              onClick={() => {
                setCarregando(true)
                setErro('')
                setTentativa((valor) => valor + 1)
              }}
            >
              Tentar novamente
            </button>
          </div>
        ) : itens.length === 0 ? (
          <p role="status">Não há itens cadastrados.</p>
        ) : (
          <ul className="itens-grid">
            {itens.map((item) => (
              <li key={item.id}>
                <ItemCard item={item} />
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  )
}
