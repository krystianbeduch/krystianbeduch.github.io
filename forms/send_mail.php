<?php
if($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);

    // Konfiguracja maila
    $to = "beduch_krystian@o2.pl";
    $headers = "From: $email" . "\r\n" .
                "Reply-To: $email" . "\r\n" .
                "X-Mailer: PHP/" . phpversion();
    
    // Tresc wiadomosc
    $messageBody = "Imię: $name\n";
    $messageBody .= "Email: $email\n";
    $messageBody .= "Wiadomość: \n$message";

    // Wysylanie maila
    if (mail($to, $subject, $messageBody, $headers)) {
        echo "Twoja wiadoomść została wysłana. Dzięki";
    }
    else {
        echo "Błąd podczas wysyłania wiadomości";
    }
}
else {
    echo "Nieprawidłowe zapytanie";
}
?>