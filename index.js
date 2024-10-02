require('dotenv').config();

// Utiliser les variables d'environnement
const port = process.env.PORT || 3000;
const dbURL = process.env.DATABASE_URL;

console.log(`Server running on port ${port}`);
console.log(`Connected to database at ${dbURL}`);
