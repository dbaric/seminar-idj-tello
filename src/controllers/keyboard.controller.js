const keypress = require("keypress");
const droneController = require("./drone.controller");
const logger = require("../utils/logger");

keypress(process.stdin);

const keyBindings = {
  t: droneController.takeOff,
  l: droneController.land,
  w: () => droneController.moveForward(20),
  s: () => droneController.moveBackward(20),
  a: () => droneController.moveLeft(20),
  d: () => droneController.moveRight(20),
  i: () => droneController.moveUp(20),
  k: () => droneController.moveDown(20),
  j: () => droneController.rotateCounterClockwise(30),
  h: () => droneController.rotateClockwise(30),
  f: () => droneController.flip("f"),
  b: () => droneController.flip("b"),
  x: () => process.exit(),
  1: droneController.requestBattery,
  2: droneController.requestSpeed,
  3: droneController.requestAttitude,
  4: droneController.requestBarometer,
  5: droneController.requestAcceleration,
  6: droneController.requestTof,
  7: droneController.requestWifi,
};

module.exports = {
  init: function () {
    process.stdin.on("keypress", (ch, key) => {
      if (key) {
        const command = keyBindings[key.name];
        if (command) {
          command();
        } else {
          logger.warn(`Unknown command: ${key.name}`);
        }

        if (key.ctrl && key.name === "c") {
          process.exit();
        }
      }
    });

    process.stdin.setRawMode(true);
    process.stdin.resume();

    logger.info(
      "Keyboard controller initialized. Press keys to control the drone."
    );
    logger.info("Commands:");
    logger.info("t: Take off");
    logger.info("l: Land");
    logger.info("w: Move forward");
    logger.info("s: Move backward");
    logger.info("a: Move left");
    logger.info("d: Move right");
    logger.info("i: Move up");
    logger.info("k: Move down");
    logger.info("j: Rotate counter-clockwise");
    logger.info("h: Rotate clockwise");
    logger.info("f: Flip forward");
    logger.info("b: Flip backward");
    logger.info("x: Exit");
    logger.info("1: Request battery level");
    logger.info("2: Request speed");
    logger.info("3: Request attitude");
    logger.info("4: Request barometer data");
    logger.info("5: Request acceleration data");
    logger.info("6: Request TOF data");
    logger.info("7: Request WiFi data");
  },
};
