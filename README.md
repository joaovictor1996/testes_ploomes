# testes_ploomes
 Testes automatizados processo seletivo da Plomes
 
# Instalações necessárias:
 
1. Baixar e instalar o Visual Studio Code (VS Code):https://code.visualstudio.com/
2. Baixar e Instalar o Node.JS: https://nodejs.org/en/download/  ou via package manager: https://nodejs.org/en/download/package-manager/
 
# Passo a passo para instalar o Cypress:
1. Criar uma pasta onde irá ficar o projeto de automação
2. Acessar essa pasta utilizando o Prompt de Comando
3. Executar o comando: npm install cypress --save-dev
4. Executar o comando: npx cypress open

# Bugs e Melhorias:
Durante os testes foi observado que para cadastrar um Cliente ou um novo Negócio, foi visto que existem etapas de cadastramento de cargos e empresas, para cadastrar é aberto um modal ao lado que possui um botão "salvar". Os botões "salvar" possuem as mesmas características, mesma classe, mesmo nome, e isso dificulta os testes automatizados, pois o cypress precisa saber com certeza em qual elemento da página ele deve executar uma ação.
