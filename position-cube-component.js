AFRAME.registerComponent('position-cube', {
  schema: {
    size: { type: 'number', default: 0.3 }
  },
  init: function () {
    const position = this.data.position;
    const size = this.data.size * 3.3;
    const id = `cube-${position.x}-${position.y}-${position.z}`;
    const el = this.el;
    el.setAttribute('id', id);
    el.setAttribute('position', position);
    el.setAttribute('geometry', {
      primitive: 'box',
      width: size,
      height: size,
      depth: size
    });
    el.setAttribute('material', {
      color: '#7393B3',
      opacity: 0,
      wireframe: false
    });
    el.setAttribute('selectable', '');
    el.setAttribute('selected', false);

    el.addEventListener('mouseenter', () => {
      if (el.getAttribute('selectable') !== null) {
        el.setAttribute('material', {
          color: '#7393B3',
          opacity: 0.33,
          wireframe: false
        });
      }
    });

    el.addEventListener('mouseleave', () => {
      if (el.getAttribute('selectable') !== null) {
        if (el.getAttribute('selected') === 'true') {
          el.setAttribute('material', {
            color: '#7393B3',
            opacity: 1,
            wireframe: false
          });
        } else {
          el.setAttribute('material', {
            color: '#7393B3',
            opacity: 0,
            wireframe: false
          });
        }
      }
    });

    el.addEventListener('grab-start', () => {
      if (el.getAttribute('selectable') !== null) {
        el.setAttribute('selected', true);
        el.setAttribute('material', {
          color: '#7393B3',
          opacity: 1,
          wireframe: false
        });
      }
    });

    el.addEventListener('grab-end', () => {
      if (el.getAttribute('selectable') !== null) {
        if (el.getAttribute('selected') === 'true') {
          el.setAttribute('material', {
            color: '#7393B3',
            opacity: 1,
            wireframe: false
          });
        } else {
          el.setAttribute('material', {
            color: '#7393B3',
            opacity: 0,
            wireframe: false
          });
        }
      }
    });
  }
});