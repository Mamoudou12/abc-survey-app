const { createSurvey, readSurveys, updateSurvey, deleteSurvey } = require('./surveys');
const { createQuestion, readQuestions, updateQuestion, deleteQuestion } = require('./questions');
const { createAnswer, readAnswers, updateAnswer, deleteAnswer } = require('./answers');
const { question } = require('readline-sync');

// Exemple d'utilisation

// surveys
//  (async () => {
//     // try {
//     //     // Création d'un nouveau survey
//     //     await createSurvey({
//     //         surveyId: 13, // Assurez-vous que cet ID est unique
//     //         name: "Oumar",
//     //         description: "Enquête à Kiffa",
//     //         createdAt: new Date(),
//     //         createdBy: {
//     //             employeeName: "Bankole",
//     //             employeeRole: "Garde de corps"
//     //         }
//     //     });

//     //     console.log('Survey créé avec succès.');
//     // } catch (error) {
//     //     console.error('Erreur lors de la création du survey:', error.message);
//     // }

//     // try {
//     //     // Lire tous les surveys
//     //     const surveys = await readSurveys();
//     //     console.log('Surveys:', surveys);
//     // } catch (error) {
//     //     console.error('Erreur lors de la lecture des surveys:', error.message);
//     // }

//     // try {
//     //     // Mettre à jour un survey
//     //     await updateSurvey(11, { name: "Enquête mise à jour" });
//     //     console.log('Survey mis à jour avec succès.');
//     // } catch (error) {
//     //     console.error('Erreur lors de la mise à jour du survey:', error.message);
//     // }

//     try {
//         // Supprimer un survey
//         await deleteSurvey(28);
//         console.log('Survey supprimé avec succès.');
//     } catch (error) {
//         console.error('Erreur lors de la suppression du survey:', error.message);
//     }
// })();




// questions
//  (async () => {
//     try {
//         // Création d'un nouveau survey
//         await createQuestion({
//             questionId: 15, 
//             surveyId: 3,
//             title: "Enquête à Kiffa",
//             type: "f,vfvjv",
//             options: {
//                 minValue: 4,
//                 employeeRole: 6,
//                 step: 5
//             }
//         });

//         console.log('Question créé avec succès.');
//     } catch (error) {
//         console.error('Erreur lors de la création de la question: l`\'id existe déja');
//     }

    // try {
    //     // Lire tous les questions
    //     const questions = await readQuestions();
    //     console.log('questions:', questions);
    // } catch (error) {
    //     console.error('Erreur lors de la lecture des surveys:', error.message);
    // }

    // try {
    //     // Mettre à jour une question
    //     await updateQuestion(33, { type: "Enquête mise à " });
    //     console.log('Question mis à jour avec succès.');
    // } catch (error) {
    //     console.error('Erreur lors de la mise à jour du question:', error.message);
    // }

//     try {
//         // Supprimer une question
//         await deleteQuestion(33);
//         console.log('Question supprimé avec succès.');
//     } catch (error) {
//         console.error('Erreur lors de la suppression de la  question:', error.message);
//     }
//  })();





// Answers
//   (async () => {
//     try {
//         await createAnswer({
//             answerId: 11, 
//             questionId: 2,
//             title: "Très satisfait",
//         });

//         console.log('Question répondu avec succès.');
//     } catch (error) {
//         console.error('Erreur lors de la création de la réponse: l`\'id existe déja');
//     }

    // try {
    //     // Lire toute les réponse
    //     const answer = await readAnswers();
    //     console.log('Answers:', answer);
    // } catch (error) {
    //     console.error('Erreur lors de la lecture des réponses:', error.message);
    // }

    // try {
    //     // Mettre à jour une réponse
    //     await updateAnswer(11, {title: "fffdd"});
    //     console.log('réponse mis à jour avec succès.');
    // } catch (error) {
    //     console.error('Erreur lors de la mise à jour de la réponse:', error.message);
    // }

    // try {
    //     // Supprimer une réponse
    //     await deleteAnswer(25);
    //     console.log('réponse supprimé avec succès.');
    // } catch (error) {
    //     console.error('Erreur lors de la suppression de la réponse:', error.message);
    // }
// })();
