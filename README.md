# ABC Survey App

## Description

ABC Survey App est une application permettant de gérer des enquêtes de satisfaction client. Elle permet de créer, lire, mettre à jour et supprimer des enquêtes (surveys), des questions (questions), et des réponses (answers). L'application utilise MongoDB comme base de données pour stocker les informations.

## Prérequis

Avant de commencer, assurez-vous d'avoir installé les éléments suivants :

- [Node.js](https://nodejs.org/) (version 12 ou supérieure)
- [MongoDB](https://www.mongodb.com/try/download/community) (version 4.0 ou supérieure)

## Instalation
1. Cloner le dépot :
`` git clone https://github.com/Mamoudou12/abc-survey-app.git``
cd abc-survey-app

2. Installer les dépendances :
`` npm install ``

3. Configurer la base de donné
- Créez une base de données MongoDB.
- Modifiez le fichier db.js pour inclure votre URL de connexion MongoDB.

## Démarrage
Pour exécuter l'application, utilisez la commande suivante :
`` npm start `` 

## Documentation des Fonctions
### surveyModule.js
- createSurvey :
  - Description : Crée un nouveau survey avec les informations fournies.
  - Paramètre : (
    - surveyId (int): Identifiant unique du survey. 
    - title (string) Titre du survey. 
    - createdBy (string) Nom de la personne ayant créé le survey.
  ) 
  - Retourne : Un objet contenant les détails du survey créé.

- readSurveys:
  - Description : Récupère tous les surveys ou ceux correspondant à un filtre spécifique.
  - Paramètre:
    - filter (object, optionnel) : Critères pour filtrer les surveys. 

  - Retourne : Une liste de surveys correspondant au filtre.

- updateSurvey:
  - Description : Met à jour un survey existant en fonction de l'ID et des données de mise à jour fournies.
  - Paramètre : (
    - surveyId (int) Identifiant unique du survey à mettre à jour.
    - update (object): Données de mise à jour, par exemple { title: "Employee Satisfaction" }.)
  - Retourne : Un objet contenant les détails mis à jour du survey.

- deleteSurvey: 
  - Description : Supprime un survey en fonction de son ID.
  - Paramètre :  
    - surveyId (int) 
  - Retourne : Un message confirmant la suppression du survey.

### questionModule.js
- createQuestion: 
  - Description : Crée une nouvelle question pour un   survey spécifique.
  - Paramètre : (
    - questionId (int): Identifiant unique de la question.
    - surveyId (int): Identifiant unique du survey auquel la question appartient.
    - text (string): Texte de la question.
  ) 
  - Retourne : Un objet contenant les détails de la question créée.

- readQuestions:
  - Description : Récupère toutes les questions ou celles correspondant à un filtre spécifique.
  - Paramètre:
    - filter (object, optionnel): Critères pour filtrer les questions.
  - Retourne : Une liste de questions correspondant au filtre.

- updateQuestion:
  - Description : Met à jour une question existante en fonction de l'ID de la question et des données de mise à jour fournies.
  - Paramètre: (
    - questionId (int): Identifiant unique de la question à mettre à jour.
    - update (objet):  Données de mise à jour, par exemple { text: "How likely are you to recommend us?" }.)
   
  - Retourne : Un objet contenant les détails mis à jour de la question.

- deleteQuestion: 
  - Description : Supprime une question en fonction de son ID.
  - Paramètre :
    - questionId (int): Identifiant unique de la question à supprimer.
  - Retourne : Un message confirmant la suppression de la question.

### answerModule.js
- createAnswer(answer): :
  - Description : Crée une nouvelle réponse pour une question spécifique.
  - Paramètre : (
    - answerId (int): Identifiant unique de la réponse.
    - questionId (int): Identifiant unique de la question à laquelle la réponse est associée.
    - title (string): Texte de la réponse.
  )  
  - Retourne : Un objet contenant les détails de la réponse créée.

- readAnswers(filter = {}): 
  - Description : Récupère toutes les réponses ou celles correspondant à un filtre spécifique.
  - Paramètre : 
    - filter (object, optionnel): Critères pour filtrer les réponses.
  - Retourne : Une liste de réponses correspondant au filtre.

- updateAnswer:
  - Description : Met à jour une réponse existante en fonction de l'ID de la réponse et des données de mise à jour fournies.
  - Paramètre : (
    - answerId (int):  Identifiant unique de la réponse à mettre à jour.
    - update (object):  Données de mise à jour, par exemple { title: "Somewhat Satisfied" }.) 
  - Retourne : Un objet contenant les détails mis à jour de la réponse.

- deleteAnswer(answerId):
  - Description : Supprime une réponse en fonction de son ID.
  - Paramètre : (
    - answerId (int): Identifiant unique de la réponse à supprimer.
  )
  - Retourne : Un message confirmant la suppression de la réponse.

## Auteur
Mamoudou Adama Ba [Lien de mon profil](https://github.com/Mamoudou12)




