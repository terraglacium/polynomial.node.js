"use strict";

function insertMissing(polynomial) {
  let insertedPolyArray = [];
  let power = polynomial[0].power;

  for (let i = 0; i <= power; ++i) {
    let powerExists = polynomial.find(function(monomial) {
      return monomial.power === power - i;
    });
    if (powerExists) {
      insertedPolyArray[i] = polynomial.shift();
    } else {
      insertedPolyArray[i] = { coefficient: 0, power: power - i };
    }
  }
  return insertedPolyArray;
}

module.exports = insertMissing;
