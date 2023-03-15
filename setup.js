document.addEventListener("DOMContentLoaded", function () {
  var container = document.querySelector('#cube-container');

  // Define the size of the grid
  var width = 5;
  var height = 5;
  var depth = 7;

  // Loop through the positions and create a cube for each one
  for (var x = 0; x < width; x++) {
    for (var y = 0; y < height; y++) {
      for (var z = 0; z < depth; z++) {
        var position = `${x} ${y} ${z}`;
        var cube = document.createElement('a-entity');
        cube.setAttribute('position-cube', `position: ${position}`);
        container.appendChild(cube);
      }
    }
  }
}