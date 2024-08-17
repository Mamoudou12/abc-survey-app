# ABC Survey App

## Description

ABC Survey App est une application permettant de gérer des enquêtes de satisfaction client. Elle permet de créer, lire, mettre à jour et supprimer des enquêtes (surveys), des questions (questions), et des réponses (answers). L'application utilise MongoDB comme base de données pour stocker les informations.

## Prérequis

Avant de commencer, assurez-vous d'avoir installé les éléments suivants :

- [Node.js](https://nodejs.org/) (version 12 ou supérieure)
- [MongoDB](https://www.mongodb.com/try/download/community) (version 4.0 ou supérieure)

## Instalation
1. **Clonez le repository :**
    ```bash
    git clone https://github.com/Mamoudou12/abc-survey-app.git
    ```
2. **Accédez au dossier du projet :**

    ```bash
    cd abc-survey-app
    ```

3. **Installez les dépendances :**

    ```bash
    npm install
    ```

4. **Configurez la base de données :**
- Créez une base de données MongoDB.
- Modifiez le fichier db.js pour inclure votre URL de connexion MongoDB.

## Démarrage
## Démarrage
Pour exécuter l'application, utilisez la commande suivante :
`` npm start `` 
 

## Documentation des Fonctions
### surveyModule.js
- createSurvey(servey) :
  - Crée un nouveau survey avec les informations fournies et retourn Un objet contenant les détails du survey créé.
  - servey(object) :
    - surveyId (int): Identifiant unique du survey. 
    - title (string) Titre du survey. 
    - createdBy (objet):
      - employeeName: Nom de la personne ayant créé le survey.
      - employeeRole (string): Role  

- readSurveys (): 
  - Récupère tous les surveys ou ceux correspondant à un filtre spécifique et retourne une liste de surveys correspondant au filtre. 

- updateSurvey (surveyId, update):
  - Met à jour un survey existant en fonction de l'ID et des données de mise à jour fournies et retourn un objet contenant les détails mis à jour du survey.
    - surveyId (int) Identifiant unique du survey à mettre à jour.
    - update (object): Données de mise à jour, par exemple { description: "Enquête visant à évaluer la satisfaction" }.

- deleteSurvey: 
  - Supprime un survey en fonction de son ID et retourn message confirmant la suppression du survey. 
    - surveyId (int): L'identifiant du servey à supprimer. 
  

### questionModule.js
- createQuestion (question) : 
  - Crée une nouvelle question pour un   survey et spécifique et retourn un objet contenant les détails de la question crée.
  - question (object):
    - questionId (int): Identifiant unique de la question.
    - surveyId (int): Identifiant unique du survey auquel la question appartient.
    - title (string): la question.
    - type (string): Type de la question
    - option (object):
      - minValue (int)
      - maxValue (int)
      - step (int)

- readQuestions ():
  - Description : Récupère toutes les questions ou celles correspondant à un filtre spécifique et retourn une liste de questions correspondant au filtre.
    
- updateQuestion (questionId, update) :
  - Met à jour une question existante en fonction de l'ID de la question et des données de mise à jour fournies et retourn un objet contenant les détails mis à jour de la question.
    - questionId (int): Identifiant unique de la question à mettre à jour.
    - update (objet):  Données de mise à jour, par exemple { title: "Comment évalueriez-vous notre service ?" }
 
- deleteQuestion: 
  - Supprime une question en fonction de son ID et retourn un message confirmant la suppression de la question. 
    - questionId (int): Identifiant unique de la question à supprimer. 

### answerModule.js
- createAnswer(answer): 
  - Crée une nouvelle réponse pour une question spécifique et retourn un objet contenant les détails de la réponse créée.
  - answer (object) : 
    - answerId (int): Identifiant unique de la réponse.
    - questionId (int): Identifiant unique de la question à laquelle la réponse est associée.
    - title (string): La réponse. 

- readAnswers(): 
  - Récupère toutes les réponses ou celles correspondant à un filtre spécifique et retourn un liste de réponses correspondant au filtre.

- updateAnswer (answerId, update):
  - Met à jour une réponse existante en fonction de l'ID de la réponse et des données de mise à jour fournies et retourn un objet contenant les détails mis à jour de la réponse.
    - answerId (int):  Identifiant unique de la réponse à mettre à jour.
    - update (object):  Données de mise à jour, par exemple { title: "Rapidité du service" }.   

- deleteAnswer(answerId):
  - Supprime une réponse en fonction de son ID et retourn unmessage confirmant la suppression de la réponse.
    - answerId (int): Identifiant unique de la réponse à supprimer.
  

## Auteur
Mamoudou Adama Ba [Lien de mon profil](https://github.com/Mamoudou12)




