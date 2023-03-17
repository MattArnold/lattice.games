AFRAME.registerComponent('position-cube', {
  schema: {
    size: {type: 'number', default: 0.3},
    position: {type: 'string', default: '0 0 0'}
  },
  init: function () {
    var position = this.data.position;
    var size = this.data.size * 3.3;
    var id = `cube-${position.x}-${position.y}-${position.z}`;
    var el = this.el;
    el.setAttribute('id', id);
    el.setAttribute('position', position);
    el.setAttribute('geometry', {
      primitive: 'box',
      width: size,
      height: size,
      depth: size
    });
    el.setAttribute('material', {
      color: '#006199',
      opacity: 0.1,
      wireframe: true
    });
  }
});