document.addEventListener("DOMContentLoaded", function () {
  const container = document.createElement("a-entity");
  container.setAttribute("id", "cube-container");
  const latticeUrl = "./lattice.gltf";

  // Define the cubesize of the grid
  const spaceswide = 2;
  const spaceshigh = 2;
  const spacesdeep = 2;
  const cubesize = 1;

  container.setAttribute(
    "position",
    `${-(spaceswide * cubesize) / 2} ${-(spaceshigh * cubesize) / 2} ${
      -(spacesdeep * cubesize) / 2
    }`
  );

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
        cube.setAttribute("selectable", "");
        cube.setAttribute("selected", false);
        container.appendChild(cube);

        // // Create lattice visible to player, to surround the clickable cube
        // let lattice = document.createElement("a-entity");
        // const color = new THREE.Color(
        //   Math.floor((x / spaceswide) * 256) / 256,
        //   Math.floor((y / spaceshigh) * 256) / 256,
        //   Math.floor((z / spacesdeep) * 256) / 256
        // );
        // lattice.setAttribute("lattice", {
        //   url: latticeUrl,
        //   scale: { x: cubesize, y: cubesize, z: cubesize },
        //   material: { color: `#${color.getHexString()}`, opacity: 0.5 },
        //   position: position,
        // });
        // container.appendChild(lattice);

        // // Create text label for position
        // let textEntity = document.createElement("a-entity");
        // textEntity.setAttribute("text", {
        //   value: `${x}, ${y}, ${z}`,
        //   align: "center",
        //   width: "2",
        // });
        // textEntity.setAttribute(
        //   "position",
        //   `${x * cubesize} ${y * cubesize + 0.5} ${z * cubesize}`
        // );
        // container.appendChild(textEntity);
      }
    }
  }

  document.querySelector("a-scene").appendChild(container);
});
