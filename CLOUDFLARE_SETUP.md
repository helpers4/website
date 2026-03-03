# 🚀 Configuration Cloudflare Pages - helpers4.dev

## ✅ Étape 1 : Build Local (TERMINÉ)

Le build fonctionne correctement ! Le dossier `dist/` contient :
- `/` - Landing page Qwik
- `/ts/` - Documentation TypeScript
- `/dev-container/` - Documentation DevContainer
- `/action/` - Documentation GitHub Actions

---

## 📋 Étape 2 : Créer le Projet Cloudflare Pages

### 2.1 Accéder à Cloudflare Pages

1. Connectez-vous à [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Sélectionnez votre compte
3. Dans le menu de gauche, allez dans **Pages**
4. Cliquez sur **Create a project**

### 2.2 Connexion au Repository GitHub

1. Cliquez sur **Connect to Git**
2. Autorisez Cloudflare à accéder à votre compte GitHub
3. Sélectionnez le repository : `helpers4/website`
4. Cliquez sur **Begin setup**

### 2.3 Configuration du Build

Configurez les paramètres suivants :

| Paramètre | Valeur |
|-----------|--------|
| **Project name** | `helpers4` |
| **Production branch** | `main` |
| **Framework preset** | None (sélectionnez "None" dans la liste) |
| **Build command** | `pnpm install && pnpm build` |
| **Build output directory** | `dist` |
| **Root directory** | `/` (par défaut) |

### 2.4 Variables d'Environnement

Dans la section **Environment variables**, ajoutez :

```
NODE_VERSION = 20
PNPM_VERSION = 10.30.0
```

### 2.5 Lancer le Premier Build

1. Cliquez sur **Save and Deploy**
2. Cloudflare va :
   - Cloner le repository
   - Installer les dépendances
   - Exécuter le build
   - Déployer sur `*.pages.dev`

⏱️ **Durée estimée** : 3-5 minutes

---

## 🔐 Étape 3 : Récupérer les Identifiants Cloudflare

### 3.1 Account ID

1. Dans le Cloudflare Dashboard, regardez l'URL :
   ```
   https://dash.cloudflare.com/{VOTRE_ACCOUNT_ID}/pages
   ```
2. **Copiez l'Account ID** (une chaîne de 32 caractères hexadécimaux)

### 3.2 API Token

1. Allez dans [API Tokens](https://dash.cloudflare.com/profile/api-tokens)
2. Cliquez sur **Create Token**
3. Sélectionnez le template **Edit Cloudflare Workers**
   - OU utilisez **Custom Token** avec les permissions :
     - **Account** → **Cloudflare Pages** → **Edit**
4. Nommez le token : `GitHub Actions - helpers4.dev`
5. Cliquez sur **Continue to summary**
6. Cliquez sur **Create Token**
7. **COPIEZ LE TOKEN** (vous ne pourrez plus le consulter après)

---

## 🔑 Étape 4 : Configurer les Secrets GitHub

### 4.1 Accéder aux Secrets

1. Allez sur GitHub : https://github.com/helpers4/website
2. Cliquez sur **Settings** (en haut à droite)
3. Dans le menu de gauche : **Secrets and variables** → **Actions**
4. Cliquez sur **New repository secret**

### 4.2 Ajouter les Secrets

Ajoutez les 2 secrets suivants :

#### Secret 1 : CLOUDFLARE_API_TOKEN

- **Name** : `CLOUDFLARE_API_TOKEN`
- **Secret** : Le token API copié à l'étape 3.2
- Cliquez sur **Add secret**

#### Secret 2 : CLOUDFLARE_ACCOUNT_ID

- **Name** : `CLOUDFLARE_ACCOUNT_ID`
- **Secret** : L'Account ID copié à l'étape 3.1
- Cliquez sur **Add secret**

✅ **Vérification** : Vous devriez voir 2 secrets dans la liste.

---

## 🌐 Étape 5 : Configurer le Domaine helpers4.dev

### 5.1 Configuration DNS

1. Dans Cloudflare Dashboard, allez dans **Websites**
2. Sélectionnez votre domaine **helpers4.dev**
3. Allez dans **DNS** → **Records**
4. Vérifiez que le domaine pointe vers Cloudflare (nameservers configurés)

### 5.2 Associer le Domaine au Projet Pages

1. Retournez dans **Pages** → Sélectionnez votre projet **helpers4**
2. Allez dans l'onglet **Custom domains**
3. Cliquez sur **Set up a custom domain**
4. Entrez : `helpers4.dev`
5. Cliquez sur **Continue**
6. Cloudflare va automatiquement créer les enregistrements DNS nécessaires
7. Attendez quelques secondes pour la propagation DNS

### 5.3 Configuration www (Optionnel)

Si vous voulez aussi `www.helpers4.dev` :

1. Cliquez à nouveau sur **Set up a custom domain**
2. Entrez : `www.helpers4.dev`
3. Cloudflare configurera une redirection automatique

✅ **SSL/TLS** : Automatiquement activé par Cloudflare

---

## 🚢 Étape 6 : Premier Déploiement via GitHub Actions

### 6.1 Pousser vers main

Si vous avez des modifications locales à déployer :

```bash
# Vérifier les modifications
git status

# Commit et push
git add .
git commit -m "fix: update merge-builds.sh for dynamic path"
git push origin prepare-v2
```

Ou créez une Pull Request vers `main`.

### 6.2 Merger vers main

Une fois les changements sur `main`, le workflow GitHub Actions va :

1. ✅ Installer les dépendances
2. ✅ Générer la documentation
3. ✅ Builder tous les packages
4. ✅ Merger les builds
5. ✅ Déployer sur Cloudflare Pages

### 6.3 Suivi du Déploiement

1. Allez sur GitHub : https://github.com/helpers4/website/actions
2. Cliquez sur le workflow en cours d'exécution
3. Suivez les logs en temps réel

⏱️ **Durée estimée** : 5-7 minutes

---

## ✅ Étape 7 : Vérification

### 7.1 Tester le Site

Visitez les URLs suivantes :

- https://helpers4.dev/ (Landing page)
- https://helpers4.dev/ts/ (Documentation TypeScript)
- https://helpers4.dev/dev-container/ (Documentation DevContainer)
- https://helpers4.dev/action/ (Documentation GitHub Actions)

### 7.2 Checklist de Vérification

- [ ] La landing page se charge rapidement
- [ ] Les stats GitHub s'affichent (stars, issues)
- [ ] Les 3 boutons de navigation fonctionnent
- [ ] La documentation TypeScript est accessible
- [ ] La documentation DevContainer est accessible
- [ ] La documentation Actions est accessible
- [ ] Le dark mode fonctionne (bouton en haut à droite)
- [ ] Le site est responsive (testez sur mobile)
- [ ] SSL/TLS actif (cadenas vert)

---

## 🔄 Workflow Automatique de Release

Une fois configuré, le workflow suivant est automatique :

### Pour le repo TypeScript

1. Vous créez une release dans `helpers4/typescript`
2. Le workflow `.github/workflows/trigger-website-typescript.yml` s'exécute
3. Il envoie un dispatch event à `helpers4/website`
4. Le workflow `.github/workflows/typescript-release.yml` se déclenche
5. Le site est automatiquement mis à jour avec la nouvelle documentation

### Même chose pour DevContainer et Actions

Le même mécanisme s'applique pour :
- `helpers4/devcontainer` → déclenche `devcontainer-release.yml`
- `helpers4/action` → déclenche `action-release.yml`

---

## 📊 Performance et Optimisation

### Cloudflare Analytics

1. Dans Pages → Projet helpers4 → **Analytics**
2. Consultez :
   - Visites
   - Bande passante
   - Core Web Vitals
   - Géolocalisation des visiteurs

### Cache Cloudflare

Cloudflare met automatiquement en cache :
- Assets statiques (CSS, JS, images)
- Pages HTML
- TTL optimal pour performance

### Purge du Cache (si nécessaire)

Si vous avez besoin de purger le cache :

1. Pages → Projet helpers4 → **Deployments**
2. Sélectionnez le déploiement
3. Cliquez sur **...** → **Purge cache**

---

## 🐛 Dépannage

### Le Build Échoue

1. Vérifiez les logs dans GitHub Actions
2. Testez localement : `pnpm build`
3. Vérifiez que les secrets sont correctement configurés

### Le Domaine Ne Fonctionne Pas

1. Vérifiez les nameservers dans Cloudflare
2. Attendez la propagation DNS (jusqu'à 48h, généralement 5-30 min)
3. Testez avec `dig helpers4.dev` ou `nslookup helpers4.dev`

### Erreur 522 (Connection Timed Out)

- Le build prend trop de temps
- Augmentez le timeout dans le workflow GitHub Actions

### Erreur de Permissions API

- Vérifiez que le token Cloudflare a les bonnes permissions
- Re-créez un token si nécessaire
- Mettez à jour le secret GitHub

---

## 📝 Commandes Utiles

```bash
# Build local
pnpm build

# Servir le build localement
npx serve dist

# Vérifier les liens cassés
pnpm build 2>&1 | grep "broken link"

# Nettoyer le projet
pnpm clean

# Réinstaller toutes les dépendances
pnpm install

# Générer la documentation
pnpm sync-from-repos
```

---

## 🎉 Étapes Suivantes

Une fois le site déployé :

1. [ ] Annoncer le lancement sur GitHub
2. [ ] Partager sur les réseaux sociaux
3. [ ] Mettre à jour les README des repos avec les nouveaux liens
4. [ ] Configurer Cloudflare Analytics
5. [ ] Ajouter un badge "Website" dans les repositories

---

**Questions ou problèmes ?**
Ouvrez une issue sur : https://github.com/helpers4/website/issues
