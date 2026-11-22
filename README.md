# Achados e Perdidos

## Projeto e integrantes

Nosso projeto é um sistema de achados e perdidos para a escola. A ideia é reunir em um só lugar os objetos que alguém perdeu ou encontrou, facilitando a busca por eles. É possível consultar os itens cadastrados e registrar um novo, informando título, descrição, local e se ele foi perdido ou encontrado.

**Integrantes:** Larissa, Duda, Nicollas, Pedro, Paulo e Rafael.

## Framework utilizado

Usamos o **OpenSpec** para organizar o desenvolvimento a partir de uma especificação. Ele ajudou a deixar combinado o que o sistema deveria fazer antes de começarmos a programar. Com a proposta, a spec, o plano e as tarefas separados, ficou mais fácil dividir o trabalho e conferir o que cada pessoa entregou.

Para construir a aplicação, usamos **React com Vite**, React Router para navegar entre as telas e JSON Server para simular a API. Essa combinação atendeu ao que precisávamos: criar as páginas de listagem e cadastro, organizar os componentes e salvar os dados sem precisar montar um backend completo.

## Como rodar

Primeiro, tenha o Node.js e o npm instalados. Depois, abra um terminal na pasta do projeto e instale as dependências:

```bash
npm install
```

Em um terminal, suba a API:

```bash
npm run api
```

A API salva os dados no arquivo `db.json` e fica disponível em `http://localhost:3000/itens`.

Em outro terminal, suba o front:

```bash
npm run dev
```

Abra no navegador o endereço que aparecer no terminal do Vite. A listagem fica em `/itens` e o cadastro em `/itens/novo`. Ao acessar `/`, você será levado para a listagem. Deixe os dois terminais rodando para que o front consiga buscar e salvar os dados na API.

Para conferir o código e gerar a versão de produção:

```bash
npm run lint
npm run build
```

No PowerShell, se a política de execução bloquear o `npm.ps1`, utilize `npm.cmd` no lugar de `npm`.

## Onde estão os artefatos

Os documentos que usamos para planejar e acompanhar o projeto estão na pasta `openspec/changes/itens-listagem-cadastro/`:

| Artefato | Caminho |
| --- | --- |
| Proposta e escopo | [proposal.md](openspec/changes/itens-listagem-cadastro/proposal.md) |
| Especificação e cenários | [spec.md](openspec/changes/itens-listagem-cadastro/specs/itens/spec.md) |
| Plano técnico e decisões | [design.md](openspec/changes/itens-listagem-cadastro/design.md) |
| Tarefas e verificações | [tasks.md](openspec/changes/itens-listagem-cadastro/tasks.md) |

### Divisão das tarefas

| Task | Entrega | Responsável | Situação |
| --- | --- | --- | --- |
| 1 | Infraestrutura de dados: JSON Server, proxy e dados iniciais | Larissa | Concluída |
| 2 | Camada de API: listagem, cadastro e normalização dos erros | Duda | Concluída |
| 3 | Navegação entre listagem e cadastro | Nicollas | Concluída |
| 4 | Listagem, estados da página e cartões dos itens | Pedro | Concluída |
| 5 | Formulário, validação e cadastro de itens | Paulo | Concluída |
| 6 | Tratamento de falhas na listagem e no cadastro | Rafael | Concluída |
| 7 | Conferência da estrutura, lint e fechamento dos commits | Pedro | Concluída |

Se você tiver o CLI do OpenSpec instalado, pode conferir os artefatos com:

```bash
openspec validate itens-listagem-cadastro --strict
```

## Reflexão

### Que decisão o agente teria tomado sozinho e a spec evitou?

Um exemplo é a validação do formulário. Sem a spec, o agente poderia mostrar só um aviso geral quando faltasse algum campo, ou até enviar os dados incompletos para a API. Nós definimos que cada campo vazio deveria ter sua própria mensagem de erro e que o envio só poderia acontecer depois da validação. Assim, o resultado não ficou dependendo apenas da escolha do agente.

### Que inconsistência a validação encontrou? Estava na spec ou no código?

A validação do OpenSpec passou na conferência final, e não temos registro de um erro anterior apontado por ela. Já no histórico do código, aparece uma correção na navegação: as páginas `/itens` e `/itens/novo` existiam, mas faltava definir o que aconteceria ao abrir a página inicial, `/`. Isso foi resolvido no commit `14d96ef`, com um redirecionamento para a listagem.

Era um ponto que faltava no código e que também poderíamos ter descrito na spec. Como o histórico não diz qual verificação encontrou o problema, não dá para atribuí-lo ao validador. A lição foi que, além de validar os documentos, precisamos abrir a aplicação e testar os caminhos que uma pessoa usaria.

### Como o framework ajudou ou atrapalhou a coordenação do grupo?

O OpenSpec ajudou porque cada pessoa tinha uma tarefa definida e sabia o que precisava entregar. Também ficou mais fácil entender o que dependia de outra etapa: as páginas, por exemplo, usavam as funções preparadas na tarefa da API. A spec serviu como referência para todos seguirem o mesmo comportamento no cadastro e no tratamento dos erros.

A parte mais trabalhosa foi manter os documentos e o checklist atualizados junto com o código. Para um projeto pequeno, isso toma um tempo, mas ajudou a acompanhar o andamento e a revisar o que já estava pronto.

### O que fariam diferente com outro framework?

Se usássemos outro framework, manteríamos a ideia de combinar os requisitos antes de programar. Se o trabalho fosse organizado por issues ou cartões, colocaríamos em cada tarefa o que fazer, como conferir se funcionou e quais etapas precisariam estar prontas antes. Também deixaríamos o comportamento da página inicial definido desde o começo e anotaríamos melhor os resultados dos testes, para facilitar a revisão no final.
