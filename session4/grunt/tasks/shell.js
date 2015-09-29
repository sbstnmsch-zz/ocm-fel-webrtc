module.exports = {
  buildJsToDist: {
    command: 'jspm bundle-sfx src/js/flip dist/flip.js'
  },
  buildInvertSpecToDist: {
    command: 'jspm bundle-sfx test/src/invert.spec test/build/invert.spec.js'
  },
  buildClickFlipSpecToDist: {
    command: 'jspm bundle-sfx test/src/clickFlip.spec test/build/clickFlip.spec.js'
  }
};
