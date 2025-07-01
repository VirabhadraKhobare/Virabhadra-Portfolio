// -- ---------------send the info in my google sheet-------- --
// This script sends form data to a Google Sheets script for processing.
// It uses the Fetch API to submit the form data as a POST request.

const scriptURL =
  "https://script.google.com/macros/s/AKfycbxMIft_6MwMhBbJ3ry1HQi468P4YyDBwmO6DAhOaoj7HXM151OHnxPijpctdpxSlNpv/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "✅ Message sent successfully!";
      msg.style.color = "#00ffc8";
      setTimeout(() => (msg.innerHTML = ""), 5000);
      form.reset();
    })
    .catch((error) => {
      msg.innerHTML = "❌ Message failed. Try again!";
      msg.style.color = "#ff1744";
    });
});

function openTab(evt, tabId) {
  // Remove active from all tab buttons
  document
    .querySelectorAll(".tab-button")
    .forEach((btn) => btn.classList.remove("active"));
  evt.currentTarget.classList.add("active");

  // Hide all tab content
  document.querySelectorAll(".tab-content").forEach((tab) => {
    tab.classList.remove("active", "fade-in-tab");
  });

  // Show the selected one
  const activeTab = document.getElementById(tabId);
  if (activeTab) {
    activeTab.classList.add("active", "fade-in-tab");
  }
}

// Mobile menu toggle

const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});



// Typing effect for the "About Me" section

document.addEventListener("DOMContentLoaded", function () {
  const roles = [
    "Developer",
    "Frontend Developer",
    "Java Developer"
  ];

  let roleIndex = 0;
  let charIndex = 0;
  const typingElement = document.getElementById("typing-text");

  function typeRole() {
    if (charIndex < roles[roleIndex].length) {
      typingElement.textContent += roles[roleIndex].charAt(charIndex);
      charIndex++;
      setTimeout(typeRole, 100); // typing speed
    } else {
      setTimeout(eraseRole, 1500); // wait before erasing
    }
  }

  function eraseRole() {
    if (charIndex > 0) {
      typingElement.textContent = roles[roleIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(eraseRole, 50); // erasing speed
    } else {
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(typeRole, 500);
    }
  }

  typeRole(); // start typing effect
});

