Télécharger le projet :
git clone https://github.com/mon-projet/burger-shop.git
cd burger-shop

Installer les dépendances :
npm install
Lancer le projet :

ng serve
Le site s’ouvre sur http://localhost:4200

compte test
nina.quetin@gmail.com
mdp: 123456

Fonctionnalités principales:

- inscription/ connexion
- liste des burges
- panier
    - ajouter des burgers disponibles
    - afficher les infos des produits
    - total
    - si panier vide, pas de bouton commandé
- commande
    - lorsque la commande est validée, le panier est vidé et une page de confirmation apparait
    - on peut commander uniquement si des burgers ont été ajouté au panier
- profil
    - accessible que si connecté
    - historique de commande
- gestion des erreurs
    - produit indisponible mentionné

J'ai séparé mon projet Angular en plusieurs parties:
- models qui comprend les interaces
- services: authentification, cart, order et product
- features: 
    - auth: login et register
    - cart
    - home: burger-list et home
    - not found
    - order confirmation
    - products
    - profile
- components:
    - bouton retour sur la page d'accueil
    - bouton de base
    - hero section
    - menu

La page “Profil” est protégée : elle n’est accessible que si l’utilisateur est connecté.
Si quelqu’un essaie d’y accéder sans être connecté, il est redirigé vers la page de connexion.

Si un produit est indisponible, un message clair est affiché.
Si l’utilisateur n’est pas connecté (erreur 401), il est invité à se connecter sans perdre son panier.

Les captures d'écran sont dans le fichier public/capture_ecran

