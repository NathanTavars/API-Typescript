import mysql from 'mysql';

const connection = mysql.createConnection({
  host: 'localhost', // Host do MySQL
  user: 'root', // Seu nome de usuário do MySQL
  password: '', // Sua senha do MySQL
  database: 'api', // Nome do banco de dados
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao MySQL:', err);
  } else {
    console.log('Conexão com o MySQL estabelecida com sucesso');
  }
});

export default connection;

