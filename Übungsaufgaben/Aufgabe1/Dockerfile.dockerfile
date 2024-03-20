# Verwende ein offizielles Node.js-Image als Basis
FROM node:14

# Setze das Arbeitsverzeichnis im Container
WORKDIR /usr/src/app

# Kopiere die Abhängigkeiten
COPY package*.json ./

# Installiere die Abhängigkeiten
RUN npm install

# Kopiere den Rest der Anwendung
COPY . .

# Exponiere den Port, auf dem die Anwendung läuft
EXPOSE 3000

# Starte die Anwendung
CMD ["node", "app.js"]

# Füge eine zusätzliche Schicht hinzu, um eine leere Textdatei zu erstellen
RUN touch /empty.txt
