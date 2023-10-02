// Importe a conexão do banco de dados
import db from './database';

// Defina os dados do novo funcionário
const novoFuncionario = {
  Nome: 'Nome do Funcionário',
  email: 'emailfuncionario@example.com',
  telefone: 1234567890,
};

// Defina a consulta SQL de inserção
const query = 'INSERT INTO funcionarios SET ?';

// Execute a consulta SQL de inserção
db.query(query, novoFuncionario, (err, results) => {
  if (err) {
    console.error('Erro ao inserir funcionário:', err);
  } else {
    console.log('Funcionário inserido com sucesso, ID:', results.insertId);
  }
});