# ABC Survey App

## Description

ABC Survey App est une application permettant de gérer des enquêtes de satisfaction client. Elle permet de créer, lire, mettre à jour et supprimer des enquêtes (surveys), des questions (questions), et des réponses (answers). L'application utilise MongoDB comme base de données pour stocker les informations.

## Prérequis

Avant de commencer, assurez-vous d'avoir installé les éléments suivants :

- [Node.js](https://nodejs.org/) (version 12 ou supérieure)
- [MongoDB](https://www.mongodb.com/try/download/community) (version 4.0 ou supérieure)

## Instalation
1. Cloner le dépot :
git clone https://github.com/Mamoudou12/abc-survey-app.git
cd abc-survey-app

2. Installer les dépendances :
npm install

3. Configurer la base de donné
- Créez une base de données MongoDB.
- Modifiez le fichier db.js pour inclure votre URL de connexion MongoDB.

## Démarrage
Pour exécuter l'application, utilisez la commande suivante :
- npm start 

## Documentation des Fonctions
### surveyModule.js
- createSurvey :
 - Description : Crée un nouveau survey avec les informations fournies.
 - Paramètre : { surveyId: 1, title: "Customer Satisfaction", createdBy: "John Doe" }
 - Retourne : Un objet contenant les détails du survey créé.

- readSurveys(filter = {}):
 - Description : Récupère tous les surveys ou ceux correspondant à un filtre spécifique.
 - Retourne : Une liste de surveys correspondant au filtre.

- updateSurvey(surveyId, update) :
 - Description : Met à jour un survey existant en fonction de l'ID et des données de mise à jour fournies.
 - Paramètre : { surveyId: 1, updateData: { title: "Employee Satisfaction" } }
 - Retourne : Un objet contenant les détails mis à jour du survey.

- deleteSurvey(surveyId): : 
 - Description : Supprime un survey en fonction de son ID.
 - Paramètre : { surveyId: 1 }
 - Retourne : Un message confirmant la suppression du survey.

### questionModule.js
- createQuestion(question): 
  - Description : Crée une nouvelle question pour un   survey spécifique.
  - Paramètre : { questionId: 101, surveyId: 1, text: "How satisfied are you with our service?" }
  - Retourne : Un objet contenant les détails de la question créée.

- readQuestions(filter = {}):
  - Description : Récupère toutes les questions ou celles correspondant à un filtre spécifique.
  - Retourne : Une liste de questions correspondant au filtre.

  - updateQuestion(questionId, update):
  - Description : Met à jour une question existante en fonction de l'ID de la question et des données de mise à jour fournies.
  - Paramètre : { questionId: 101, updateData: { text: "How likely are you to recommend us?" } }
  - Retourne : Un objet contenant les détails mis à jour de la question.

  - deleteQuestion(questionId): 
  - Description : Supprime une question en fonction de son ID.
  - Paramètre : { questionId: 101 }
  - Retourne : Un message confirmant la suppression de la question.

### answerModule.js
- createAnswer(answer): :
  - Description : Crée une nouvelle réponse pour une question spécifique.
  - Paramètre : { answerId: 1001, questionId: 101, title: "Very Satisfied" }
  - Retourne : Un objet contenant les détails de la réponse créée.

- readAnswers(filter = {}): 
  - Description : Récupère toutes les réponses ou celles correspondant à un filtre spécifique.
  - Paramètre : { questionId: 101 }
  - Retourne : Une liste de réponses correspondant au filtre.

- updateAnswer(answerId, update):
  - Description : Met à jour une réponse existante en fonction de l'ID de la réponse et des données de mise à jour fournies.
  - Paramètre : { answerId: 1001, updateData: { title: "Somewhat Satisfied" } }
  - Retourne : Un objet contenant les détails mis à jour de la réponse.

- deleteAnswer(answerId):
  - Description : Supprime une réponse en fonction de son ID.
  - Paramètre : { answerId: 1001 }
  - Retourne : Un message confirmant la suppression de la réponse.

## Auteur
Mamoudou Adama Ba


