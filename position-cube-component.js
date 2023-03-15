AFRAME.registerComponent('position-cube', {
  schema: {
    position: {type: 'vec3'}
  },
  init: function () {
    var position = this.data.position;
    var id = `cube-${position.x}-${position.y}-${position.z}`;
    var el = el;
    el.setAttribute('id', id);
    el.setAttribute('position', position);
    el.setAttribute('wireframe', 'true');
    el.setAttribute('geometry', {
      primitive: 'box',
      width: 0.3,
      height: 0.3,
      depth: 0.3
    });
  }
});