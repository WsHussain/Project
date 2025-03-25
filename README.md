# 🎯 Projet Quiz - HTML, JavaScript & JSON

## 📌 Description
Ce projet est un **quiz interactif** développé en **HTML, CSS et JavaScript**, utilisant un fichier JSON pour charger dynamiquement les questions et leurs réponses. L'utilisateur doit répondre aux questions et son score est calculé en fonction de ses réponses.

## 🚀 Fonctionnalités
- Chargement asynchrone des questions depuis un fichier JSON (`document.json`)
- Gestion des réponses et affichage du score
- Progression dynamique des questions
- Différents messages de performance en fonction du score final

## 🛠️ Technologies utilisées
- **HTML5** pour la structure
- **CSS3** pour le style (ajoutez vos propres styles pour améliorer l'UI)
- **JavaScript (ES6)** pour la logique du quiz
- **JSON** pour stocker les questions et réponses

## 📂 Structure du projet
```
/quiz-app
├── index.html       # Page principale du quiz
├── style.css        # Feuille de style CSS 
├── script.js        # Logique du quiz en JavaScript
└── document.json    # Questions et réponses en format JSON
```

## 📜 Exemple de fichier `document.json`
```json
[
  {
    "question": "Quelle est la capitale de la France ?",
    "reponses": ["Paris", "Londres", "Berlin", "Madrid"],
    "solution": "1"
  },
  {
    "question": "Combien font 2 + 2 ?",
    "reponses": ["3", "4", "5", "6"],
    "solution": "2"
  }
]
```

## 🏗️ Installation et utilisation
1. **Cloner le repo** :
   ```sh
   git clone https://github.com/WsHussain/quiz-js.git
   ```
2. **Ouvrir `index.html` dans un navigateur**
3. **Jouer et tester le quiz !**

## 📌 Améliorations possibles
- Ajouter un **système de chronomètre** pour chaque question
- Ajouter des **animations CSS** pour une meilleure expérience utilisateur
- Stocker le **score en localStorage** pour sauvegarder la progression

---
👨‍💻 **Auteur** : Waqas Hussain  
