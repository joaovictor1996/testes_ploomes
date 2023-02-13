const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    url: 'https://dev.techlead.com.br/produtividade',
    cpf_login: '00142335258',
    senha: 'Dqm50vnc!',
  },
});
