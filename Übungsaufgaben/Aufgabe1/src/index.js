const http = require('http');
const fs = require('fs');

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
    // Wenn die Anfrage für eine andere URL ist, sende einen 404 (Not Found) Statuscode
    res.statusCode = 404;
    res.end('404 - Not Found');
  }
});

// Starte den Server und binde ihn an den angegebenen Port
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/`);
});
