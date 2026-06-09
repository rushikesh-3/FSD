console.log("SkillHub Institute Loaded Successfully");

const buttons = document.querySelectorAll(".btn-primary");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log("Course Details Viewed");
  });
});

const form = document.getElementById("registrationForm");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    document.getElementById("successAlert").classList.remove("d-none");

    form.reset();

    window.scrollTo({
      top: 250,
      behavior: "smooth",
    });
  });
}
