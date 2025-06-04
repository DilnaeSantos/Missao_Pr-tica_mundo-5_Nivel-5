<?php

function isValidRedirectUrl($url) {
    // Verifica se contém CRLF
    if (preg_match('/[\r\n]/', $url)) {
        return false;
    }

    // Verifica se é uma URL relativa (impede domínios externos)
    if (parse_url($url, PHP_URL_HOST) !== null) {
        return false;
    }

    // Opcional: permite apenas caminhos válidos
    if (!preg_match('/^[\/a-zA-Z0-9_\-\.]+$/', $url)) {
        return false;
    }

    return true;
}

$redirectUrl = $_GET['url'] ?? '/home';

if (!isValidRedirectUrl($redirectUrl)) {
    // Redireciona para uma página padrão em caso de falha
    $redirectUrl = '/home';
}

header('Location: ' . $redirectUrl);
exit;
?>
