document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector("#cube-container");

  // Define the size of the grid
  const width = 5;
  const height = 5;
  const depth = 7;

  const size = 0.8;

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
});
