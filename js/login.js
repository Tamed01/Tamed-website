// Set PAssword visible
function myFunction() {
    var x = document.getElementById("lpassword");
    if (x.type === "password") {
      x.type = "text";
      document.getElementById("togglePassword").classList = "bi bi-eye"
    } else {
      x.type = "password";
      document.getElementById("togglePassword").classList = "bi-eye-slash"
    }
}