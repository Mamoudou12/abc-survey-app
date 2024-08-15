// db.js
const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017'; // URL de connexion à MongoDB
const dbName = 'abc_corporation'; // Nom de votre base de données

let db = null;

async function connectDB() {
    if (db) {
        return db; // Si la connexion existe déjà, la renvoyer
    }
    
    try {
        // Créer un nouveau client MongoDB et se connecter
        const client = new MongoClient(url);

        await client.connect(); // Connexion au serveur MongoDB
        console.log('Connecté avec succès à MongoDB');

        db = client.db(dbName); // Sélectionner la base de données
        return db;
    } catch (error) {
        console.error('Erreur de connexion à MongoDB:', error);
        process.exit(1); // Quitter le processus en cas d'erreur
    }
}

module.exports = connectDB;
