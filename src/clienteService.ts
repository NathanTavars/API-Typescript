import db from './database'; // Importe a conexão do banco de dados

// Defina os dados do novo cliente
const novoCliente = {
  clienteNome: 'Nome do Cliente',
  clienteEmail: 'email@example.com',
  clienteTelefone: 1234567890,
  clienteCEP: 12345,
};

// Defina a consulta SQL de inserção
const query = 'INSERT INTO clientes SET ?';

// Execute a consulta SQL de inserção
db.query(query, novoCliente, (err, results) => {
  if (err) {
    console.error('Erro ao inserir cliente:', err);
  } else {
    console.log('Cliente inserido com sucesso, ID:', results.insertId);
  }
});