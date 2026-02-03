document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (event) {
    let isValid = true;
    const name = document.getElementById("fullname");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    document
      .querySelectorAll(".error-msg")
      .forEach((el) => (el.style.display = "none"));
    document
      .querySelectorAll(".form-input")
      .forEach((el) => el.classList.remove("invalid"));

    if (name.value.trim() === "") {
      showError("nameError", name, "Παρακαλώ εισάγετε το ονοματεπώνυμό σας.");
      isValid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
      showError("emailError", email, "Η διεύθυνση email δεν είναι έγκυρη.");
      isValid = false;
    }

    if (message.value.trim().length <= 10) {
      showError(
        "messageError",
        message,
        "Το μήνυμα πρέπει να είναι τουλάχιστον 11 χαρακτήρες.",
      );
      isValid = false;
    }

    if (!isValid) {
      event.preventDefault();
    } else {
      console.log("Validation passed, submitting...");
    }
  });

  function showError(spanId, inputEl, msg) {
    const errorSpan = document.getElementById(spanId);
    if (errorSpan) {
      errorSpan.innerText = msg;
      errorSpan.style.display = "block";
    }
    inputEl.classList.add("invalid");
  }
});
