# BackFeed Frontend

## 📋 Présentation

Front-end de **BackFeed**, une application web développée avec **React**, permettant aux Product Owners de centraliser,
prioriser et transformer les retours de leurs clients en tickets exploitables. Ce frontend consomme une API REST
sécurisée (développée en Spring Boot) et offre une interface utilisateur basée sur Tailwind CSS et React
Router.

## Stack technique

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [React Router DOM](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Axios](https://axios-http.com/) pour les appels API
- [React DOM](https://reactjs.org/docs/react-dom.html)
- Gestion d'authentification JWT (via Authorization: Bearer)
- Architecture modulaire par feature (dossier /features)

---

## Fonctionnalités principales

- Connexion via JWT
- Navigation sécurisée par rôle (Superadmin / PO / Client)
- Affichage des feedbacks clients par projet
- Création de feedbacks (pour les clients)
- Composants réactifs avec Tailwind
- Gestion des routes protégées (`PrivateRoute`)

---

## 🚀 Installation

### Prérequis

- Node.js >= 18.x
- NPM ou Yarn

### Étapes

1. Cloner le dépôt

```bash
git clone https://github.com/LilianaAmangoua/backfeed-front.git
cd backfeed-front
```

2. Installer les dépendances

```bash
npm install
```

3. Lancer l'application en mode développement

```bash
npm run dev
```

L'application sera disponible sur : `http://localhost:5173`

## Structure

```bash
src/
├── @types/      # Types TypeScript
├── api/         # Configuration Axios
├── assets/      # Images
├── components/  # Composants réutilisables (Navbar, Button, etc.)
├── features/    # Pages groupées par fonctionnalité (Feedbacks, Auth, etc.)
├── pages/       # Pages globales (Login, Dashboard)
├── services/    # Services métier (AuthService, FeedbackService, etc.)
└── main.jsx     # Point d'entrée
```

## 🛣️ Roadmap Frontend

Fonctionnalités à venir :

### 🔐 Auth & Sécurité

- Stockage sécurisé des tokens (localStorage → peut évoluer vers cookies HttpOnly)
- Déconnexion et expiration automatique
- Gestion de refresh token

### 📝 Feedbacks

- Filtres dynamiques (statut, projet, priorité)
- Modification conditionnelle selon statut
- Réponses du PO

### 🎫 Tickets

- Transformation de feedback en ticket
- Vue PO + vue développeur avec tri et actions
- Changement de statut dynamique

### 📬 Notifications

- Affichage en temps réel des changements
- Badge sur icône + système d'alerte
