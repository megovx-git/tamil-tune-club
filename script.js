// Replace this address with your real business email before publishing.
const BUSINESS_EMAIL = "hello@example.com";

document.getElementById("year").textContent = new Date().getFullYear();

const contactLink = document.getElementById("contact-link");
contactLink.href = `mailto:${BUSINESS_EMAIL}`;
contactLink.addEventListener("click", (event) => {
  if (BUSINESS_EMAIL === "hello@example.com") {
    event.preventDefault();
    alert("Website setup note: replace hello@example.com in script.js and index.html with your real contact email before publishing.");
  }
});

document.getElementById("order-form").addEventListener("submit", function (event) {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;

  if (BUSINESS_EMAIL === "hello@example.com") {
    document.getElementById("form-message").textContent =
      "Setup required: replace hello@example.com in script.js with your real email before publishing.";
    return;
  }

  const data = new FormData(form);
  const subject = encodeURIComponent("Tamil Tune Club — Music Guide Request");
  const body = encodeURIComponent(
    `New music guide request\n\nName: ${data.get("name")}\nEmail: ${data.get("email")}\nMood: ${data.get("mood")}\nEra: ${data.get("era")}\nFavourite artists/songs: ${data.get("artists") || "Not provided"}\n\nThis is an enquiry only. Payment has not been taken or verified.`
  );
  document.getElementById("form-message").textContent =
    "Your email app should open with the request details. This demo does not accept payments or store submissions.";
  window.location.href = `mailto:${BUSINESS_EMAIL}?subject=${subject}&body=${body}`;
});
