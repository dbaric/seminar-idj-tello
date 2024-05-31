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
  },
};
