# Docker

## Das solltest du wissen:
![Docker?](https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/305101027/original/a3f981efac2d0ecf90b4920f640c3d112fe9c79f/dockerize-your-application-for-easy-deployment-and-scaling.jpg)
### Warum verwenden wir Docker?
- **Vorteile**: Docker hilft uns, Anwendungen leichter zu verpacken, zu versenden und auszuführen. Es macht den Prozess der Bereitstellung von Software schneller und konsistenter, unabhängig von der Umgebung, in der sie läuft.
- **Nachteile**: Die Einrichtung und Verwaltung von Docker kann für Anfänger kompliziert sein und unsachgemäße Konfigurationen können Sicherheitsprobleme verursachen. Außerdem können Docker-Container zusätzliche Ressourcen auf dem System beanspruchen, was zu Leistungsproblemen führen kann, besonders auf älteren Computern.

### Dockerfiles und ihre Verwendung:
Dockerfiles sind wie Rezepte für die Zubereitung von Kochgerichten, aber für das Erstellen von Software. Sie sagen Docker, was in einem Docker-Image enthalten sein soll und wie es erstellt werden soll.

### Erstellung von Docker-Images:
Docker-Images werden durch Ausführen eines Docker-Befehls erstellt, der die Anweisungen in einem Dockerfile befolgt. Dieser Befehl nimmt das Dockerfile und verwandelt es in ein ausführbares Image.

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
