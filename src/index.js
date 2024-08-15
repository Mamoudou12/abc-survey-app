const { createSurvey, readSurveys, updateSurvey, deleteSurvey } = require('./surveyModule');
const { createQuestion, readQuestions, updateQuestion, deleteQuestion } = require('./questionModule');
const { createAnswer, readAnswers, updateAnswer, deleteAnswer } = require('./answerModule');
const { question } = require('readline-sync');

// // Exemple d'utilisation

// // surveys
 (async () => {
    try {
        // Création d'un nouveau survey
        await createSurvey({
            surveyId: 12, // Assurez-vous que cet ID est unique
            name: "Oumar",
            description: "Enquête à Kiffa",
            createdAt: new Date(),
            createdBy: {
                employeeName: "Bankole",
                employeeRole: "Garde de corps"
            }
        });

    } catch (error) {
        console.error('Erreur lors de la création du survey:', error.message);
    }

    try {
        // Lire tous les surveys
        const surveys = await readSurveys();
    } catch (error) {
        console.error('Erreur lors de la lecture des surveys:', error.message);
    }

    try {
        // Mettre à jour un survey
        await updateSurvey(121, { name: "Enquête mise à jour" });
    } catch (error) {
        console.error('Erreur lors de la mise à jour du survey:', error.message);
    }

    try {
        // Supprimer un survey
        await deleteSurvey(33);
    } catch (error) {
        console.error('Erreur lors de la suppression du survey:', error.message);
    }
 })();




// // questions
  (async () => {
    try {
        // Création d'un nouveau survey
        await createQuestion({
            questionId: 11, 
            surveyId: 3,
            title: "Enquête à Kiffa",
            type: "f,vfvjv",
            options: {
                minValue: 4,
                employeeRole: 6,
                step: 5
            }
        });
    } catch (error) {
        console.error('Erreur lors de la création de la question: l`\'id existe déja');
    }

    try {
        // Lire tous les questions
        const questions = await readQuestions();
    } catch (error) {
        console.error('Erreur lors de la lecture des surveys:', error.message);
    }

    try {
        // Mettre à jour une question
        await updateQuestion(11, { type: "Brief" });
    } catch (error) {
        console.error('Erreur lors de la mise à jour du question:', error.message);
    }

    try {
        // Supprimer une question
        await deleteQuestion(12);
    } catch (error) {
        console.error('Erreur lors de la suppression de la  question:', error.message);
    }
})();





// // Answers
   (async () => {
    try {
        await createAnswer({
            answerId: 11, 
            questionId: 2,
            title: "Très satisfait",
        });
    } catch (error) {
        console.error('Erreur lors de la création de la réponse: l`\'id existe déja');
    }

    try {
        // Lire toute les réponse
        const answer = await readAnswers();
    } catch (error) {
        console.error('Erreur lors de la lecture des réponses:', error.message);
    }

    try {
        // Mettre à jour une réponse
        await updateAnswer(30, {title: "abc_corcoporation"});
    } catch (error) {
        console.error('Erreur lors de la mise à jour de la réponse:', error.message);
    }

    try {
        // Supprimer une réponse
        await deleteAnswer(10);
    } catch (error) {
        console.error('Erreur lors de la suppression de la réponse:', error.message);
    }
 })();
