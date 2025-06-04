# 📝 Relatório Discente de Acompanhamento

## Informações do Curso

- **Projeto:** Sistema de Autenticação e Controle de Acesso com Middleware
- **Curso:** Full Stack
- **Universidade:** Estácio de Sá - Campus São José dos Pinhais
- **Período:** 5º Período
- **Turma:** 9001
- **Tecnologia:** Node.js e JWT
- **Tutor:** Robson Lorbieski
- **Matéria:** Software Sem Segurança Nao Serve (RPG0035)

## Informações do Aluno

- **Nome:** Dilnae Rennan  
- **Matrícula:** 202302631631

## Estruturação do Projeto de Autenticação e Controle de Acesso

O projeto foi desenvolvido com o objetivo de implementar um sistema seguro de autenticação de usuários, controle de contratos e gerenciamento de permissões baseado em papéis de usuário (roles), utilizando a tecnologia Node.js, JWT para autenticação e estruturação modular do código.

### Componentes Utilizados

O projeto foi estruturado utilizando os seguintes módulos principais:

- **Express:** Framework web usado para configurar rotas e middleware.
- **JWT (jsonwebtoken):** Utilizado para autenticação baseada em token.
- **Dotenv:** Gerenciamento de variáveis de ambiente para proteção de dados sensíveis.
- **Controllers:** Gerenciam a lógica de autenticação, contratos e usuários.
- **Middlewares:** Autenticação e controle de acesso baseado em papéis.
- **Models:** Simulação de banco de dados com usuários e contratos.

### Funcionalidades Implementadas

#### 🔐 Autenticação com JWT

- Implementação de login com verificação de credenciais.
- Geração de tokens seguros com tempo de expiração.
- Proteção de rotas privadas usando middleware de autenticação.

#### 🛂 Controle de Acesso por Papel

- Middleware `roleMiddleware` que permite acesso a determinadas rotas apenas a usuários com papéis específicos (admin, user).
- Implementação de níveis de acesso em contratos.

#### 📄 Manipulação de Contratos

- Listagem de todos os contratos (somente admin).
- Criação de contratos (admin).
- Acesso a contrato específico por ID.
- Validação de permissões para evitar acessos não autorizados.

## Conclusão e Impacto

O sistema desenvolvido permite autenticação e autorização segura, fornecendo uma base sólida para aplicações que demandem controle de acesso com diferentes níveis de permissão. O uso de middleware para autenticação e papéis garante uma arquitetura escalável e de fácil manutenção, tornando o sistema ideal para aplicações corporativas ou educacionais que envolvam dados sensíveis e múltiplos perfis de usuário.

