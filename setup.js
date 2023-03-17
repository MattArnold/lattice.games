document.addEventListener("DOMContentLoaded", function () {
  const container = document.createElement("a-entity");
  container.setAttribute("id", "cube-container");
  const latticeUrl = './lattice.gltf';

  // Define the cubesize of the grid
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

        /*
          Create cube to accept selection-deselection clicks,
          which will toggle visible-invisible to player when clicked
        */
        let cube = document.createElement("a-entity");
        cube.setAttribute("position-cube", `position: ${position}`);
        cube.setAttribute("size", cubesize);
        container.appendChild(cube);

        // Create lattice visible to player, to surround the clickable cube
        let latticeEntity = document.createElement('a-entity');
        latticeEntity.setAttribute('position', position);
        latticeEntity.setAttribute('load-gltf-model', {
          url: latticeUrl,
          scale: { x: cubesize, y: cubesize, z: cubesize },
          material: { color: '#006199', opacity: 1 }
        });
        container.appendChild(latticeEntity);
      }
    }
  }

  document.querySelector("a-scene").appendChild(container);
});
