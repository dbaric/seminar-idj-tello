const telloService = require("../services/tello.service");
const logger = require("../utils/logger");

module.exports = {
  init: function () {
    telloService.connect();

    telloService.onMessage((message) => {
      logger.info(`Received message from Tello: ${message}`);
    });
  },

  takeOff: function () {
    logger.info("Taking off...");
    telloService.sendCommand("takeoff");
  },

  land: function () {
    logger.info("Landing...");
    telloService.sendCommand("land");
  },

  moveUp: function (distance) {
    logger.info(`Moving up by ${distance}cm...`);
    telloService.sendCommand(`up ${distance}`);
  },

  moveDown: function (distance) {
    logger.info(`Moving down by ${distance}cm...`);
    telloService.sendCommand(`down ${distance}`);
  },

  moveLeft: function (distance) {
    logger.info(`Moving left by ${distance}cm...`);
    telloService.sendCommand(`left ${distance}`);
  },

  moveRight: function (distance) {
    logger.info(`Moving right by ${distance}cm...`);
    telloService.sendCommand(`right ${distance}`);
  },

  moveForward: function (distance) {
    logger.info(`Moving forward by ${distance}cm...`);
    telloService.sendCommand(`forward ${distance}`);
  },

  moveBackward: function (distance) {
    logger.info(`Moving backward by ${distance}cm...`);
    telloService.sendCommand(`back ${distance}`);
  },

  rotateClockwise: function (degrees) {
    logger.info(`Rotating clockwise by ${degrees} degrees...`);
    telloService.sendCommand(`cw ${degrees}`);
  },

  rotateCounterClockwise: function (degrees) {
    logger.info(`Rotating counter-clockwise by ${degrees} degrees...`);
    telloService.sendCommand(`ccw ${degrees}`);
  },

  flip: function (direction) {
    logger.info(`Flipping ${direction}...`);
    telloService.sendCommand(`flip ${direction}`);
  },
};
