/* globals module */
module.exports = {
  default: [
    "clean:dist",
    //"test",
    "copy:cat",
    "shell:buildJsToDist",
    "connect",
    "keepalive"
  ],
  dev: [
    "clean:dist",
    //"test",
    "copy:cat",
    "shell:buildJsToDist",
    "connect",
    "watch"
  ],
  serve: [
    "connect",
    "keepalive"
  ],
  test: [
    "jshint",
    "jasmine",
    "karma"
  ]
};
