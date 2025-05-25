<?php
$dogru_sifre = "MA"; 

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $gelen_sifre = $_POST['password'] ?? '';

    if ($gelen_sifre === $dogru_sifre) {
        header("Location: gallery.html");
        exit;
    } else {
        echo "<p style='color:red;'>Yanlış şifre! <a href='index.html'>Geri dön</a></p>";
    }
} else {
    header("Location: index.html");
    exit;
}
?>