# API de Controle Financeiro Pessoal

Projeto desenvolvido para a atividade A7 – Aplicando Conhecimento, da disciplina de Desenvolvimento de Sistemas.

## Objetivo

Desenvolver uma API RESTful utilizando NestJS e MongoDB Atlas para registrar receitas e despesas pessoais e auxiliar no controle financeiro e na identificação de gastos por impulso.

O projeto está relacionado aos Objetivos de Desenvolvimento Sustentável (ODS) 1 – Erradicação da Pobreza e ODS 12 – Consumo e Produção Responsáveis.

## Tecnologias utilizadas

- Node.js
- TypeScript
- NestJS
- MongoDB Atlas
- Mongoose
- Postman

## Funcionalidades

**POST /transacoes**

Permite cadastrar uma receita ou despesa com os seguintes campos:

- `descricao`: descrição da transação.
- `valor`: valor monetário.
- `tipo`: receita ou despesa.
- `categoria`: categoria da transação.
- `consumoConsciente`: indicador booleano de consumo consciente.

**GET /transacoes**

Retorna o histórico de transações cadastradas e três métricas:

- `saldoTotal`: soma das receitas menos as despesas.
- `totalDespesas`: soma de todas as despesas.
- `totalGastoImpulso`: soma das despesas com `consumoConsciente` igual a `false`.

## Como executar o projeto

1. Instale as dependências:

   `npm install`

2. Crie um arquivo `.env` na raiz do projeto, utilizando o `.env.example` como referência, e configure sua própria conexão com o MongoDB Atlas.

3. Inicie a aplicação:

   `npm run start:dev`

4. Acesse a API em `http://localhost:3000`.

## Exemplo de cadastro

Método: `POST`

URL: `http://localhost:3000/transacoes`

```json
{
  "descricao": "Conta de luz",
  "valor": 150,
  "tipo": "despesa",
  "categoria": "Moradia",
  "consumoConsciente": true
}
```

## Testes

As rotas foram testadas utilizando o Postman, com resultados positivos para cadastro, consulta do histórico e cálculo das métricas financeiras.

Também foi testado o envio de uma transação inválida, com retorno de `400 Bad Request`.

## Impacto social

A API pode apoiar iniciativas de educação financeira, permitindo que os usuários acompanhem suas receitas, despesas e gastos por impulso. Dessa forma, contribui para o consumo consciente e para a prevenção do endividamento.