// modules/delete.js
const connectDB = require('../db');

const deleteSurvey = async (surveyId) => {
    const db = await connectDB(); // Connexion à la base de données
    const result = await db.collection('surveys').deleteOne({ surveyId: surveyId }); // Suppression de l'enquête
    console.log('Survey deleted:', result.deletedCount); // Affiche le nombre de documents supprimés
};

module.exports = deleteSurvey;
