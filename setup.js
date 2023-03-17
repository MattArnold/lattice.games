document.addEventListener("DOMContentLoaded", function () {
  const container = document.createElement("a-entity");
  container.setAttribute("id", "cube-container");
  
  // Define the size of the grid
  const spaceswide = 5;
  const spaceshigh = 3;
  const spacesdeep = 3;
  
  const cubesize = 1;

  container.setAttribute("position", `${-(spaceswide * cubesize)/2} ${-(spaceshigh * cubesize)/2} ${-(spacesdeep * cubesize)/2}`);

  // Loop through the positions and create a cube for each one
  for (let x = 0; x < spaceswide; x++) {
    for (let y = 0; y < spaceshigh; y++) {
      for (let z = 0; z < spacesdeep; z++) {
        let position = `${x * cubesize} ${y * cubesize} ${z * cubesize}`;
        let cube = document.createElement("a-entity");
        cube.setAttribute("position-cube", `position: ${position}`);
        cube.setAttribute("size", cubesize);
        container.appendChild(cube);
      }
    }
  }
  
  document.querySelector("a-scene").appendChild(container);
});
