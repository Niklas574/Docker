const http = require('http');
const fs = require('fs');
const path = require('path');

// Definiere den Port, auf dem der Server laufen soll
const PORT = 3000;

// Erstelle einen HTTP-Server und definiere eine Callback-Funktion, die bei jeder Anfrage ausgeführt wird
const server = http.createServer((req, res) => {
  // Setze den HTTP-Statuscode auf 200 (OK)
  res.statusCode = 200;

  // Prüfe, ob die Anfrage für die Wurzel-URL '/' ist
  if (req.url === '/') {
    // Lese die HTML-Datei 'Website.html' ein
    fs.readFile('Website.html', (err, data) => {
      if (err) {
        // Wenn ein Fehler beim Lesen der Datei auftritt, sende einen Fehlerstatuscode 500 (Internal Server Error)
        res.statusCode = 500;
        res.end('Internal Server Error');
      } else {
        // Setze den Content-Type-Header auf 'text/html'
        res.setHeader('Content-Type', 'text/html');
        // Sende die HTML-Datei als Antwort
        res.end(data);
      }
    });
  } else {
    // Prüfe den Dateityp der Anfrage und bediene entsprechend
    serveStaticFile(req, res);
  }
});

// Funktion zum Bedienen von statischen Dateien basierend auf dem Dateityp
function serveStaticFile(req, res) {
  const filePath = path.join(__dirname, req.url);
  const extension = path.extname(filePath).toLowerCase();
  let contentType = '';

  // Setze den Content-Type entsprechend der Dateiendung
  switch (extension) {
    case '.html':
      contentType = 'text/html';
      break;
    case '.js':
      contentType = 'application/javascript';
      break;
    case '.css':
      contentType = 'text/css';
      break;
    case '.jpg':
    case '.jpeg':
    case '.png':
    case '.gif':
      contentType = 'image/' + extension.substring(1);
      break;
    case '.svg':
      contentType = 'image/svg+xml';
      break;
    case '.woff':
      contentType = 'font/woff';
      break;
    case '.woff2':
      contentType = 'font/woff2';
      break;
    default:
      res.statusCode = 404;
      res.end('Not Found');
      return;
  }

  // Lese die Datei ein und sende sie als Antwort
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.statusCode = 404;
      res.end('Not Found');
    } else {
      res.setHeader('Content-Type', contentType);
      res.end(data);
    }
  });
}

// Starte den Server und binde ihn an den angegebenen Port
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/`);
});
