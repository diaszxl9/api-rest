# API REST de Usuários

API REST simples feita com **Node.js**, **Express** e **TypeScript** para listar, buscar e cadastrar usuários.

Os dados ficam em memória (em um array), então são perdidos quando o servidor reinicia.

## Tecnologias

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [tsx](https://github.com/privatenumber/tsx) (roda TypeScript direto, com recarregamento automático)

## Como rodar

```bash
# 1. Clonar o repositório
git clone <url-do-repositorio>
cd api-rest

# 2. Instalar as dependências
npm install

# 3. Iniciar o servidor em modo de desenvolvimento
npm run dev
```

O servidor sobe em `http://localhost:3000`.

## Rotas

| Método | Rota         | Descrição                    |
| ------ | ------------ | ---------------------------- |
| GET    | `/users`     | Lista todos os usuários      |
| GET    | `/users/:id` | Busca um usuário pelo ID     |
| POST   | `/users`     | Cadastra um novo usuário     |

### GET `/users`

Resposta `200`:

```json
[
  { "id": 1, "nome": "Fernando", "email": "f@gmail.com" },
  { "id": 2, "nome": "Maria", "email": "m@gmail.com" }
]
```

### GET `/users/:id`

- `200`: retorna o usuário.
- `404`: ID inválido ou usuário não encontrado.

### POST `/users`

Corpo da requisição:

```json
{
  "nome": "Ana",
  "email": "ana@gmail.com"
}
```

- `201`: retorna o usuário criado, com o `id` gerado.
- `400`: `nome` ou `email` ausente ou vazio.
