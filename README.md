Voici la procédure pour faire fonctionner l'application maraichage.
--------------------------------------------------------------------

1 - Créez une base de données maraichage dans mysql.

2 - Executez le fichier maraichage.sql afin de créer la table rendez_vous dans la base de données maraichage.
Cela ajoutera également des données dans la table.

3 - Créez votre fichier .env qui contient le nom de la BDD, ainsi que votre username et password pour y accéder (ceux de mysql).

4 - Dans un terminal entrez la commande : php artisan serve
Cette commande sert à lancer LARAVEL.

5 - Dans un autre terminal entrez la commande : npm run dev
Cette commande sert à lancer VITE.

Voila, vous devez pouvoir accéder à l'application dans votre navigateur à l'adresse suivante : http://localhost:8000/
