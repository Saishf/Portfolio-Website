function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function goToHome() {
  // Optional: Add a class to initiate the transition
  document.querySelector(".logo").classList.add("transitioning");

  // Delay the navigation to allow time for the transition effect
  setTimeout(function () {
    // Smooth scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, 200); // Adjust the delay to match your transition timing
}
function goToSection(sectionId) {
  const section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: "smooth" });
}
/////////// animation

document.addEventListener("DOMContentLoaded", function () {
  const roles = ["Frontend Developer", "Software Developer"];
  const roleElement = document.getElementById("role");
  let roleIndex = 0;
  let typingTimeout;

  function typeRole() {
    const role = roles[roleIndex];
    roleElement.textContent = "";

    // Type out the text
    function typeNextChar() {
      if (roleElement.textContent.length < role.length) {
        roleElement.textContent += role.charAt(roleElement.textContent.length);
        typingTimeout = setTimeout(typeNextChar, 100); // Adjust typing speed (milliseconds)
      } else {
        // Switch to next role after 3 seconds
        setTimeout(switchRole, 3000);
      }
    }

    // Start typing animation
    typeNextChar();
  }

  function switchRole() {
    roleIndex = (roleIndex + 1) % roles.length;
    typeRole(); // Start typing the next role
  }

  // Start the initial typing animation
  typeRole();
});
