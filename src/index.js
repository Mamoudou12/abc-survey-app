const { createSurvey, readSurveys, updateSurvey, deleteSurvey } = require('./surveyModule');
const { createQuestion, readQuestions, updateQuestion, deleteQuestion } = require('./questionModule');
const { createAnswer, readAnswers, updateAnswer, deleteAnswer } = require('./answerModule');

async function main() {
     try {
        // Surveys
        await createSurvey({
            surveyId: 13,
            name: "Oumar",
            description: "Enquête à Kiffa",
            createdAt: new Date(),
            createdBy: {
                employeeName: "Bankole",
                employeeRole: "Garde de corps"
            }
        });

        await readSurveys();

        await updateSurvey(13, { name: "Enquête mise à jour" });

        await deleteSurvey(13);

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

        await readQuestions();

        await updateQuestion(11, { type: "Brief" });

        await deleteQuestion(11);

        // Answers
        await createAnswer({
            answerId: 11,
            questionId: 11,
            title: "Très satisfait",
        });

        await readAnswers();

        await updateAnswer(11, { title: "abc_corporation" });
        
        await deleteAnswer(11);

    } catch (error) {
        console.error(error.message);
    }
}

main();
