
/* global AFRAME */

AFRAME.registerComponent('click-on-box', {

  init: function () {
    this.el.addEventListener('click', this.boxClicked.bind(this));
  },

  boxClicked: function() {
    // The camera is the parent element of the cursor so we can
    // get that element, then retrieve the camera's rotation
    // at the time of the click
    let cameraRotation = this.el.parentEl.getAttribute('rotation')
    // Get a reference to the torpedo by looking at the id value
    // of the HTML element
    let torpedo = document.getElementById('torpedo')
    // And emit the 'fire' event and pass along the rotation
    // so we know in which direction the photon should fire
    torpedo.emit('fire', {
      rotation: cameraRotation,
      boxPosition: document.getElementById('box').getAttribute('position')
    }, false)
  }
});
