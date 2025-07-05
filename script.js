// script.js

// Show message when a button is clicked
function changeMessage() {
  const message = document.getElementById("message");
  message.textContent = "You clicked the button! 🎉";
}

// WhatsApp form submission
// script.js

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("whatsappForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const address = document.getElementById("address").value.trim();
    const budget = document.getElementById("budget").value.trim();

    // Debug logs (optional)
    console.log("Name:", name);
    console.log("Phone:", phone);
    console.log("Address:", address);
    console.log("Budget:", budget);

    // Basic validation
    if (!name || !phone || !address || !budget) {
      alert("Please fill in all fields.");
      return;
    }

    // Format and encode message
    const message = `Name: ${name}\nContact: ${phone}\nAddress: ${address}\nBudget: ${budget}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/919850067250?text=${encodedMessage}`;

    console.log("Encoded Message:", encodedMessage);
    console.log("WhatsApp URL:", whatsappURL);

    // Open in new tab
    window.open(whatsappURL, "_blank");
  });
});
