const URL_ITENS = '/api/itens'

const MENSAGEM_ERRO_LISTAGEM =
  'Não foi possível carregar os itens. Verifique se a API está no ar e tente novamente.'
const MENSAGEM_ERRO_CADASTRO =
  'Não foi possível salvar o item. Verifique sua conexão e tente novamente.'

async function requisitar(caminho, opcoes, mensagemErro) {
  let resposta

  try {
    resposta = await fetch(caminho, opcoes)
  } catch {
    throw new Error(mensagemErro)
  }

  if (!resposta.ok) {
    throw new Error(mensagemErro)
  }

  return resposta.json()
}

export function listarItens() {
  return requisitar(URL_ITENS, undefined, MENSAGEM_ERRO_LISTAGEM)
}

export function criarItem(item) {
  return requisitar(
    URL_ITENS,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item),
    },
    MENSAGEM_ERRO_CADASTRO,
  )
}
