# Teste Econverse - Desenvolvedor Front-End

## 📋 Sobre o Projeto
Projeto desenvolvido em **React + TypeScript** para exibição de uma vitrine de produtos, consumindo dados via API em [JSON](https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json), conforme layout fornecido no [FIGMA](https://www.figma.com/file/rWnzPeoxgynuNPsJjV0VmV/Teste-Front-End-Jr?node-id=0%3A1). O foco foi criar uma aplicação moderna, responsiva, componentizada e com boa organização de código.

## ✨ Funcionalidades
- Vitrine de produtos com consumo de API
- Modal detalhado de produtos
- Layout responsivo e fiel ao Figma
- Componentização com React
- Estilização com SCSS
- Efeitos visuais modernos
- Código organizado e tipado com TypeScript

## 🛠️ Tecnologias Utilizadas
- React
- TypeScript
- SCSS
- Fetch API
- CSS Grid e Flexbox
- Git

## ⚙️ Como Executar

### Pré-requisitos
- Node.js 16 ou superior
- npm ou yarn

### Passo a Passo

1. Clone o repositório:
```bash
git clone https://github.com/MatheusAbib/Ecommerce-React.git
cd Ecommerce-React

Instale as dependências
npm install


Execute o projeto:

npm start


O projeto estará disponível em:

http://localhost:3000

✅ Requisitos Atendidos
Requisito	Status	Observação
React + TypeScript	✅	Projeto 100% em TypeScript
Consumo de JSON	✅	Implementado com Fetch API
Layout conforme Figma	✅	Pixel perfect
Modal de produto	✅	Completo com informações
Pré-processador CSS	✅	SCSS em todos os componentes
Sem bibliotecas UI	✅	Estilização com CSS puro / SCSS
SEO	✅	HTML semântico e meta tags
Responsivo	✅	Mobile-first
Componentização	✅	Estrutura modular
🔧 Solução técnica para consumo da API (CORS)
Problema

A API fornecida (https://app.econverse.com.br/...) não permite acesso direto a partir do localhost devido a políticas de CORS.

Solução implementada

Para ambiente de desenvolvimento, o JSON da API foi baixado e incluído em:

/public/produtos.json


O serviço de API (api.ts) foi implementado de forma adaptativa:

Em desenvolvimento: utiliza o arquivo local

Em produção: utiliza a URL original da API

Toda a lógica de:

Fetch

Tratamento de erros

Tipagem com TypeScript
foi implementada como se estivesse consumindo a API real.

Como testar com a URL real

Remova o arquivo:

public/produtos.json


O código tentará acessar a URL original

Para funcionar corretamente, é necessário um servidor com CORS configurado

📝 Próximas melhorias

Implementação de testes unitários

Melhorias de performance

Refinamentos visuais no modal

📧 Contato

Matheus Bilitardo Abib
GitHub: https://github.com/MatheusAbib

LinkedIn: https://www.linkedin.com/in/matheus-abib
