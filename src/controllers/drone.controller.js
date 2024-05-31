const telloService = require("../services/tello.service");
const logger = require("../utils/logger");

module.exports = {
  init: function () {
    telloService.connect();

    telloService.onMessage((message) => {
      logger.info(`Received message from Tello: ${message}`);
      this.handleFeedback(message);
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

  requestBattery: function () {
    logger.info("Requesting battery level...");
    telloService.requestBattery();
  },

  requestSpeed: function () {
    logger.info("Requesting speed...");
    telloService.requestSpeed();
  },

  requestAttitude: function () {
    logger.info("Requesting attitude...");
    telloService.requestAttitude();
  },

  requestBarometer: function () {
    logger.info("Requesting barometer data...");
    telloService.requestBarometer();
  },

  requestAcceleration: function () {
    logger.info("Requesting acceleration data...");
    telloService.requestAcceleration();
  },

  requestTof: function () {
    logger.info("Requesting TOF data...");
    telloService.requestTof();
  },

  requestWifi: function () {
    logger.info("Requesting WiFi data...");
    telloService.requestWifi();
  },

  handleFeedback: function (message) {
    if (message.startsWith("bat")) {
      logger.info(`Battery level: ${message}`);
    } else if (message.startsWith("speed")) {
      logger.info(`Speed: ${message}`);
    } else if (message.startsWith("attitude")) {
      logger.info(`Attitude: ${message}`);
    } else if (message.startsWith("baro")) {
      logger.info(`Barometer: ${message}`);
    } else if (message.startsWith("acceleration")) {
      logger.info(`Acceleration: ${message}`);
    } else if (message.startsWith("tof")) {
      logger.info(`TOF: ${message}`);
    } else if (message.startsWith("wifi")) {
      logger.info(`WiFi: ${message}`);
    } else {
      logger.info(`Unhandled feedback: ${message}`);
    }
  },
};
