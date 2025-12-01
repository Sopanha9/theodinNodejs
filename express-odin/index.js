const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8080;


const routes = {
  '/': 'index.html',
  '/about': 'about.html',
  '/contact': 'contact.html'
}

const server = http.createServer((req, res) => {
  let urlPath = req.url.split('?')[0];

  // if(urlPath.endsWith('/') && urlPath !== '/'){
  //   urlPath = urlPath.slice(0,-1);
  // }

  if (urlPath.endsWith('/') && urlPath !== '/') {
    urlPath = urlPath.slice(0, -1);
  }

  const fileName = routes[urlPath] || '404.html';

  const filePath = path.join(__dirname, fileName)

  fs.readFile(filePath, (err, content) => {
    if(err) {
      res.writeHead(500);
      res.end('Server error');
      return;
    }

    res.writeHead(200, {'content-type': 'text/html'})
    res.end(content);
  })
});


server.listen(PORT, () => {
  console.log(`Server running http://localhost:${PORT}/`)
})