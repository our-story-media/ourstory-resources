---
title: Dépannage
lang: fr-x-mtfrom-en
---
# Dépannage  

## Tableau de bord Titan  

### L&#39;installation se bloque/ne fait rien  

 Lorsque vous utilisez la version <span class="code">Toolbox</span> d&#39;Indaba Titan (qui est soutenue par Docker Toolbox), il y a parfois des problèmes où Docker ne démarre pas. Souvent, la méthode la plus simple pour le redémarrer consiste à:  

<ul><li> Redémarrez la machine </li></ul> 
<ul><li> Changer le réseau alors que le docker est «bloqué» le déclenche souvent pour qu&#39;il continue. </li></ul> 
<ul><li> Essayer de démarrer Indaba Titan pour la première fois tout en se connectant à Internet (en théorie, il n&#39;a pas besoin de télécharger quoi que ce soit, mais cela le fait parfois fonctionner). </li></ul> 

### Le réseau ne se reconnectera pas après la fermeture du tableau de bord  

 Exécutez l&#39;outil <span class="code">Fix Network</span> installé avec Indaba Dashboard.  

## Publication d&#39;histoire  

### Les vidéos ne sont pas la bonne longueur  

 Parfois, le périphérique qui a enregistré la vidéo d&#39;origine ne signale pas correctement la durée, ce qui entraîne des problèmes avec l&#39;étape de publication de l&#39;histoire. Cela peut être facilement corrigé en suivant ces étapes:  

<ul><li> Clonez l&#39;histoire qui pose problème </li></ul> 
<ul><li> Ouvrez l&#39;histoire dans l&#39;éditeur de l&#39;application Android </li></ul> 
<ul><li> Appuyez sur le bouton <span class="code">Trim</span> puis sur <span class="code">Back</span> pour chaque vidéo de l&#39;histoire à tour de rôle. (cela remplace la longueur signalée) </li></ul> 
<ul><li> Enregistrez l&#39;histoire et publiez à nouveau </li></ul> 

## Application Android  

 Si vous essayez les étapes suivantes et que vous ne parvenez toujours pas à vous connecter au tableau de bord Indaba, essayez de désactiver le pare-feu Windows. Cela peut souvent résoudre ces problèmes, mais n&#39;est pas recommandé dans un premier temps.  

### les erreurs  

 <strong>Erreur 1: pas de connexion réseau</strong>  
 Cette erreur signifie que l&#39;appareil n&#39;a pas de connexion WiFi (ou 3G).  

 <strong>Erreur 2: impossible de se connecter à l&#39;application</strong>  

 <strong>Erreur 3: clé API non valide</strong>  

 <strong>Erreur 4: nous rencontrons des difficultés pour récupérer vos informations. Connectez-vous à nouveau pour continuer</strong>  

 <strong>Erreur 5: veuillez vous reconnecter</strong>  

 <strong>Erreur 6: demande annulée par le participant</strong>  

 <strong>Erreur 7: erreur de serveur</strong>  

 <strong>Erreur 8: Erreur réseau inconnue</strong>  

### Écran de connexion  

 L&#39;écran de connexion contient une liste de 4 vérifications que l&#39;application effectue au démarrage. Ces vérifications peuvent vous aider à diagnostiquer des problèmes potentiels avec votre configuration Indaba.  

<ul><li> <strong>WiFi connecté</strong> : Ceci vérifie si vous avez une connexion WiFi active à laquelle le téléphone est connecté. Si cette case n&#39;est pas cochée, vérifiez que l&#39;appareil est connecté à votre réseau local Indaba. </li></ul> 
<ul><li> <strong>IP Address Range Correct</strong> : Ceci vérifie si le réseau auquel il est connecté est configuré pour Indaba, où il obtient une adresse IP dans la plage 10.10.10.x. Si ce n&#39;est pas coché, vérifiez quel WiFi est connecté et vérifiez que ce WiFi est celui d&#39;Indaba. </li></ul> 
<ul><li> <strong>Application distante trouvée</strong> : Ceci vérifie que l&#39;ordinateur Titan Dashboard peut être trouvé sur le réseau WiFi. Si cette case n&#39;est pas cochée, vérifiez que votre ordinateur est allumé, connecté au Indaba WiFi et a correctement configuré son adresse IP. </li></ul> 
<ul><li> <strong>Connexion établie</strong> : Ceci vérifie que la communication avec le tableau de bord est possible. Sinon, vérifiez que l&#39;application Dashboard est en cours d&#39;exécution sur votre ordinateur et redémarrez si nécessaire. </li></ul> 

