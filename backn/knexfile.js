// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './databases/dbdev.sqlite3'
    },
    migrations:{
      directory: './databases/migracoes'
    },
    useNullAsDefault:true,
  },
  test: {
    client: 'sqlite3',
    connection: {
      filename: './databases/test.sqlite3'
    },
    migrations:{
      directory: './databases/migracoes'
    },
    useNullAsDefault:true,
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
