### Le Délice - API de Gestion des Recettes

Description
Cette API a été développée pour le restaurant Le Délice afin de centraliser la gestion des recettes. Elle permet d'ajouter, de modifier, de lister et de supprimer des recettes. Cette API est construite avec ExpressJS et utilise une base de données MySQL pour le stockage des informations. Elle est conteneurisée avec Docker pour faciliter le déploiement.

### Fonctionnalités

- Ajouter une recette

- Modifier une recette

- Supprimer une recette

- Lister toutes les recettes

- Validation des données avec `express-validator`

- Tests unitaires avec `Jest`

- Outil de formatage avec `Prettier`

- Analyse statique du code avec `ESLint`

### Installation et Démarrage du Projet

## Prérequis

- Node.js (version 14+ recommandée)
- MySQL (version 5.7+)
- Postman (pour les tester de l'API)
- Docker (pour la containerisation)

# Installation

1. Cloner le projet :

```bash
git https://github.com/Mbaye01/API-RESTFUL.git
```

```bash
cd API-RESTFUL
```

2. Installer les dépendances :

```bash
npm install
```

3. Configurer la base de données :

- Mettre à jour les informations de connexion à la base de données (hôte, utilisateur, mot de passe, nom de la base de données).

4. Initialiser la base de données :

- Créez une base de données MySQL et assurez-vous que la table recipes existe avec la structure suivante :

```bash
CREATE TABLE recipes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  date DATE NOT NULL
);
```

5. Démarrer le serveur :

```bash
npm start
```

### Codes de Statut HTTP

- 200 OK : La requête a été traitée avec succès.
- 201 Created : Une nouvelle ressource a été créée.
- 400 Bad Request : Les données fournies ne sont pas valides.
- 404 Not Found : La ressource demandée n'a pas été trouvée.
- 500 Internal Server Error : Une erreur serveur est survenue.

## Lancer l'application

```bash
npm start
```

## Les étapes pour construire et lancer le conteneur Docker:

```bash
docker compose up
```

```bash
docker exec -it gestion_recettes mysql -u root -p
```

## Execusion des tests unitaire

```bash
npm test
```

# Auteurs

[Mbaye Abdellahi Kalidou](https://github.com/Mbaye01/API-RESTFUL.git)
