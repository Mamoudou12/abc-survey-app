// questions.js
const connectDB = require('./db.js');

// Créer une nouvelle question
async function createQuestion(question) {
    const db = await connectDB();
    const existing = await db.collection('questions').findOne({ questionId: question.questionId });
    if (existing) {
        throw new Error(`Un survey avec l'ID ${question.questionId} existe déjà. Veuillez choisir un ID inexistant.`);
    }
    const result = await db.collection('questions').insertOne(question);
    return result;
}

// Lire les questions
async function readQuestions(filter = {}) {
    const db = await connectDB();
    const questions = await db.collection('questions').find(filter).toArray();
    return questions;
}

// Mettre à jour une question
async function updateQuestion(questionId, update) {
    const db = await connectDB();
    const result = await db.collection('questions').updateOne({ questionId: questionId }, { $set: update });
    if (result.matchedCount === 0) {
        throw new Error(`La mise à jour a échoué pour l'ID ${questionId}.`);
    }
    return result;
}

// Supprimer une question
async function deleteQuestion(questionId) {
    const db = await connectDB();
    const existingQuestion = await db.collection('questions').findOne({ questionId: questionId });
    if (!existingQuestion) {
        throw new Error(`Aucune question trouvée avec l'ID ${questionId}. La suppression n'a pas été effectuée.`);
    }
    const result = await db.collection('questions').deleteOne({ questionId: questionId });
    return result;
}

module.exports = {
    createQuestion,
    readQuestions,
    updateQuestion,
    deleteQuestion,
};
