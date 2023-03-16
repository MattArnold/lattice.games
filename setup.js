document.addEventListener("DOMContentLoaded", function () {
  const container = document.createElement("a-entity");
  container.setAttribute("id", "cube-container");
  container.setAttribute("position", "0 0 0");

  // Define the size of the grid
  const width = 3;
  const height = 3;
  const depth = 5;

  const size = 0.5;

  // Loop through the positions and create a cube for each one
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      for (let z = 0; z < depth; z++) {
        let position = `${x * size} ${y * size} ${z * size}`;
        let cube = document.createElement("a-entity");
        cube.setAttribute("position-cube", `position: ${position}`);
        cube.setAttribute("size", size);
        container.appendChild(cube);
      }
    }
  }

  document.querySelector("a-scene").appendChild(container);
});
