const knex = require('knex');
const configuracs = require('../knexfile.js');

const configtwo = process.env.NODE_ENV == 'test' ? configuracs.test : configuracs.development

const conexao = knex(configtwo);

module.exports = conexao;