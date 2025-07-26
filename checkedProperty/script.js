// Optional: Log to console when tasks are checked or unchecked
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

checkboxes.forEach((box) => {
  box.addEventListener("change", () => {
    console.log(
      `${box.nextElementSibling.textContent} is ${
        box.checked ? "completed" : "pending"
      }`
    );
  });
});
