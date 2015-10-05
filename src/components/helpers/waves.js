import Waves from 'node-waves';

Waves.init({
  // How long Waves effect duration
  // when it's clicked (in milliseconds)
  duration: 500,

  // Delay showing Waves effect on touch
  // and hide the effect if user scrolls
  // (0 to disable delay) (in milliseconds)
  delay: 200
});

export default Waves;
