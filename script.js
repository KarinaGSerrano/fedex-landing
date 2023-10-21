document.addEventListener("DOMContentLoaded", function () {
  const escaleras = document.querySelectorAll(".escalera");

  const obs = new IntersectionObserver(function (entries) {
    const entryObserved = entries[0];
    const entryIntersected = entries.filter((entry) => entry.isIntersecting)[0];

    if (entryIntersected) {
      entryIntersected.target.classList.add("show");
    } else {
      entryObserved.target.classList.remove("show");
    }
  });

  escaleras.forEach((escalera) => obs.observe(escalera));
});
