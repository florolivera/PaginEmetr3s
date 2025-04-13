// Configura tu servicio y plantilla de EmailJS
const emailjsServiceID = "your_service_id";
const emailjsTemplateID = "your_template_id";
const emailjsUserID = "your_user_id";

// Obtén el formulario
const form = document.getElementById("contact-form");
const responseMessage = document.getElementById("responseMessage");

// Escucha el evento de envío del formulario
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Evita el comportamiento predeterminado de envío del formulario

  // Recoge los valores de los campos del formulario
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Muestra un mensaje de "Enviando"
  responseMessage.innerHTML = "Enviando...";

  // Usamos EmailJS para enviar el correo
  emailjs
    .send(
      emailjsServiceID,
      emailjsTemplateID,
      {
        from_name: name,
        from_email: email,
        message: message,
      },
      emailjsUserID
    )
    .then(
      function (response) {
        // Si el envío es exitoso, muestra un mensaje de éxito
        responseMessage.innerHTML = "¡Mensaje enviado con éxito!";
        responseMessage.style.color = "green";
        form.reset(); // Limpiar el formulario
      },
      function (error) {
        // Si ocurre un error, muestra un mensaje de error
        responseMessage.innerHTML =
          "Error al enviar el mensaje. Intenta nuevamente.";
        responseMessage.style.color = "red";
      }
    );
});
