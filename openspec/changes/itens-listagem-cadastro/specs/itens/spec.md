# Spec Delta

## Purpose

Permite consultar os itens achados e perdidos registrados na escola e cadastrar um novo item, deixando claro para o usuário quando os dados não puderam ser carregados ou salvos.

## ADDED Requirements

### Requirement: Listagem de itens registrados

O sistema SHALL exibir, na página de listagem, todos os itens retornados pela API, mostrando ao menos título, local e situação de cada item.

#### Scenario: Listagem com itens cadastrados

- **WHEN** o usuário acessa `/itens` e a API responde com um ou mais itens
- **THEN** o sistema exibe um cartão por item, com título, local e situação

#### Scenario: Listagem sem itens

- **WHEN** o usuário acessa `/itens` e a API responde com uma lista vazia
- **THEN** o sistema exibe uma mensagem informando que não há itens cadastrados, em vez de uma área em branco

### Requirement: Cadastro de item

O sistema SHALL permitir cadastrar um item informando título, descrição, local e situação (perdido ou achado), e SHALL enviar esses dados à API somente após o envio do formulário.

#### Scenario: Cadastro com dados válidos

- **WHEN** o usuário preenche título, descrição, local e situação e envia o formulário
- **THEN** o sistema envia o item à API e apresenta o item recém-cadastrado na listagem

#### Scenario: Campos obrigatórios em branco

- **WHEN** o usuário envia o formulário com qualquer campo obrigatório em branco
- **THEN** o sistema exibe uma mensagem de erro ao lado de cada campo vazio e não envia nenhuma requisição à API

### Requirement: Erro ao carregar a listagem

Quando a requisição de listagem falhar por indisponibilidade da API, o sistema SHALL informar a falha e SHALL oferecer uma ação para tentar novamente, sem exibir uma tela em branco.

#### Scenario: API indisponível na listagem

- **WHEN** o usuário acessa `/itens` e a requisição para a API falha
- **THEN** o sistema exibe uma mensagem de erro com o botão "Tentar novamente"

#### Scenario: Nova tentativa após falha

- **WHEN** o usuário clica em "Tentar novamente" e a API volta a responder
- **THEN** o sistema refaz a requisição e exibe a lista de itens

### Requirement: Erro ao salvar um item

Quando o envio do cadastro falhar, o sistema SHALL informar a falha sem perder os dados já digitados, permitindo que o usuário tente enviar novamente.

#### Scenario: Falha ao salvar item

- **WHEN** o usuário envia um cadastro válido e a requisição para a API falha
- **THEN** o sistema exibe uma mensagem de erro e mantém os valores preenchidos no formulário
