const dgram = require("dgram");
const config = require("../config/config");
const logger = require("../utils/logger");

const client = dgram.createSocket("udp4");
let messageHandler = null;

client.on("message", (message) => {
  if (messageHandler) {
    messageHandler(message.toString());
  }
});

module.exports = {
  connect: function () {
    client.send("command", 0, 7, config.TELLO_PORT, config.TELLO_IP, (err) => {
      if (err) {
        logger.error(err);
      } else {
        logger.info("Connected to Tello");
      }
    });
  },

  sendCommand: function (command) {
    client.send(
      command,
      0,
      command.length,
      config.TELLO_PORT,
      config.TELLO_IP,
      (err) => {
        if (err) {
          logger.error(err);
        } else {
          logger.info(`Sent command: ${command}`);
        }
      }
    );
  },

  onMessage: function (handler) {
    messageHandler = handler;
  },
};
