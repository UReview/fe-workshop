// Validate email address
function validateEmail(email) {

    // Regular expression for email validation
    var re = /\S+@\S+\.\S+/;

    return re.test(email);
}

var input = document.getElementById("email");

input.addEventListener("input", function (event) {
    if (validateEmail(event.target.value)) {
        console.log("valid");
        input.style.outline = "2px solid green";
    } else {
        input.style.outline = "2px solid #ff0000";
    }
});