# Commands
***
## New-Item
- New-Item -Path <Pfad> -Name <Dateiname> -ItemType <Dateityp>
    - New-Item -Path . -Name Dockerfile -ItemType File
>[!NOTE]
>Erstellt eine Datei, welche später als Dockerfile benutzt wird
***
## docker build
- docker build -t <image_name>:<tag> <path_to_dockerfile_directory>
    - docker build -t test:v1.0 ".\Übungsaufgaben\Aufgabe1"
    - docker build -t test:v1.0
>[!NOTE]
>Erstellt ein Image. Im ersten Beispiel in einem speziellem Pfad und im zweiten Beispiel im Pfad, von dem man es ausführt.
***
## docker run
- docker run -dp <ip+port> <image_name>
    - docker run -dp 127.0.0.1:3000:3000 test:v1.0
>[!NOTE]
>Erstellt ein Docker Container mit dem angegebenen Image und startet den Container.
***
## docker tag
- docker tag <image_name> <login_server>.azurecr.io/<image_name>
    - docker tag test:v1.0 testcontainerregistry.azurecr.io/test:v1.0
>[!NOTE]
>Umbenennen des Images.
***
## az login
- az login
>[!NOTE]
>In Azure anmelden.
***
## az account set
- az account set --subscription <subscription_id>
>[!NOTE]
>Subscription auswählen
***
## az acr login
- az acr login --name <ContainerRegistry_Name>
>[!NOTE]
>Im Container Registry anmelden.
***
## docker push
- docker push <login_server>.azurecr.io/<image_name>
    - docker push testcontainerregistry.azurecr.io/test:v1.0
>[!NOTE]
>Image auf Azure pushen.
***
## docker images
- docker images
>[!NOTE]
>Zeigt alle Images an
***
## az acr credential show
- az acr credential show --name <ContainerRegistry_Name>
    - az acr credential show --name testcontainerregistry
>[!NOTE]
>Zeigt den Anmeldenamen und das Passwort an.
***
## az container create
- az container create --resource-group <resourcegroup_name> --name <container_name> --image <image_name> --registry-login-server <login_server>.azurecr.io --registry-username <username> --registry-password <password>
    - az container create --resource-group example-rg --name examplecontainername --image testcontainerregistry.azurecr.io/test:v1.0 --registry-login-server testcontainerregistry.azurecr.io --registry-username <username_from_acr> --registry-password <password_from_acr>
>[!NOTE]
>Erstellt eine Container Instance für den Container Registry.
***
