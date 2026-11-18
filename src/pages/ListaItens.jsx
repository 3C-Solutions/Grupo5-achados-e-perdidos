import { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { listarItens } from '../api/itens'
import ErrorBanner from '../components/ErrorBanner'
import ItemCard from '../components/ItemCard'

function ListaItens() {
  const [itens, setItens] = useState([])
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState('')
  const [tentativa, setTentativa] = useState(0)

  useEffect(() => {
    let ativo = true

    async function buscar() {
      try {
        const dados = await listarItens()

        if (!ativo) return

        setItens(dados)
        setErro('')
      } catch (falha) {
        if (!ativo) return

        setItens([])
        setErro(falha.message)
      } finally {
        if (ativo) setCarregando(false)
      }
    }

    buscar()

    return () => {
      ativo = false
    }
  }, [tentativa])

  function tentarNovamente() {
    setCarregando(true)
    setErro('')
    setTentativa((valor) => valor + 1)
  }

  return (
    <section>
      <header className="pagina-topo">
        <h1>Itens achados e perdidos</h1>
        <Link className="botao" to="/itens/novo">
          Cadastrar item
        </Link>
      </header>

      {carregando && <p className="aviso">Carregando itens...</p>}

      {!carregando && erro && (
        <ErrorBanner mensagem={erro} onTentarNovamente={tentarNovamente} />
      )}

      {!carregando && !erro && itens.length === 0 && (
        <p className="aviso">Nenhum item cadastrado ainda.</p>
      )}

      {!carregando && !erro && itens.length > 0 && (
        <ul className="lista-itens">
          {itens.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </ul>
      )}
    </section>
  )
}

export default ListaItens
