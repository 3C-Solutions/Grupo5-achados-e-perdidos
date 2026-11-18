import { useState } from 'react'

const CAMPOS_OBRIGATORIOS = {
  titulo: 'Informe o título do item.',
  descricao: 'Descreva o item.',
  local: 'Informe o local onde o item foi encontrado ou perdido.',
  status: 'Selecione a situação do item.',
}

const VALORES_INICIAIS = {
  titulo: '',
  descricao: '',
  local: '',
  status: '',
}

function validar(valores) {
  const erros = {}

  for (const campo of Object.keys(CAMPOS_OBRIGATORIOS)) {
    if (!String(valores[campo]).trim()) {
      erros[campo] = CAMPOS_OBRIGATORIOS[campo]
    }
  }

  return erros
}

function ItemForm({ onEnviar, erroEnvio }) {
  const [valores, setValores] = useState(VALORES_INICIAIS)
  const [erros, setErros] = useState({})

  function alterar(evento) {
    const { name, value } = evento.target
    setValores((atuais) => ({ ...atuais, [name]: value }))
  }

  function enviar(evento) {
    evento.preventDefault()

    const novosErros = validar(valores)
    setErros(novosErros)

    if (Object.keys(novosErros).length > 0) {
      return
    }

    onEnviar(valores)
  }

  return (
    <form className="formulario" onSubmit={enviar} noValidate>
      {erroEnvio && (
        <div className="banner-erro" role="alert">
          <p>{erroEnvio}</p>
        </div>
      )}

      <div className="campo">
        <label htmlFor="titulo">Título</label>
        <input
          id="titulo"
          name="titulo"
          type="text"
          value={valores.titulo}
          onChange={alterar}
          aria-invalid={Boolean(erros.titulo)}
          aria-describedby={erros.titulo ? 'erro-titulo' : undefined}
        />
        {erros.titulo && (
          <span className="campo-erro" id="erro-titulo">
            {erros.titulo}
          </span>
        )}
      </div>

      <div className="campo">
        <label htmlFor="descricao">Descrição</label>
        <textarea
          id="descricao"
          name="descricao"
          rows="3"
          value={valores.descricao}
          onChange={alterar}
          aria-invalid={Boolean(erros.descricao)}
          aria-describedby={erros.descricao ? 'erro-descricao' : undefined}
        />
        {erros.descricao && (
          <span className="campo-erro" id="erro-descricao">
            {erros.descricao}
          </span>
        )}
      </div>

      <div className="campo">
        <label htmlFor="local">Local</label>
        <input
          id="local"
          name="local"
          type="text"
          value={valores.local}
          onChange={alterar}
          aria-invalid={Boolean(erros.local)}
          aria-describedby={erros.local ? 'erro-local' : undefined}
        />
        {erros.local && (
          <span className="campo-erro" id="erro-local">
            {erros.local}
          </span>
        )}
      </div>

      <div className="campo">
        <label htmlFor="status">Situação</label>
        <select
          id="status"
          name="status"
          value={valores.status}
          onChange={alterar}
          aria-invalid={Boolean(erros.status)}
          aria-describedby={erros.status ? 'erro-status' : undefined}
        >
          <option value="">Selecione</option>
          <option value="perdido">Perdido</option>
          <option value="achado">Achado</option>
        </select>
        {erros.status && (
          <span className="campo-erro" id="erro-status">
            {erros.status}
          </span>
        )}
      </div>

      <button type="submit">Cadastrar item</button>
    </form>
  )
}

export default ItemForm
