const http = require('http');
const url = require('url');
const queryString = require('query-string');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {

  let resposta;

  const urlparse = url.parse(req.url, true);
  const params = queryString.parse(urlparse.search);

  if(urlparse.pathname === '/criar-usuario') {
  
  // Criar um usuario

    fs.writeFile(`users/${params.id}.txt`, JSON.stringify(params), function (err) {
      if (err) throw err;
      console.log('Saved!');

      res.statusCode = 201;
      res.setHeader('Content-Type', 'text/plain');
      res.end(resposta);
    });

    resposta =  'Usuário criado com sucesso';
  } 

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(resposta);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});