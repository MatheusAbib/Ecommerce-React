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

```bash
1. Clone o repositório:
git clone https://github.com/MatheusAbib/Ecommerce-React.git

2. Entre em:
cd Ecommerce-React

3. Instale as dependências:
npm install

4. Execute o projeto:
npm start


O projeto estará disponível em:
http://localhost:3000
```

### ✅ Requisitos Atendidos
- Requisito	Status	Observação
- React + TypeScript	✅	Projeto 100% em TypeScript
- Consumo de JSON	✅	Implementado com Fetch API
- Layout conforme Figma	✅	Pixel perfect
- Modal de produto	✅	Completo com informações
- Pré-processador CSS	✅	SCSS em todos os componentes
- Sem bibliotecas UI	✅	Estilização com CSS puro / SCSS
- SEO	✅	HTML semântico e meta tags
- Componentização	✅	Estrutura modular

## 🔧 Solução Técnica para CORS

### ⚠️ Problema Encontrado
A API fornecida (`https://app.econverse.com.br/...`) bloqueia requisições diretas do `localhost:3000` devido a políticas de CORS (Cross-Origin Resource Sharing).

# Solução implementada
Para ambiente de desenvolvimento, o JSON da API foi baixado e incluído em:
/public/produtos.json

O serviço de API (api.ts) foi implementado de forma adaptativa:
Em desenvolvimento: utiliza o arquivo local

Em produção: utiliza a URL original da API
Toda a lógica de:
 - Fetch
 - Tratamento de erros
 - Tipagem com TypeScript
foi implementada como se estivesse consumindo a API real.

### 📧 Contato
- Matheus Bilitardo Abib
- GitHub: https://github.com/MatheusAbib
- LinkedIn:[ https://www.linkedin.com/in/matheus-abib](https://www.linkedin.com/in/matheusabib/)
