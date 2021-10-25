$(document).ready(function () {
    $('#myForm').on('submit', function (e) {
        e.preventDefault();
        if ($('#userPassword').val() !== $('#userPasswprdConfirmation').val())
            $('#errorMessage').text("Les mots de passe ne sont pas similaires")
        else
            $('#errorMessage').text()
    });
});