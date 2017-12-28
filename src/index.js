'use strict';

// onecolor's .cssa() method returns a rgba string without any spaces between
// the numbers (ex: 'rgba(248,248,248,1)')
// jQuery returns a rgba string with spaces between the numbers (ex: 'rgba(248, 248, 248)')
// the following regex tweaks onecolor's response so it matches jQuery
window.hexToRgbJquery = window.hexToRgbJquery || {};

window.hexToRgbJquery.hexToRgb = function(hex) {
  const regex = /(,)/g;

  return one.color(hex).css().replace(regex, ', ');
};
