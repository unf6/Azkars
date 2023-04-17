'use strict';

const { Arabic } = require("../data/azkar/Arabic");
const { English } = require("../data/azkar/English");

/**
 * @typedef {Object} Azkar
 * @property {number} Arabic Arabic
 * @property {number} English English
 */

/**
 * @type {Azkar}
 * @ignore
 */

module.exports = {
  Arabic: Arabic,
  English: English,
};