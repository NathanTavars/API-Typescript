// Importe a conexão do banco de dados
import db from './database';

// Defina os dados da nova roupa
const novaRoupa = {
  modelo: 'Modelo da Roupa',
  tamanho: 'Tamanho da Roupa',
  cor: 'Cor da Roupa',
  valor: 50.00, // Substitua pelo valor correto da roupa
};

// Defina a consulta SQL de inserção
const query = 'INSERT INTO roupas SET ?';

// Execute a consulta SQL de inserção
db.query(query, novaRoupa, (err, results) => {
  if (err) {
    console.error('Erro ao inserir roupa:', err);
  } else {
    console.log('Roupa inserida com sucesso, ID:', results.insertId);
  }
});