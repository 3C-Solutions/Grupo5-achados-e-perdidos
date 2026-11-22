import { useState } from 'react'
import './ItemForm.css'

const VALORES_INICIAIS = {
  titulo: '',
  descricao: '',
  local: '',
  status: '',
}

const ERROS_INICIAIS = {
  titulo: '',
  descricao: '',
  local: '',
  status: '',
}

function validar(valores) {
  const erros = { ...ERROS_INICIAIS }

  if (!valores.titulo.trim()) erros.titulo = 'Informe o título.'
  if (!valores.descricao.trim()) erros.descricao = 'Informe a descrição.'
  if (!valores.local.trim()) erros.local = 'Informe o local.'
  if (!valores.status.trim()) erros.status = 'Selecione a situação.'

  return erros
}

export default function ItemForm({ onSubmit }) {
  const [valores, setValores] = useState(VALORES_INICIAIS)
  const [erros, setErros] = useState(ERROS_INICIAIS)

  function atualizarCampo(evento) {
    const { name, value } = evento.target
    setValores((anteriores) => ({ ...anteriores, [name]: value }))
  }

  function enviarFormulario(evento) {
    evento.preventDefault()

    const errosEncontrados = validar(valores)
    setErros(errosEncontrados)

    if (Object.values(errosEncontrados).some(Boolean)) return

    onSubmit?.(valores)
  }

  return (
    <form className="item-form" onSubmit={enviarFormulario} noValidate>
      <div className="campo">
        <label htmlFor="titulo">Título</label>
        <input
          id="titulo"
          name="titulo"
          type="text"
          value={valores.titulo}
          onChange={atualizarCampo}
          required
          aria-invalid={Boolean(erros.titulo)}
          aria-describedby={erros.titulo ? 'titulo-erro' : undefined}
        />
        {erros.titulo && (
          <span className="erro-campo" id="titulo-erro" role="alert">
            {erros.titulo}
          </span>
        )}
      </div>

      <div className="campo">
        <label htmlFor="descricao">Descrição</label>
        <textarea
          id="descricao"
          name="descricao"
          rows="4"
          value={valores.descricao}
          onChange={atualizarCampo}
          required
          aria-invalid={Boolean(erros.descricao)}
          aria-describedby={erros.descricao ? 'descricao-erro' : undefined}
        />
        {erros.descricao && (
          <span className="erro-campo" id="descricao-erro" role="alert">
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
          onChange={atualizarCampo}
          required
          aria-invalid={Boolean(erros.local)}
          aria-describedby={erros.local ? 'local-erro' : undefined}
        />
        {erros.local && (
          <span className="erro-campo" id="local-erro" role="alert">
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
          onChange={atualizarCampo}
          required
          aria-invalid={Boolean(erros.status)}
          aria-describedby={erros.status ? 'status-erro' : undefined}
        >
          <option value="">Selecione a situação...</option>
          <option value="perdido">Perdido</option>
          <option value="achado">Achado</option>
        </select>
        {erros.status && (
          <span className="erro-campo" id="status-erro" role="alert">
            {erros.status}
          </span>
        )}
      </div>

      <button type="submit">Cadastrar item</button>
    </form>
  )
}
