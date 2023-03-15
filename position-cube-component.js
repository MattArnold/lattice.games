AFRAME.registerComponent('position-cube', {
  schema: {
    position: {type: 'vec3'}
  },
  init: function () {
    var position = this.data.position;
    var id = `cube-${position.x}-${position.y}-${position.z}`;
    this.el.setAttribute('id', id);
    this.el.setAttribute('position', position);
    this.el.setAttribute('wireframe', 'true');
    this.el.setAttribute('geometry', 'primitive: box; width: 0.9; height: 0.9; depth: 0.9');
  }
});