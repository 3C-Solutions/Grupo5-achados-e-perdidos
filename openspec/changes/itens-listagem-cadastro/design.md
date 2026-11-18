# Design

## Context

O projeto é um Vite + React 19 sem nenhuma tela funcional. O `db.json` já tem o formato de item desejado (`id`, `titulo`, `descricao`, `local`, `status`), mas o JSON Server ainda não está ligado ao app: não existe script `api` nem proxy no Vite. A motivação e o escopo estão em `proposal.md`; o comportamento exigido está em `specs/itens/spec.md`.

## Goals / Non-Goals

**Goals:**

- Uma única camada de acesso à API, para que nenhuma página conheça URL ou `fetch`.
- Rotas reais (`/itens` e `/itens/novo`) com URLs compartilháveis.
- Erros tratados de forma explícita e demonstrável durante a apresentação.
- Estrutura `src/api`, `src/components`, `src/pages` como pede o enunciado.

**Non-Goals:**

- Sem cache, estado global ou biblioteca de data fetching.
- Sem testes automatizados; a verificação é manual e roteirizada nas tasks.
- Sem edição/exclusão, imagem, paginação ou busca.

## Decisions

### Roteamento com react-router

`src/pages` no plural e a necessidade de navegar entre listagem e cadastro justificam rotas de verdade. Alternativa descartada: alternar telas com `useState`, que cumpre a tela mas não gera URLs nem atende "rotas". O `App.jsx` fica só com `BrowserRouter` + `Routes`.

### Proxy do Vite para o JSON Server

O app chama `/api/itens` e o Vite remove o prefixo `/api` e encaminha para `http://localhost:3000/itens`. O prefixo existe para não colidir com a rota do SPA: com um proxy direto em `/itens`, abrir `/itens/novo` no navegador cairia no JSON Server em vez do `index.html`. Alternativa descartada: apontar o `fetch` direto para `http://localhost:3000`, que exige CORS e deixa a URL do backend espalhada pelo código. Com proxy, o script `api` roda o JSON Server e o `dev` continua sendo o único comando do front.

### Camada de API com erro normalizado

`src/api/itens.js` expõe `listarItens()` e `criarItem(item)`. Toda falha de rede ou resposta não-OK vira um `Error` com mensagem pronta para exibição, para que as páginas não precisem interpretar `response.ok`. Alternativa descartada: `try/catch` de `fetch` em cada página, que duplica o tratamento e divergiria entre telas.

### Validação no cliente, sem biblioteca

Campos obrigatórios (`titulo`, `descricao`, `local`, `status`) são checados no `submit`, com erro inline por campo e **sem** requisição quando há campo vazio. Alternativa descartada: biblioteca de formulários, peso desnecessário para quatro campos e um checkpoint.

### Modelo do item

O item é uma entidade única com um campo `status` (`perdido` ou `achado`), em vez de duas entidades separadas. Isso preserva o formato já presente no `db.json` e permite a devolução futura sem remodelar. O `id` é gerado pelo JSON Server no `POST`. `criadoEm` fica de fora: não é exibido em lugar nenhum.

### Recarregar a lista após o cadastro

Depois de um `POST` bem-sucedido, a página de cadastro navega para `/itens` e a listagem busca os dados novamente. Alternativa descartada: inserir o item no estado local, que exige estado compartilhado entre rotas.

## Risks / Trade-offs

- [JSON Server não está rodando durante a demo] -> o banner de erro com "Tentar novamente" é justamente o cenário especificado; a task de verificação pede parar e religar o servidor.
- [Porta 3000 ocupada na máquina] -> o proxy falha e o sintoma parece bug de app; a task de infra confirma `npm run api` subindo antes de mexer na UI.
- [JSON Server v1 beta no `POST`] -> pode gerar `id` como string; como o `id` só é usado como `key` na lista, não há impacto.
- [Dependência nova de roteamento] -> um pacote a mais; em troca, URLs reais e estrutura `pages/` justificada.
