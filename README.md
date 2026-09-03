# Warm-Up JavaScript — 10 exercices

Série de 10 exercices **JavaScript**, du niveau beginner à intermediate, réalisée dans le cadre de la formation **Développeur MERN**.

L'objectif est de revoir les fondamentaux de JavaScript avant le Sprint 1 : variables, conditions, boucles, tableaux, objets, fonctions, méthodes natives (`map`, `filter`, `reduce`), chaînes de caractères et logique de traitement des données.

## 🚀 Installation et exécution

Le projet utilise **Node.js**.

Vérifier que Node.js est installé :

```bash
node -v
```

Cloner le repository puis entrer dans le dossier :

```bash
git clone <https://github.com/mohamed-bouth/warmup-javascript.git>
cd warmup-javascript
```

Exécuter un exercice :

```bash
node exercice-01.js
```

Remplacer `01` par le numéro de l'exercice souhaité.

## 📁 Structure du projet

```text
warmup-javascript/
├── exercice-01.js
├── exercice-02.js
├── exercice-03.js
├── exercice-04.js
├── exercice-05.js
├── exercice-06.js
├── exercice-07.js
├── exercice-08.js
├── exercice-09.js
├── exercice-10.js
└── README.md
```

## 📚 Exercices

### Exercice 01 — Ma fiche de profil
**Niveau : Beginner**

- Déclarer les données avec `const` et `let`
- Utiliser les template literals
- Déterminer si une personne est majeure ou mineure
- Afficher le type des variables avec `typeof`

### Exercice 02 — Convertisseur de température
**Niveau : Beginner**

- Convertir Celsius → Fahrenheit
- Décrire une température : `Froid`, `Doux` ou `Chaud`
- Tester plusieurs températures
- Travailler avec des fonctions qui retournent des valeurs

### Exercice 03 — Compte à rebours de lancement
**Niveau : Beginner**

- Compte à rebours de 10 à 1 avec `for`
- Calcul de la somme de 1 à 100
- Affichage des nombres pairs
- Refaire le compte à rebours avec `while`

### Exercice 04 — Liste de courses
**Niveau : Beginner+**

- Ajouter un élément avec `push`
- Supprimer un élément avec `indexOf` et `splice`
- Utiliser `length`
- Parcourir un tableau avec une boucle `for`
- Vérifier la présence d'un élément avec `includes`

### Exercice 05 — Fiche produit
**Niveau : Beginner+**

- Manipuler un objet
- Modifier une propriété
- Ajouter une nouvelle propriété
- Parcourir un objet avec `for...in`
- Créer une fonction `estDisponible()`

### Exercice 06 — Panier d'achat
**Niveau : Intermediate**

- Utiliser `map()` pour transformer les données
- Utiliser `filter()` pour sélectionner des articles
- Utiliser `reduce()` pour calculer des totaux
- Calculer le montant total du panier
- Calculer le nombre total d'articles

### Exercice 07 — Générateur de slug
**Niveau : Intermediate**

- Transformer un titre en slug
- Gérer les espaces multiples
- Compter les mots d'une phrase
- Générer les initiales d'un nom complet
- Manipuler les méthodes natives de `String` et `Array`

### Exercice 08 — Validation d'un formulaire
**Niveau : Intermediate**

Créer `validerInscription(donnees)` afin de vérifier :

- le nom
- l'email
- le mot de passe
- l'âge

La fonction retourne un objet :

```js
{
  valide: false,
  erreurs: []
}
```

Toutes les erreurs doivent être collectées avant de retourner le résultat.

### Exercice 09 — Remise fidélité
**Niveau : Intermediate**

Créer `calculerCommande(montant, statut)` afin de gérer :

- les remises selon le montant
- le statut `premium`
- le plafond de remise à 20 %
- les frais de livraison
- la livraison gratuite à partir de 300 DH après remise

La fonction retourne un objet récapitulatif de la commande.

### Exercice 10 — Tableau de bord des ventes
**Niveau : Intermediate**

Construire un petit tableau de bord commercial permettant de :

- calculer le chiffre d'affaires total
- trouver la vente la plus élevée
- calculer le chiffre d'affaires par vendeur
- calculer la moyenne par vendeur
- trouver les vendeurs au-dessus de la moyenne
- générer un rapport prêt à afficher

Contraintes principales :

- utiliser au moins une fois `map`
- utiliser au moins une fois `filter`
- utiliser au moins une fois `reduce`
- découper le travail en petites fonctions réutilisables
- ne pas recopier les résultats manuellement

## 🧠 Méthode de travail

Pour chaque exercice :

1. Lire entièrement l'énoncé.
2. Identifier les étapes nécessaires.
3. Écrire une petite partie du code.
4. Exécuter le fichier avec Node.js.
5. Comparer le résultat avec le résultat attendu.
6. Corriger avant de passer à l'étape suivante.

Les bonus sont optionnels et doivent être réalisés uniquement lorsque l'exercice principal fonctionne correctement.

## 🛠️ Technologies

- JavaScript
- Node.js
- Git
- GitHub

Aucune bibliothèque externe n'est nécessaire.

## 👤 Auteur

**Nom :** `Mohamed Bouthhandoust`

## 📌 Statut

Projet réalisé dans le cadre du warm-up JavaScript de la formation Développeur MERN.
