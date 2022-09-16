import { Elements } from "./elements.js";
import Controls from './controls.js';
import Timer from './timer.js';
import Events from "./events.js";
import Sound from "./sound.js";

const {
  secondsDisplay,
  minutesDisplay,
  checkboxForest,
  checkboxRain,
  checkboxCoffeeShop,
  checkboxFireplace,
  buttonPlay,
  buttonPause,
  buttonReduce
} = Elements;

const controls = Controls({
  buttonPlay,
  buttonPause,
  buttonReduce
});

const sound = Sound({
  checkboxForest,
  checkboxRain,
  checkboxCoffeeShop,
  checkboxFireplace,
  buttonPlay
});

const timer = Timer({
  secondsDisplay,
  minutesDisplay,
  hidePauseAndShowPlay: controls.hidePauseAndShowPlay,
  disableAndEnableButtonReduce: controls.disableAndEnableButtonReduce,
  playFinishTimerSound: sound.finishSound,
  pauseAllSounds: sound.pauseAllSounds
});

// document.documentElement.style.setProperty('--primary-color', 'green');

Events({ controls, timer, sound });