# 🍽️ Throubi Restaurant - Showcase Web Project

Une interface web immersive et responsive développée pour un restaurant de luxe, mettant l'accent sur l'expérience utilisateur (UX) et l'interactivité via JavaScript.

---

## ✨ Fonctionnalités
* **Design Immersif** : Utilisation de transitions CSS3 et d'animations au scroll (Intersection Observer API).
* **Navigation Fluide** : Barre de navigation intelligente (navbar.js) qui s'adapte au comportement de l'utilisateur.
* **Menu Interactif** : Interface de commande dynamique et présentation élégante des plats.
* **Responsive Design** : Adaptabilité complète (Mobile / Tablette / Desktop).

---

## 🛡️ Focus Cybersécurité & Bonnes Pratiques

Bien que ce projet soit une vitrine statique (Frontend), il a été conçu avec une réflexion sur la sécurité web :

### 1. Protection contre les vulnérabilités Client-Side
* **Prévention XSS (Cross-Site Scripting)** : Structure HTML sémantique limitant les points d'injection. Les scripts sont isolés et les manipulations de DOM via JavaScript sont contrôlées.
* **Politique de Referrer** : Utilisation de `rel="noopener"` sur les liens externes (ex: réseaux sociaux dans `contact.html`) pour empêcher le détournement de fenêtre (tabnabbing).

### 2. Optimisation & Confidentialité
* **Validation des Entrées** : Le formulaire de contact intègre des types d'entrées HTML5 pour une première barrière de validation contre les injections simples.
* **Sécurité des Scripts** : Chargement asynchrone et isolation des fonctions JavaScript pour éviter les conflits et l'exposition de variables globales.

---

## 🚀 Technologies utilisées
* **HTML5 / CSS3** : Flexbox, Grid, Animations Keyframes.
* **JavaScript (ES6)** : Manipulation du DOM, API Intersection Observer pour les animations au scroll.
* **Splide.js** : Pour le slider d'images haute performance.

---

## 🌐 Voir le site en ligne
Le projet est déployé via GitHub Pages. Vous pouvez le consulter ici : https://melissa-yahiatene.github.io/Throubi-Restaurant/
