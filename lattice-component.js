AFRAME.registerComponent('lattice', {
  schema: {
    url: { type: 'string' },
    scale: { type: 'vec3', default: { x: 1, y: 1, z: 1 } },
    material: { default: null },
    position: { type: 'string' }
  },

  init: function () {
    this.loader = new THREE.GLTFLoader();
    this.el.addEventListener('model-loaded', this.update.bind(this));
  },

  update: function () {
    this.loader.load(this.data.url, (gltf) => {
      gltf.scene.traverse((child) => {
        if (child.isMesh) {
          child.material = new THREE.MeshStandardMaterial(this.data.material);
        }
      });

      const scale = this.data.scale;
      // const upscale = 0.66;
      // gltf.scene.scale.set(scale.x * upscale, scale.y * upscale, scale.z * upscale);

      const position = this.data.position.split(' ').map(parseFloat);
      gltf.scene.position.set(position[0], position[1], position[2]);

      this.el.setObject3D('mesh', gltf.scene);
    });
  }
});