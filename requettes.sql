DROP DATABASE IF EXISTS Gestion_recette;

CREATE DATABASE Gestion_recette;

USE recette_gestion;

CREATE TABLE recettes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titre VARCHAR(100) NOT NULL,
    ingredients TEXT NOT NULL, 
    type VARCHAR(10) NOT NULL  
);
