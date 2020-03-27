const knex = require('knex');
const configuracs = require('../knexfile.js');

const conexao = knex(configuracs.development);

module.exports = conexao;