// answers.js
const connectDB = require('./db.js');

// Créer une nouvelle réponse
async function createAnswer(answer) {
    const db = await connectDB();
    const result = await db.collection('answers').insertOne(answer);
    return result;
}

// Lire les réponses
async function readAnswers(filter = {}) {
    const db = await connectDB();
    const answers = await db.collection('answers').find(filter).toArray();
    return answers;
}

// Mettre à jour une réponse
async function updateAnswer(answerId, update) {
    const db = await connectDB();
    const result = await db.collection('answers').updateOne({ answerId: answerId }, { $set: update });
    if (result.modifiedCount === 0) {
        throw new Error(`La mise à jour a échoué pour l'ID ${answerId}.`);
    }
    return result;
}

// Supprimer une réponse
async function deleteAnswer(answerId) {
    const db = await connectDB();
    // Vérifier si la réponse existe
    const existingAnswer = await db.collection('answers').findOne({ answerId: answerId });

    if (!existingAnswer) {
        throw new Error(`Aucune réponse trouvée avec l'ID ${answerId}. La mise à jour n'a pas été effectuée.`);
    }
    const result = await db.collection('answers').deleteOne({ answerId: answerId });
    return result;
}

module.exports = {
    createAnswer,
    readAnswers,
    updateAnswer,
    deleteAnswer,
};
