import Player from '@vimeo/player';

var throttle = require('lodash.throttle');
var iframe = document.querySelector('iframe');
var player = new Vimeo.Player(iframe);
const currentTimeValue = JSON.parse(localStorage.getItem('videoplayer-current-time'));

function videoCurrentTime(event) {
  const settings = {
    seconds: `${event.seconds}`,
  };

  localStorage.setItem('videoplayer-current-time', JSON.stringify(settings));
  console.log(event.seconds);
}

if (currentTimeValue) {
  player.setCurrentTime(currentTimeValue.seconds).catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;

      default:
        break;
    }
  });
}

player.on('timeupdate', throttle(videoCurrentTime, 1000));
