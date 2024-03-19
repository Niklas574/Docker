# Docker

## Das solltest du wissen:

### Warum verwenden wir Docker?
- **Vorteile**: Docker ermöglicht die Containerisierung von Anwendungen, wodurch diese in verschiedenen Umgebungen konsistent ausgeführt werden können. Es bietet eine leichtgewichtige Möglichkeit, Anwendungen und deren Abhängigkeiten zu isolieren und zu verwalten.
- **Nachteile**: Komplexere Konfiguration kann erforderlich sein, und es gibt potenzielle Sicherheitsbedenken bei der Verwendung von Containern.

### Dockerfiles und ihre Verwendung:
Dockerfiles sind Textdokumente, die eine Reihe von Befehlen enthalten, um ein Docker-Image zu erstellen. Sie definieren die Umgebung, in der eine Anwendung ausgeführt wird, einschließlich der Basis-Images, Pakete und Konfigurationen.

### Erstellung von Docker-Images:
Docker-Images werden durch Ausführen des Befehls docker build erstellt, der die Anweisungen im Dockerfile verwendet, um Schichten zu erstellen, die das Image definieren.

### Basis-Image:
Ein Basis-Image ist das Ausgangsimage, auf dem ein Docker-Image aufbaut. Es enthält das Betriebssystem und grundlegende Softwarepakete, die für die Ausführung von Anwendungen benötigt werden.

### Verwendung von Docker-Registries:
Docker-Registries dienen dazu, Docker-Images zu speichern und zu verteilen. Sie ermöglichen es, Images zentral zu verwalten und mit anderen zu teilen. Beispiele sind die Azure-Registry oder Docker Hub.

### Tagging von Docker-Images:
Docker-Images können mit Tags versehen werden, um verschiedene Versionen oder Varianten zu kennzeichnen. Tags dienen zur Identifizierung und zum einfachen Zugriff auf bestimmte Versionen eines Images.

### Pullen und Pushen von Docker-Images:
Beim Pullen wird ein Docker-Image von einem Registry-Server auf das lokale System heruntergeladen, während beim Pushen ein lokal erstelltes Image in den Registry-Server hochgeladen wird.

### Schichtbasierte Struktur von Docker-Images:
Docker-Images sind schichtbasiert aufgebaut, wobei jede Schicht Änderungen am Dateisystem darstellt. Dies ermöglicht eine effiziente Speicherung und Übertragung von Images sowie eine Wiederverwendung von gemeinsamen Schichten zwischen verschiedenen Images.

### Effiziente Nutzung von Docker-Images:
Durch die Verwendung von Docker-Images können Anwendungen schnell bereitgestellt und skaliert werden, da sie in Containern isoliert sind und ihre Abhängigkeiten zusammen mit der Anwendung verpackt sind.

### Best Practices für Docker-Images:
Dazu gehören die Verwendung von minimalen Basis-Images, das Minimieren der Anzahl von Schichten, das Optimieren von Dockerfiles und die Verwendung von Multi-Stage-Builds zur Reduzierung der Image-Größe.

### Sicherheit von Docker-Images:
Die Sicherheit von Docker-Images kann durch Überprüfen von Quellcode, Verwendung bekannter und vertrauenswürdiger Basis-Images, regelmäßige Updates und Patches sowie die Implementierung von Sicherheitsrichtlinien und -maßnahmen verbessert werden.

## Praxis:
Aufgabe 1:
Installiere Docker Desktop.
Erstelle ein Projekt in Visual Studio Code.
Erstelle eine einfache HTML (und CSS falls erforderlich).
Erstelle ein Dockerfile, das die Anwendungsumgebung definiert.
Baue ein Docker-Image mit dem erstellten Dockerfile.
Teste lokal, ob das Docker-Image korrekt funktioniert.
Pushe das erstellte Docker-Image in ein Azure Container Registry.
Erstelle eine Containerinstanz in Azure, die auf das gepushte Image in der Registry verweist.
Aufgabe 2:
Erstelle ein zentrales Verzeichnis in Visual Studio Code mit Frontend- und Backend-Unterverzeichnissen.
Erstelle die erforderlichen Dateien für Frontend und Backend.
Konfiguriere die Dateien entsprechend, um eine Verbindung zwischen Frontend und Backend herzustellen.
Baue Docker-Images für Frontend und Backend mithilfe der Dockerfiles.
Tagge und pushe die Docker-Images in das Azure Container Registry.
Erstelle zwei Azure Containerinstanzen (eine für Frontend, eine für Backend), die auf die gepushten Images in der Registry verweisen.
Versuche den Web-Server über die IP-Adresse und den Port im Webbrowser aufzurufen.
