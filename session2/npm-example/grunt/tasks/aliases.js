/* globals module */
module.exports = {
  default: [
    "clean",
    "copy:vendor",
    "copy:cat",
    "connect",
    "keepalive"
  ],
  dev: [
    "clean",
    "copy:vendor",
    "copy:cat",
    "connect",
    "watch"
  ]
};
