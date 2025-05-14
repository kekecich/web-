// Smooth scroll for navigation
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

// Contact form submission
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you for your message! We'll get back to you soon.");
  this.reset();
});

// Smooth scroll for feature button
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});


// Live Search
document.getElementById("searchInput").addEventListener("keyup", function () {
  const query = this.value.toLowerCase();
  const items = document.querySelectorAll("#courseList li");
  items.forEach((item) => {
    item.style.display = item.textContent.toLowerCase().includes(query) ? "" : "none";
  });
});

// Chatbot
document.getElementById("botInput").addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    const question = this.value.toLowerCase();
    const response = document.getElementById("botResponse");
    if (question.includes("library")) {
      response.textContent = "The library is open from 8AM to 6PM.";
    } else if (question.includes("tutorial")) {
      response.textContent = "You can find tutorials under the Tutorial Affairs section.";
    } else {
      response.textContent = "Sorry, I don't understand. Try asking about 'library' or 'tutorial'.";
    }
    this.value = "";
  }
});

// Dark Mode Toggle
document.getElementById("toggle-dark").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Poll Submission
document.getElementById("pollForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const selected = document.querySelector('input[name="poll"]:checked');
  document.getElementById("pollResult").textContent = selected
    ? `Thank you! You voted: ${selected.value}`
    : "Please select an option.";
});

// Contact Form
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Message sent successfully!");
  this.reset();
});



// Live Search
document.getElementById("searchInput").addEventListener("keyup", function () {
  const query = this.value.toLowerCase();
  const items = document.querySelectorAll("#courseList li");
  items.forEach((item) => {
    item.style.display = item.textContent.toLowerCase().includes(query) ? "" : "none";
  });
});

// Chatbot
document.getElementById("botInput").addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    const question = this.value.toLowerCase();
    const response = document.getElementById("botResponse");
    if (question.includes("library")) {
      response.textContent = "The library is open from 8AM to 6PM.";
    } else if (question.includes("tutorial")) {
      response.textContent = "You can find tutorials under the Tutorial Affairs section.";
    } else {
      response.textContent = "Sorry, I don't understand. Try asking about 'library' or 'tutorial'.";
    }
    this.value = "";
  }
});

// Dark Mode Toggle
document.getElementById("toggle-dark").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Poll Submission
document.getElementById("pollForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const selected = document.querySelector('input[name="poll"]:checked');
  document.getElementById("pollResult").textContent = selected
    ? `Thank you! You voted: ${selected.value}`
    : "Please select an option.";
});

// Contact Form
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Message sent successfully!");
  this.reset();
});



// Smooth scroll for feature button
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});