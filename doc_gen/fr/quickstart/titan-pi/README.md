---
title: Kit Indaba
next: /quickstart/app/
lang: fr-x-mtfrom-en
---
<ReadTime/> 

# Kit Indaba
 

<Leader> 

Indaba est disponible sous forme de « kit » autonome et portable, une instance autonome d&#39;Indaba qui vous permet de prendre en charge l&#39;ensemble du flux de travail Indaba sur le terrain sans connexion Internet.
 

</Leader> 

## Installation initiale
 

<ol><li>Téléchargez le fichier suivant sur une clé USB et utilisez <a href="https://etcher.balena.io/">Balena Etcher</a> pour le mettre sur une carte SD (min 32 Go) :</li></ol>
 

<blockquote>Astuce : <span class="code">faites un clic droit</span> , puis <span class="code">enregistrez le lien sous</span> pour télécharger les fichiers suivants :</blockquote>
 

<TitanVersion version="indaba-rpi.version" file="indaba-rpi.zip"/> 

<!-- - [images.tar](http://download.indaba.dev/images.tar) --> 

<ol start="2"><li>Assurez-vous que le kit de tableau de bord dispose de suffisamment de batterie ou qu&#39;il est branché sur le secteur.</li></ol>
 

<ol start="3"><li>Insérez la SD fraîchement créée dans l&#39;unité de calcul du kit de tableau de bord.</li></ol>
 

<blockquote>Astuce : La première fois que vous l&#39;allumez avec une carte SD fraîchement créée, l&#39;installation peut prendre jusqu&#39;à 15 minutes.</blockquote>
 

<strong>NE PAS METTRE HORS TENSION TANT QUE L&#39;INSTALLATION EST TERMINÉE</strong>
 

<ol start="4"><li>Pour vérifier la progression de l&#39;installation, rejoignez le réseau WiFi <span class="code">INDABA</span> avec n&#39;importe quel appareil et visitez <a href="http://indaba.local">http://indaba.local</a> ou <a href="http://10.10.10.1">http://10.10.10.1</a> .</li></ol>
 

<ol start="5"><li>Une fois que vous voyez le tableau de bord Indaba apparaître dans votre navigateur, vous êtes prêt à continuer.</li></ol>
 

## Mises à jour de logiciel
 

Vous pouvez mettre à jour le logiciel Dashboard lorsque des mises à jour sont disponibles.
 

<ol><li>Téléchargez le fichier suivant :</li></ol>
 

<blockquote>Astuce : <span class="code">faites un clic droit</span> , puis <span class="code">enregistrez le lien sous</span> pour télécharger les fichiers suivants :</blockquote>
 

<TitanVersion version="indaba-update.version" file="indaba-update.tar"/> 

<ol start="2"><li>Copiez ce fichier dans le dossier racine d&#39;une clé USB en vous assurant qu&#39;il s&#39;appelle <span class="code">indaba-update.tar</span> (vous n&#39;avez pas besoin d&#39;utiliser <span class="code">Balena Etcher</span> comme pour une première installation).</li></ol>
 

# Déploiement
 

## Mise sous tension
 

Appuyez une fois sur le bouton d&#39;alimentation et relâchez.
 

## Mise hors tension
 

Maintenez le bouton d&#39;alimentation enfoncé pendant 3 secondes et relâchez. Attendez que le voyant de l&#39;émetteur WiFi s&#39;éteigne avant de fermer le boîtier.
 

<!-- ## Initial Device Connection 

Si l&#39;application est en cours d&#39;exécution sur l&#39;ordinateur et sur tous les appareils connectés au WiFi, vous pouvez ouvrir l&#39;application sur chaque appareil Android.
 

Lors de la première exécution, l&#39;application recherchera une application locale exécutée sur un ordinateur, cela peut prendre jusqu&#39;à 30 secondes.
 

Cette première étape doit avoir lieu avec vos participants à portée du WiFi :
 

<ol><li>Demandez à chaque groupe de sélectionner le tournage auquel vous souhaitez qu’il participe.</li></ol>
 
<ol start="2"><li>Permettez-leur de se connecter, de sélectionner une caméra et d’ouvrir l’écran de la caméra.</li></ol>
 

{% indice style=&quot;info&quot; %}
 
Dès qu&#39;un appareil a rejoint l&#39;écran de la caméra et a téléchargé les ressources nécessaires, les participants peuvent contribuer au contenu sans connexion au WiFi.
 
{% indice de fin %}
 

## Capturer du contenu
 

Ce processus peut être effectué hors ligne, c&#39;est-à-dire que l&#39;ordinateur et la connexion WiFi ne doivent pas nécessairement être disponibles.
 

## Téléchargement de contenu
 

<em><strong>Nécessite une connexion WiFi à l&#39;ordinateur</strong></em>
 

Le téléchargement doit être lancé lorsque chaque appareil est connecté au WiFi et que l&#39;application est en cours d&#39;exécution sur l&#39;ordinateur. Dans certains cas, télécharger un seul appareil à la fois peut être plus rapide que de tenter de les synchroniser tous simultanément.
 

En fonction des participants, ce processus de téléchargement pourrait être intégré à des « arrêts au stand » pendant le processus de tournage.
 

## Révision du contenu
 

<em><strong>Nécessite une connexion WiFi à l&#39;ordinateur</strong></em>
 

Une fois le contenu téléchargé depuis un appareil, tous les participants peuvent le visualiser et l&#39;utiliser pour créer des histoires.
 

## Modification du contenu
 

<em><strong>Nécessite une connexion WiFi à l&#39;ordinateur</strong></em>
 

Plusieurs histoires peuvent être modifiées simultanément, mais le traitement de chacune d&#39;entre elles est effectué dans une file d&#39;attente.
 

«<strong> Publier</strong> » une histoire implique que l&#39;application crée un seul fichier vidéo à partir de l&#39;histoire des participants.
 

Une seule histoire est traitée (publiée) à la fois, il peut donc y avoir un retard pour les participants en attendant la fin du traitement de leur histoire.
 

{% indice style=&quot;info&quot; %}
 
Indaba consomme beaucoup de batterie, en particulier lors de la publication d&#39;histoires. Gardez un œil sur la batterie de votre ordinateur portable et contrôlez la consommation d’énergie si nécessaire.
 

Les histoires continueront à être traitées sans que l&#39;appareil Android soit disponible.
 
{% indice de fin %}
 

## Présentation du contenu
 

Le contenu publié en basse résolution peut être lu directement à partir des appareils Android qui ont créé le contenu, mais vous pouvez ouvrir le répertoire de téléchargement situé sur l&#39;ordinateur et lire directement les versions de haute qualité. --&gt;
 

# Entretien
 

## Sauvegarde des données
 

Les cartes SD sont parfois corrompues, c&#39;est donc une bonne pratique de maintenir des mises à jour régulières des données Indaba sur votre kit Indaba.
 

Pour effectuer une sauvegarde :
 

<ol><li>Insérez une clé USB dans le <span class="code">kit Indaba</span> .</li></ol>
 
<ol start="2"><li>Actualisez le <span class="code">tableau de bord de l&#39;administrateur</span> et sélectionnez <span class="code">Sauvegarder sur ce lecteur</span> .</li></ol>
 
<ol start="3"><li>Attendez que le dos soit terminé.</li></ol>
 

Une nouvelle sauvegarde sera créée sur la clé USB à chaque pression sur le bouton. Cette sauvegarde se trouvera dans le dossier <span class="code">/indaba/...timestamp...</span> sur le lecteur.
 

Assurez-vous de retirer cette clé USB et de la ranger à l&#39;écart du kit Indaba pour éviter la perte de données.
 

## Restaurer les données
 

Si vous devez restaurer une sauvegarde précédente pour une raison quelconque, procédez comme suit :
 

<ol><li>Localisez la clé USB avec une sauvegarde précédemment effectuée.</li></ol>
 
<ol start="2"><li>Assurez-vous de disposer d&#39;un kit Indaba fonctionnel (c&#39;est-à-dire que vous pouvez accéder au tableau de bord via un navigateur connecté au réseau WiFi <span class="code">INDABA</span> ). Si votre kit Indaba ne peut pas démarrer, vous devrez suivre les étapes de <span class="code">l&#39;installation initiale</span> et restaurer votre kit à son état par défaut.</li></ol>
 
<ol start="3"><li>Branchez la clé USB avec vos sauvegardes et visitez le tableau de bord dans un navigateur.</li></ol>
 
<ol start="4"><li>Sélectionnez le dos que vous souhaitez restaurer dans la liste du tableau de bord. Cliquez sur le bouton <span class="code">Restaurer</span> à côté de la sauvegarde.</li></ol>
 

<blockquote>Remarque : Étant donné que le kit Indaba n&#39;est pas connecté à Internet, les dates/heures indiquées peuvent ne pas avoir de sens, mais seront dans l&#39;ordre au moment où les sauvegardes ont été effectuées.</blockquote>
 

<blockquote>Remarque : Toutes les données seront effacées lors d&#39;une restauration. Faites attention à la sauvegarde que vous sélectionnez.</blockquote>
 

## Sauvegarde d&#39;urgence
 

Utilisez-le en dernier recours, lorsque vous ne pouvez pas démarrer Indaba dans un état dans lequel vous pouvez exécuter la sauvegarde à partir du tableau de bord. Cela vous permettra au minimum de récupérer les fichiers vidéo, mais en fonction de la cause de l&#39;échec, cela ne vous permettra peut-être pas de restaurer l&#39;ensemble du Kit à un état antérieur.
 

<ol><li>Créez un fichier vide appelé <span class="code">EMERGENCYBACKUP</span> sur une clé USB à l&#39;aide d&#39;un ordinateur normal.</li></ol>
 
<ol start="2"><li>Insérez la clé USB dans le <span class="code">kit Indaba</span> .</li></ol>
 
<ol start="3"><li>Attendez au moins 10 minutes, puis retirez la clé USB.</li></ol>
 
<ol start="4"><li>Insérez la clé USB dans un autre ordinateur et recherchez les fichiers de sauvegarde.</li></ol>
 

## Structure de sauvegarde
 

<em>Pour un comportement normal, il n&#39;est pas nécessaire de comprendre la structure du dossier de sauvegarde.</em>
 

<pre><code class="language-bash"></code></pre>
 
CLÉ USB/
 
├─indaba/
 
│ ├─ indaba-logs/# Emplacement des journaux générés à chaque fois que la clé USB est insérée dans l&#39;appareil.
 
│ │ ├─ logs-%timestamp%/# Contenu d&#39;une seule sauvegarde de journaux (plusieurs fichiers .log)
 
│ ├─ indaba-em-backup/
 
│ │ ├─ backup-%timestamp%/# Contenu d&#39;un seul processus de sauvegarde d&#39;urgence.
 
│ │
 
│ ├─ %horodatage%/
 
│ │ ├─ upload/# Contenu du répertoire média Indaba
 
│ │ ├─ *.json # Chaque fichier JSON est une sauvegarde d&#39;une collection de bases de données
 
│ │ ├─ indaba.redis # Sauvegarde du service de session Redis
 
│
 
│ indaba-update.tar # Fichier téléchargé depuis Internet contenant la mise à jour d&#39;Indaba
 
│ indaba-update.tar.done # Fichier de mise à jour renommé lorsque la mise à jour réussit
 
│
 
│ EMERGENYBACKUP # Fichier utilisé pour déclencher le processus de sauvegarde d&#39;urgence
 
│ EMERGENYBACKUP.done # Fichier placé sur le disque pour indiquer qu&#39;une sauvegarde d&#39;urgence est terminée
 
<pre><span class="code"></span></pre>
 

