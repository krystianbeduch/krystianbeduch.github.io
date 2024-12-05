$(document).ready(function() {
    $('.php-email-form').submit(function(event) {
        event.preventDefault(); // Zatrzymaj domyślne działanie formularza

        // Ukryj wcześniejsze komunikaty
        $('.loading').show(); // Pokazuje komunikat "Ładowanie"
        $('.error-message').hide(); // Ukrywa komunikat błędu
        $('.sent-message').hide(); // Ukrywa komunikat o wysłaniu

        $.ajax({
            url: $(this).attr('action'),
            method: $(this).attr('method'),
            data: $(this).serialize(),
            dataType: 'json',
            success: function(response) {
                $('.loading').hide(); // Ukrywa komunikat "Ładowanie"
                $('.sent-message').show(); // Pokazuje komunikat o wysłaniu
                // Opcjonalne: przekierowanie na stronę z podziękowaniem
                // window.location.href = response.next; // Odkomentuj, aby przekierować
            },
            error: function(jqXHR, textStatus, errorThrown) {
                $('.loading').hide(); // Ukrywa komunikat "Ładowanie"
                $('.error-message').text('Wystąpił problem z wysłaniem wiadomości. Spróbuj ponownie.').show(); // Wyświetla komunikat błędu
            }
        });
    });
});