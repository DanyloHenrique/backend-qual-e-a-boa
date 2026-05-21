# 🎉 Qual é a Boa? — Backend

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F.svg?style=for-the-badge&logo=node.js&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)

API REST da plataforma Qual é a Boa?, responsável pela listagem de eventos e envio de e-mails de inscrição.

🔗 **Frontend:** [github.com/DanyloHenrique/qual-e-a-boa](https://github.com/DanyloHenrique/qual-e-a-boa)

## 🚀 Funcionalidades

* **Listagem de eventos:** Gerenciamento e filtragem de eventos por categoria
* **Inscrição por e-mail:** envio de notificações via Gmail SMTP para usuários inscritos

## 🛠 Tecnologias e Ferramentas

* **Runtime:** Node.js com TypeScript
* **Framework:** Express 5
* **ORM:** Prisma ORM
* **Banco de dados** PostgreSQL
* **Validação:** Zod
* **E-mail:** Nodemailer (Gmail SMTP)
* **Infraestrutura:** Docker & Docker Compose
* **Linter:** Biome

## 🏗 Arquitetura

O projeto segue uma arquitetura em camadas simples e direta:

* **Routes:** definição dos endpoints da API
* **Controllers:** recebem a requisição e delegam para os casos de uso
* **Use Cases:** contêm as regras de negócio
* **Repository:** acesso ao banco de dados via Prisma
* **Domain:** DTOs e classes de domínio

## 📁 Estrutura do Projeto

```
src/
├── controller/      # Controladores da API
├── domain/
│   ├── category/    # DTOs e classes de categoria
│   └── event/       # DTOs e classes de evento
├── lib/             # Instâncias compartilhadas (ex: Prisma Client)
├── repository/      # Acesso ao banco de dados
├── routes/          # Definição das rotas
├── schemas/         # Schemas de validação (Zod)
├── useCases/        # Regras de negócio
└── utils/           # Funções utilitárias
```

## 🛠 Instalação e Execução

### Pré-requisitos

- **Node.js** - v20.x ou superior
- **Docker** com Docker Compose

### Passo a passo

1. **Clone o repositório**
```bash
git clone https://github.com/DanyloHenrique/backend-qual-e-a-boa.git
cd backend-qual-e-a-boa
```

2. **Instale as dependências**
```bash
npm install
```

3. **Configure as variáveis de ambiente**

Crie um arquivo `.env` na raiz do projeto:

```env
PORT=3000
COMPOSE_PROJECT_NAME=qual_e_a_boa_backend

DB_USER=postgres
DB_PASSWORD=sua_senha
DB_NAME=qual_e_a_boa_db

DATABASE_URL="postgresql://postgres:sua_senha@localhost:5432/qual_e_a_boa_db?schema=public"

EMAIL_ORIGIN=seu_email@gmail.com
EMAIL_PASSWORD="sua_senha_de_app"
```

4. **Suba o banco de dados**
```bash
docker-compose up -d
```

5. **Execute as migrations**
```bash
npx prisma migrate dev
```

6. **Inicie o servidor**
```bash
npm run dev
```

O servidor estará disponível em **http://localhost:3000**.

## Scripts

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Compila o projeto para produção |
| `npm run start` | Inicia o servidor em produção |
| `npm run start:prod` | Executa migrations e inicia em produção |

## 🐳 Docker

O projeto conta com um `Dockerfile` multi-stage para build otimizado e um `docker-compose.yml` para subir o banco de dados PostgreSQL localmente.

Para subir apenas o banco:
```bash
docker-compose up -d
```
