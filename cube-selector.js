AFRAME.registerComponent('cube-selector', {
  init: function () {
    var el = this.el;
    var selected = null;

    el.addEventListener('grab-start', function (evt) {
      // Get the intersected object
      var intersected = evt.detail.intersection.object;

      // Check if it has the selectable attribute
      if (intersected.hasAttribute('selectable')) {
        // Set the selected cube to the intersected object
        selected = intersected;

        // Change the material of the selected cube
        selected.setAttribute('material', {
          side: 'double',
          wireframe: false
        });
      }
    });
  }
});