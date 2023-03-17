AFRAME.registerComponent('load-gltf-model', {
  schema: {
    url: { type: 'string' },
    scale: { type: 'vec3', default: { x: 1, y: 1, z: 1 } },
    material: { default: null }
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
      gltf.scene.scale.set(scale.x, scale.y, scale.z);

      this.el.setObject3D('mesh', gltf.scene);
    });
  }
});