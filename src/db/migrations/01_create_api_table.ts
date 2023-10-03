import { Knex } from 'knex';

export const up = async (knex: Knex): Promise<void> => {
  await knex.schema.createTable('clientes', function (table) {
    table.increments('clienteId').primary();
    table.string('Nome').notNullable();
    table.string('Email').notNullable();
    table.string('Telefone', 20).notNullable();
    table.string('CEP', 10).notNullable();
  });

  await knex.schema.createTable('funcionarios', function (table) {
    table.increments('funcionarioId').primary();
    table.string('Nome').notNullable();
    table.string('email').notNullable();
    table.string('telefone', 20).notNullable();
  });

  await knex.schema.createTable('roupas', function (table) {
    table.increments('roupaId').primary();
    table.string('modelo').notNullable();
    table.string('tamanho', 10).notNullable();
    table.string('cor', 50).notNullable();
    table.decimal('valor', 10, 2).notNullable();
  });
};

export const down = async (knex: Knex): Promise<void> => {
  await knex.schema.dropTableIfExists('clientes');
  await knex.schema.dropTableIfExists('funcionarios');
  await knex.schema.dropTableIfExists('roupas');
};