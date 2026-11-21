# Tasks

## 1. Infraestrutura de dados

- [x] 1.1 Adicionar o script `api` no `package.json` (`json-server --watch db.json --port 3000`) e o proxy de `/itens` no `vite.config.js`; verificar que `npm run api` responde `GET /itens` e que `npm run dev` acessa `/itens` sem erro de CORS.
- [x] 1.2 Substituir o seed do `db.json` por 3 itens que variem `local` e `status` (perdido/achado); verificar que `GET /itens` retorna 3 registros e que os acentos aparecem corretos no navegador.

## 2. Camada de API

- [x] 2.1 Criar `src/api/itens.js` com `listarItens()` e `criarItem(item)`, convertendo falha de rede ou resposta não-OK em `Error` com mensagem de exibição; verificar no console do navegador que `(await import('/src/api/itens.js')).listarItens()` retorna os 3 itens.
- [x] 2.2 Verificar o caminho de erro da camada de API parando o JSON Server e chamando `listarItens()`; deve rejeitar com mensagem legível, e não com erro cru de `fetch`.

## 3. Navegação

- [x] 3.1 Instalar `react-router` e configurar `BrowserRouter`/`Routes` em `App.jsx` com as rotas `/itens` e `/itens/novo`; verificar digitando as duas URLs no navegador e vendo cada página renderizar.
- [x] 3.2 Adicionar na listagem o link para `/itens/novo` e, no cadastro, o link de volta para `/itens`; verificar navegando nos dois sentidos sem recarregar a página.

## 4. Listagem

- [x] 4.1 Implementar `ListaItens` buscando os dados via `listarItens()` com estados de carregando, vazio e preenchido; verificar que a mensagem de lista vazia aparece ao esvaziar o `db.json`.
- [x] 4.2 Implementar `ItemCard` exibindo título, local e situação; verificar que cada um dos 3 itens do seed aparece em um cartão com os três dados visíveis.

## 5. Cadastro

- [ ] 5.1 Implementar `ItemForm` com os campos título, descrição, local e situação, validando no submit e exibindo erro inline por campo; verificar que enviar o formulário vazio mostra 4 erros e que a aba Network não registra nenhuma requisição.
- [ ] 5.2 Implementar `NovoItem` chamando `criarItem()` e navegando para `/itens` após sucesso; verificar cadastrando um item e vendo-o na listagem e no `db.json`.

## 6. Comportamento de erro

- [ ] 6.1 Exibir banner com "Tentar novamente" quando a listagem falha; verificar parando o JSON Server, recarregando `/itens`, religando o servidor e clicando em "Tentar novamente" para ver a lista carregar.
- [ ] 6.2 Exibir mensagem de falha no cadastro preservando os valores digitados; verificar preenchendo o formulário, parando o JSON Server, enviando e conferindo que os campos continuam preenchidos e o botão permite nova tentativa.

## 7. Fechamento

- [ ] 7.1 Conferir a estrutura final (`src/api`, `src/components`, `src/pages`) e rodar `npm run lint`; verificar que o comando termina sem erros e que nenhum `fetch` está fora de `src/api/itens.js`.
- [ ] 7.2 Commitar código e artefatos do change; verificar com `git status` limpo e `git log --stat` mostrando `openspec/changes/itens-listagem-cadastro/` junto das mudanças em `src/`.

## Workflow follow-up

- Arquivar o change com `openspec archive` quando a entrega for aceita, publicando a capability `itens` em `openspec/specs/`.
- Verificar que `openspec validate itens-listagem-cadastro --strict` passa antes do commit final.
