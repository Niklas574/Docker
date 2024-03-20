# Docker

## Das solltest du wissen:
![Docker?](https://i.ibb.co/F6M0yLK/dockerize-your-application-for-easy-deployment-and-scaling.png)
### Warum verwenden wir Docker?
| Vorteile                                            | Nachteile                                                               |
|-----------------------------------------------------|-------------------------------------------------------------------------|
| - Einfaches Verpacken und Ausführen von Anwendungen | - Komplizierte Einrichtung und Verwaltung                              |
| - Schnellere Bereitstellung von Software            | - Sicherheitsprobleme durch falsche Konfiguration                      |
| - Unabhängigkeit von der Umgebung                   | - Zusätzlicher Ressourcenverbrauch auf dem System                      |
| - Einfache Updates und Rollbacks                    | - Mögliche Leistungsprobleme, vor allem auf älteren Computern          |
| - Effiziente Ressourcennutzung durch Container      | - Lernkurve für Anfänger                                                |

### Dockerfiles und ihre Verwendung:
Dockerfiles sind wie Rezepte für die Zubereitung von Kochgerichten, aber für das Erstellen von Software. Sie sagen Docker, was in einem Docker-Image enthalten sein soll und wie es erstellt werden soll.

### Erstellung von Docker-Images:
Docker-Images werden durch das Ausführen eines Docker-Befehls erstellt, der die Anweisungen in einem Dockerfile befolgt. Dieser Befehl nimmt das Dockerfile und verwandelt es in ein ausführbares Image.

![Dockerfiles](https://miro.medium.com/v2/resize:fit:1400/0*CP98BIIBgMG2K3u5.png)

### Basis-Image:
Ein Basis-Image ist das Ausgangsimage, auf dem ein Docker-Image aufbaut. Es enthält das Betriebssystem und grundlegende Softwarepakete, die für die Ausführung von Anwendungen benötigt werden.

### Verwendung von Docker-Registries:
Docker-Registries dienen dazu, Docker-Images zu speichern und zu verteilen. Sie ermöglichen es, Images zentral zu verwalten und mit anderen zu teilen. Beispiele sind Azure-Registry oder Docker Hub.

![Docker-Registry](https://i.ibb.co/r5QV7Hg/1-in6-B62-Uq-KHCFP0t6-Tu-Vt-KA.jpg)

### Tagging von Docker-Images:
Docker-Images können mit Tags versehen werden, um verschiedene Versionen oder Varianten zu kennzeichnen. Tags dienen zur Identifizierung und zum einfachen Zugriff auf bestimmte Versionen eines Images.

### Pullen und Pushen von Docker-Images:
Beim Pullen wird ein Docker-Image von einem Registry-Server auf das lokale System heruntergeladen, während beim Pushen ein lokal erstelltes Image in den Registry-Server hochgeladen wird.

![Docker Push/Pull](https://velog.velcdn.com/images%2Fmajaeh43%2Fpost%2F2a7a7b7c-0446-4c22-8990-d1d69655ec41%2F%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-11-07%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%2012.46.56.png)

### Schichtbasierte Struktur von Docker-Images:
Docker-Images sind schichtbasiert aufgebaut, wobei jede Schicht Änderungen am Dateisystem darstellt. Dies ermöglicht eine effiziente Speicherung und Übertragung von Images sowie eine Wiederverwendung von gemeinsamen Schichten zwischen verschiedenen Images.

### Effiziente Nutzung von Docker-Images:
Mit Docker können Anwendungen schnell und einfach bereitgestellt und skaliert werden, weil sie in Containern verpackt sind. Diese Container enthalten alles, was die Anwendung benötigt, um zu funktionieren, wodurch sie unabhängig und leicht zu handhaben sind.

### Best Practices für Docker-Images:
Best Practices für Docker-Images beinhalten die Nutzung von kleinen Basis-Images, das Minimieren der Schichtanzahl, das Optimieren der Dockerfiles und die Verwendung von Multi-Stage-Builds, um die Bildgröße zu reduzieren.

![Docker-Best-Practice](https://sysdig.es/wp-content/uploads/Dockerfile-best-practices-02-local-development.png)

### Sicherheit von Docker-Images:
Die Sicherheit von Docker-Images kann durch Überprüfen von Quellcode, Verwendung bekannter und vertrauenswürdiger Basis-Images, regelmäßige Updates und Patches sowie die Implementierung von Sicherheitsrichtlinien und -maßnahmen verbessert werden.

