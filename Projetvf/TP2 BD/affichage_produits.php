<html>
    <head>
        <link rel="stylesheet" href="page.css">
        <meta charset="UTF-8">
    </head>
        <body>
            <?php
            $requete = "select * from produits";
            $resultat = mysqli_query($conn, $requete);
            ?>
            <table border="1">
            <tr>
                <td>ID Produit</td>
                <td>Nom Produit</td>
                <td>Prix</td>
                <td>Stock</td>
            </tr>
            <?php while ($enreg = mysqli_fetch_array($resultat)) { ?>
            <tr>
                <td><?php echo $enreg["id_produit"]; ?></td>
                <td><?php echo $enreg["nom_produit"]; ?></td>
                <td><?php echo $enreg["prix"]; ?></td>
                <td><?php echo $enreg["prix"]; ?></td>
            </tr>
            <?php } ?>
            </table>
            <a href="index.html">Retour</a>
            <?php mysqli_close($conn); ?>
        </body>
</html>