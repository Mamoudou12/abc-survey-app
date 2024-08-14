# ABC Survey App

## Description

ABC Survey App est une application permettant de gérer des enquêtes de satisfaction client. Elle permet de créer, lire, mettre à jour et supprimer des enquêtes (surveys), des questions (questions), et des réponses (answers). L'application utilise MongoDB comme base de données pour stocker les informations.

## Prérequis

Avant de commencer, assurez-vous d'avoir installé les éléments suivants :

- [Node.js](https://nodejs.org/) (version 12 ou supérieure)
- [MongoDB](https://www.mongodb.com/try/download/community) (version 4.0 ou supérieure)

## Instalation
1. Cloner le dépot :
git clone https://github.com/votre-utilisateur/abc-survey-app.git
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
### surveys.js
- createSurvey :
 permet de créer un nouveau survey.
- readSurveys :
Récupère tous les surveys ou ceux correspondant à un filtre spécifique.
- updateSurvey :
Permet de mettre à jour un survey existant.
- deleteSurvey : 
Supprime un survey en fonction de son ID.

### questions.js
- createQuestion :
 Crée une nouvelle question pour un survey. 
- readQuestions :
Récupère toutes les questions ou celles correspondant à un filtre spécifique.
- updateQuestion :
Met à jour une question existante.
- deleteQuestion : 
Supprime une question en fonction de son ID.

### answers.js
- createAnswer :
 Crée une nouvelle réponse pour une question.
- readAnswers :
Récupère toutes les réponses ou celles correspondant à un filtre spécifique.
- updateAnswer :
 Met à jour une réponse existante.
- deleteAnswer : 
Supprime une réponse en fonction de son ID.

## Auteur
Mamoudou Adama Ba


