AFRAME.registerComponent('position-cube-with-lattice', {
  schema: {
    size: { type: 'number', default: 0.3 },
  },
  init: function () {
    const position = this.el.getAttribute('position');
    const size = this.data.size * 3.3;
    const id = `cube-${position.x}-${position.y}-${position.z}`;
    const el = this.el;
    
    const cubeEl = document.createElement("a-entity");
    cubeEl.setAttribute('id', id);
    cubeEl.setAttribute('position', position);
    cubeEl.setAttribute('geometry', {
      primitive: 'box',
      width: size,
      height: size,
      depth: size
    });
    const cubeColor = '#7393B3'
    const hoveredCubeMaterial = {
      color: cubeColor,
      opacity: 0.33,
      wireframe: true
    }
    const deselectedCubeMaterial = {
      color: cubeColor,
      opacity: 0,
      wireframe: true
    }
    const selectedCubeMaterial = {
      color: cubeColor,
      opacity: 1,
      wireframe: true
    }
    cubeEl.setAttribute('material', deselectedCubeMaterial);
    cubeEl.setAttribute('selectable', true);
    cubeEl.setAttribute('selected', false);

    cubeEl.addEventListener('mouseenter', () => {
      if (selectable) {
        cubeEl.setAttribute('material', hoveredCubeMaterial);
      }
    });

    cubeEl.addEventListener('mouseleave', () => {
      const selectable = cubeEl.getAttribute('selectable');
      const selected = cubeEl.getAttribute('selected');
      if (selectable) {
        cubeEl.setAttribute('material', selected ? selectedCubeMaterial : deselectedCubeMaterial);
      }
    });

    cubeEl.addEventListener('grab-end', () => {
      if (selectable) {
        cubeEl.setAttribute('selected', true);
        cubeEl.setAttribute('material', selectedCubeMaterial);
      }
    });

    // const latticeEl = document.createElement('a-entity');
    // latticeEl.setAttribute('lattice', {
    //   url: "./lattice.gltf",
    //   scale: { x: 1, y: 1, z: 1 },
    //   material: { color: '#006199', opacity: 0.5 },
    //   position: "0 0 0"
    // });
    
    // cubeEl.appendChild(latticeEl);
    el.appendChild(cubeEl);
  }
});