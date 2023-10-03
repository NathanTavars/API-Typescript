import { Knex } from 'knex';

const config: Knex.Config = {
  client: 'mysql',
  connection: {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'api',
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: './db/migrations',
  },
};

export default config;