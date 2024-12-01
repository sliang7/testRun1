const sections = document.querySelectorAll(".draggable");
const portfolioContainer = document.getElementById("portfolio-sections");

sections.forEach(section => {
  section.addEventListener("dragstart", () => {
    section.classList.add("dragging");
  });

  section.addEventListener("dragend", () => {
    section.classList.remove("dragging");
  });
});

portfolioContainer.addEventListener("dragover", e => {
  e.preventDefault();
  const draggingElement = document.querySelector(".dragging");
  const afterElement = getDragAfterElement(portfolioContainer, e.clientY);
  if (afterElement) {
    portfolioContainer.insertBefore(draggingElement, afterElement);
  } else {
    portfolioContainer.appendChild(draggingElement);
  }
});

function getDragAfterElement(container, y) {
  const draggableElements = [...container.querySelectorAll(".draggable:not(.dragging)")];
  return draggableElements.reduce((closest, child) => {
    const box = child.getBoundingClientRect();
    const offset = y - box.top - box.height / 2;
    if (offset < 0 && offset > closest.offset) {
      return { offset, element: child };
    } else {
      return closest;
    }
  }, { offset: Number.NEGATIVE_INFINITY }).element;
}
