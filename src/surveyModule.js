// surveys.js
const connectDB = require('./db.js');

// Créer un nouveau survey
async function createSurvey(survey) {
    const db = await connectDB();
    
    // Vérification si le surveyId existe déjà
    const existing = await db.collection('surveys').findOne({ surveyId: survey.surveyId });
    if (existing) {
        throw new Error(`Un survey avec l'ID ${survey.surveyId} existe déjà. Veuillez choisir un ID inexistant.`);
    }
    
    // Si l'ID est unique, insérer le survey
    const result = await db.collection('surveys').insertOne(survey);
    console.log('Survey créé avec succès.');
    return result;
}


// Lire les surveys
async function readSurveys(filter = {}) {
    const db = await connectDB();
    const surveys = await db.collection('surveys').find(filter).toArray();
    console.log('Surveys:', surveys);
    return surveys;
}

// Mettre à jour un survey
async function updateSurvey(surveyId, update) {
    const db = await connectDB();
    const result = await db.collection('surveys').updateOne({ surveyId: surveyId }, { $set: update });
    if (result.matchedCount === 0) {
        throw new Error(`La mise à jour a échoué pour l'ID ${surveyId}.`);
    }
    console.log('Survey mis à jour avec succès.');
    return result;
}

// Supprimer un survey
async function deleteSurvey(surveyId) {
    const db = await connectDB();
     // Vérifier si le survey existe
     const existingSurvey = await db.collection('surveys').findOne({ surveyId: surveyId });

     if (!existingSurvey) {
         throw new Error(`Aucun survey trouvé avec l'ID ${surveyId}. La suppression n'a pas été effectuée.`);
     }
    const result = await db.collection('surveys').deleteOne({ surveyId: surveyId });
    console.log('Survey supprimé avec succès.');
    return result;
}

module.exports = {
    createSurvey,
    readSurveys,
    updateSurvey,
    deleteSurvey,
};
