import Player from '@vimeo/player';

var throttle = require('lodash.throttle');
var iframe = document.querySelector('iframe');
var player = new Vimeo.Player(iframe);
const currentTimeValue = JSON.parse(localStorage.getItem('videoplayer-current-time'));

function videoCurrentTime(event) {
  console.log(event);
  const settings = {
    seconds: `${event.seconds}`,
    percent: `${event.percent}`,
    duration: `${event.duration}`,
  };

  localStorage.setItem('videoplayer-current-time', JSON.stringify(settings));
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
