const { createSurvey, readSurveys, updateSurvey, deleteSurvey } = require('./surveyModule');
const { createQuestion, readQuestions, updateQuestion, deleteQuestion } = require('./questionModule');
const { createAnswer, readAnswers, updateAnswer, deleteAnswer } = require('./answerModule');

async function main() {
     try {
    //     // Surveys
        await createSurvey({
            surveyId: 12,
            name: "Oumar",
            description: "Enquête à Kiffa",
            createdAt: new Date(),
            createdBy: {
                employeeName: "Bankole",
                employeeRole: "Garde de corps"
            }
        });

        const surveys = await readSurveys();
        console.log('Surveys:', surveys);

        await updateSurvey(12, { name: "Enquête mise à jour" });

        await deleteSurvey(12);

        // Questions
        await createQuestion({
            questionId: 11,
            surveyId: 12,
            title: "Enquête à Kiffa",
            type: "multiple_choice",
            options: {
                minValue: 4,
                maxValue: 6,
                step: 5
            }
        });

        const questions = await readQuestions();
        console.log('Questions:', questions);

        await updateQuestion(11, { type: "Brief" });

        await deleteQuestion(11);

        // Answers
        await createAnswer({
            answerId: 11,
            questionId: 11,
            title: "Très satisfait",
        });

        const answers = await readAnswers();
        console.log('Answers:', answers);

        await updateAnswer(11, { title: "abc_corporation" });

        await deleteAnswer(11);

    } catch (error) {
        console.error('Une erreur est survenue:', error.message);
    }
}

main();
