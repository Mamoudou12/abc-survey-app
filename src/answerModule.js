// answers.js
const connectDB = require('./db.js');

// Créer une nouvelle réponse
async function createAnswer(answer) {
    const db = await connectDB();
    
    try {
        // Vérification si l'ID de la réponse existe déjà
        const existing = await db.collection('answers').findOne({ answerId: answer.answerId });
        
        if (existing) {
            // Si l'ID existe déjà, on lance une erreur
            throw new Error(`Une réponse avec l'ID ${answer.answerId} existe déjà. Veuillez choisir un ID inexistant.`);
        }

        // Si l'ID n'existe pas, on ajoute la réponse
        const result = await db.collection('answers').insertOne(answer);
        console.log('Réponse créée avec succès.');
        
        return result;

    } catch (error) {
        // Gestion de l'erreur
        console.error('Erreur lors de la création de la réponse:', error.message);
        throw error; // Rejeter l'erreur pour que l'appelant puisse également la gérer
    } 
}


// Lire les réponses
async function readAnswers(filter = {}) {
    const db = await connectDB();
    const answers = await db.collection('answers').find(filter).toArray();
    console.log('Answers:', answers);
    return answers;
}

// Mettre à jour une réponse
async function updateAnswer(answerId, update) {
    const db = await connectDB();
    const result = await db.collection('answers').updateOne({ answerId: answerId }, { $set: update });
    if (result.modifiedCount === 0) {
        throw new Error(`La mise à jour a échoué pour l'ID ${answerId}.`);
    }
    console.log('réponse mis à jour avec succès.');
    return result;
}

// Supprimer une réponse
async function deleteAnswer(answerId) {
    const db = await connectDB();
    // Vérifier si la réponse existe
    const existingAnswer = await db.collection('answers').findOne({ answerId: answerId });

    if (!existingAnswer) {
        throw new Error(`Aucune réponse trouvée avec l'ID ${answerId}. La suppresion n'a pas été effectuée.`);
    }
    const result = await db.collection('answers').deleteOne({ answerId: answerId });
    console.log('réponse supprimé avec succès.');
    return result;
}

module.exports = {
    createAnswer,
    readAnswers,
    updateAnswer,
    deleteAnswer,
};
