# Verwende ein offizielles Node.js-Image als Basis
FROM node:14

# Setze das Arbeitsverzeichnis im Container
WORKDIR /usr/src/app

# Füge eine zusätzliche Schicht hinzu, um eine leere Textdatei zu erstellen
RUN touch /empty.txt
