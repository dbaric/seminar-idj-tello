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

const sendCommand = (command) => {
  client.send(
    command,
    0,
    command.length,
    config.TELLO_PORT,
    config.TELLO_IP,
    (err) => {
      if (err) {
        logger.error(err);
      } else if (command === "command") {
        logger.info(`Connected to drone`);
      } else {
        logger.info(`Sent command: ${command}`);
      }
    }
  );
};

const telemetryCommands = {
  requestBattery: "battery?",
  requestSpeed: "speed?",
  requestAttitude: "attitude?",
  requestBarometer: "baro?",
  requestAcceleration: "acceleration?",
  requestTof: "tof?",
  requestWifi: "wifi?",
};

module.exports = {
  connect: function () {
    sendCommand("command");
  },

  sendCommand,

  onMessage: function (handler) {
    messageHandler = handler;
  },
};

Object.keys(telemetryCommands).forEach((key) => {
  module.exports[key] = () => {
    logger.info(`Requesting ${key.replace("request", "").toLowerCase()}...`);
    sendCommand(telemetryCommands[key]);
  };
});
