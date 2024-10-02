# Utiliser l'image officielle de Node.js comme image de base
FROM node:18.17.0

# Créer un répertoire de travail pour l'application
WORKDIR /index

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances de l'application
RUN npm install 

# Copier le reste des fichiers de l'application
COPY . .

# Exposer le port que votre application utilise
EXPOSE 4000

# Commande pour démarrer l'application
CMD ["npm", "start"]
