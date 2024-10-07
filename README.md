# Gestion Recette API

Cette API gère les recettes avec des fonctionnalités CRUD complètes (Création, Lecture, Mise à jour, Suppression). Elle permet d'ajouter, consulter, modifier et supprimer des recettes en fournissant des informations comme le nom, les ingrédients et les instructions.

## Prérequis

Avant de commencer, assurez-vous d'avoir installé :

- [Node.js](https://nodejs.org/) (version 14 ou supérieure)
- [MySQL](https://dev.mysql.com/downloads/installer/) (version 5.7 ou supérieure)
- [Docker](https://www.docker.com/products/docker-desktop/)

## Étapes d'installation

- Clonez le dépôt :

```
git clone https://github.com/Mbaye01/DELICE-API-RESTFUL.git
```

## Accédez au répertoire du projet :

```
cd DELICE_API_RESTFUL
```

## Installez les dépendances :

```
npm install
```

## Endpoints de l'API

### 1. `GET /api/recettes`

Récupère la liste de toutes les recettes.

**Réponse :**

- 200 OK

```
[
    {
        "id": 1,
        "titre": "Recette 1",
        "ingredients": "Ingrédient 1, Ingrédient 2",
        "type": "entrée"
    },
]
```

## 2. POST /api/recettes

Crée une nouvelle recette.

- Corps de la requête :

```
{
    "titre": "Recette 2",
    "ingredients": "Ingrédient 1, Ingrédient 2",
    "type": "dessert"
}
```

Réponse :

201

```
{
    "id": 2,
    "titre": "Recette 2",
    "ingredients": "Ingrédient 1, Ingrédient 2",
    "type": "plat"
}
```

## 3. GET /api/recettes/{id}

Récupère les détails d'une recette par son ID.

- Réponse :

200 OK

```
{
    "id": 1,
    "titre": "Recette 1",
    "ingredients": "Ingrédient 1, Ingrédient 2",
    "type": "plat"
}
```

404 Not Found (si la recette n'existe pas)

## Configurez les paramètres de connexion à la base de données dans le fichier de configuration.

- Configurer l'environnement
  Renommer le fichier .env.exemple en .env à la racine du projet et ajoutez les configurations nécessaires (par exemple, pour la base de données).

- Exemple .env :

```
DB_HOST=localhost
MYSQL_ROOT_PASSWORD=yourPassword
DB_DATABASE=yourDatabase
DB_USER=yourUsername
DB_PASSWORD=yourPassword
PORT=3000
```

- Démarrer le projet

```
npm start
```

- Exécution des tests unitaires
  Assurez-vous que jasmine un framework de test est installé :

Lancez les tests avec la commande suivante :

```
npm test
```

## Tests ESLint et formater avec Prettier

- Pour s'assurer que le code respecte les standards de style définis par ESLint, vous pouvez exécuter les tests ESLint :

```
npm run lint
```

- Corriger automatiquement les erreurs avec ESLint

```
npm run lint:fix
```

- Formatage du commande

```
npm run format
```

# Docker

## Construction de l'image Docker

- Pour construire l'image Docker, exécutez :

```
docker-compose up --build
```

## Lancement du conteneur Docker

Pour lancer le conteneur :

```
docker-compose up
```

## Auteur

[Mbaye Abdellahi Kalidou](https://github.com/Mbaye01/API-RESTFUL.git)
