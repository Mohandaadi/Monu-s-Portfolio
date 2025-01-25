function sendMail() {
    var params = {
        name: document.getElementById("from_name").value.trim(),
        email: document.getElementById("email").value.trim(),
        subject: document.getElementById("subject").value.trim(),
        message: document.getElementById("message").value.trim(),
    };

    const serviceID = "service_7jlpv5f";
    const templateID = "template_luu2mr5";

    emailjs.send(serviceID, templateID, params)
        .then((res) => {
            console.log("Email sent successfully:", res); // Log success response
            document.getElementById("from_name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("subject").value = "";
            document.getElementById("message").value = "";
            alert("Your message was sent successfully!");
        })
        .catch((err) => {
            console.error("Failed to send email:", err); // Log error details
            alert("An error occurred while sending the message. Please try again.");
        });
}
