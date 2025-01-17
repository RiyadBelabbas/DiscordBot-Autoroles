# Discord Bot - Gestion des rôles et règlement

Un **bot Discord** qui attribue des rôles automatiquement à chaque membre qui rejoint un serveur et qui gère la validation du règlement par un système de réactions. Lorsqu'un utilisateur rejoint le serveur, il reçoit des rôles prédéfinis, et après avoir accepté le règlement, certains rôles sont remplacés automatiquement.

---

## Fonctionnalités

✨ **Rôles automatiques** : À chaque nouvel utilisateur qui rejoint le serveur, le bot lui attribue plusieurs rôles définis.

🔒 **Gestion du règlement** : Un message contenant le règlement est envoyé à l'utilisateur qui rejoint, avec un emoji ✅ qu'ils peuvent cliquer pour accepter. Lors de l'acceptation, un rôle spécifique est attribué à l'utilisateur et le rôle "règlement" est retiré.

⚙️ **Personnalisation** : Tu peux facilement modifier les rôles et le message de règlement pour correspondre à ta communauté.

---

## Prérequis

Avant de faire tourner le bot, assure-toi de remplir les conditions suivantes :

- **Node.js** installé sur ta machine.
- Un **compte Discord** et un **bot Discord** créé sur le [Discord Developer Portal](https://discord.com/developers/applications).
- **Une application Discord** prête à être utilisée avec les permissions nécessaires pour gérer les membres et leurs rôles.

---

## Installation

### 1. Clone ce repository

Si tu n'as pas encore cloné le projet, fais-le avec la commande suivante dans ton terminal :
```bash
git clone https://github.com/ton-utilisateur/discord-bot.git
