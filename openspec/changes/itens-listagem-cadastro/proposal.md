# Proposal

## Why

O projeto não tem nenhuma tela funcional: `App.jsx` ainda é o template do Vite e o `db.json` já tem um item que ninguém consegue ver. O checkpoint exige uma funcionalidade completa (listagem, cadastro e erro especificado) consumindo uma API HTTP, além dos artefatos de planejamento versionados.

## What Changes

- Criar a camada de acesso à API em `src/api/itens.js` (listar e criar), isolando todo `fetch` do restante do app.
- Configurar o JSON Server como API do projeto: script `npm run api`, proxy no Vite e seed inicial no `db.json`.
- Adicionar a página de listagem de itens em `/itens`, com estados de carregando, vazio e erro.
- Adicionar a página de cadastro em `/itens/novo`, com validação dos campos obrigatórios antes do envio.
- Introduzir roteamento com `react-router` para navegar entre as duas páginas.
- Definir e implementar dois comportamentos de erro: falha de rede na API (banner + tentar novamente) e campos obrigatórios vazios (erro inline, sem request).
- Reorganizar `src/` na estrutura pedida: `api/`, `components/`, `pages/`.

Fora do escopo: autenticação, edição, exclusão, upload de imagem, paginação, busca por texto e sugestão de matches entre itens perdidos e achados.

## Capabilities

### New Capabilities

- `itens`: catálogo de itens achados e perdidos — listar os itens registrados e cadastrar um novo item, incluindo o comportamento de erro de cada operação.

### Modified Capabilities

Nenhuma. O projeto ainda não possui specs (`openspec/specs/` está vazio); esta é a primeira capability.

## Impact

- `src/App.jsx` deixa de ser o template e passa a conter o roteamento.
- Novos arquivos: `src/api/itens.js`, `src/components/`, `src/pages/`.
- `package.json`: novas dependências `react-router` (e script `api`); `json-server` já está instalado.
- `vite.config.js`: proxy de `/api` para o JSON Server (o app consome `/api/itens`).
- `db.json`: seed com alguns itens de exemplo.
