/* globals module */
module.exports = {
  default: [
    "clean:dist",
    "test",
    "copy:cat",
    "shell:buildJsToDist",
    "connect",
    "keepalive"
  ],
  dev: [
    "clean:dist",
    "test",
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
    "clean:testBuild",
    "jshint",
    "shell:buildInvertSpecToDist",
    "shell:buildClickFlipSpecToDist",
    "jasmine",
    "karma"
  ]
};
