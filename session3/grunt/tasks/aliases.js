/* globals module */
module.exports = {
  default: [
    "clean",
    "bower",
    "test",
    "copy",
    "connect",
    "keepalive"
  ],
  dev: [
    "clean",
    "bower",
    "test",
    "copy",
    "connect",
    "watch"
  ],
  test: [
    "jshint"
  ]
};
