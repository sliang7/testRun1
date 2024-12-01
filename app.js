document.getElementById("add-block").addEventListener("click", function () {
    const container = document.getElementById("portfolio-container");
  
    // Create a new content block
    const block = document.createElement("div");
    block.className = "content-block";
  
    // Add default content
    block.innerHTML = `
      <h2>New Project</h2>
      <p>Add your project description here.</p>
      <textarea placeholder="Paste your code, embed, or text here"></textarea>
      <button class="remove-block">Remove Block</button>
    `;
  
    // Add remove functionality
    block.querySelector(".remove-block").addEventListener("click", function () {
      container.removeChild(block);
    });
  
    // Append block to the container
    container.appendChild(block);
  });
  