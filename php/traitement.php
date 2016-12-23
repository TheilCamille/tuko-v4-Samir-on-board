<?php
// récupération des données

$nom = $_POST['nom'];
$prenom = $_POST['prenom'];
$mail = $_POST['mail'];
$classe = $_POST['classe'];
$ville = $_POST['ville'];
$message = $_POST['message'];
// Connection à la base de donnée
$db = mysql_connect( 'finalemetuaz.mysql.db', '')
$db = new PDO('mysql:host=finalemetuaz.mysql.db;dbname=	finalemetuaz','finalemetu','Rz3tvvw0p88u');

// Insertion des données dans la base

$data = $db->prepare('INSERT INTO formulaire(nom,prenom,mail,classe,ville message) VALUES(:nom,:prenom,:mail,:classe,:ville,:message)');
$data->execute(array(
    'nom'=>$nom,
    'prenom'=>$prenom,
    'mail'=>$mail,
    'classe'=>$classe,
    'ville'=>$ville,
    'message'=>$message
));
$db = null;
header('location: index.html');
exit();