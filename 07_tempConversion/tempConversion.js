const convertToCelsius = function(value) {

  let valueCelsius = (value - 32) * (5/9);

  return parseFloat(valueCelsius.toFixed(1));


};

const convertToFahrenheit = function(value) {

  let valueFahrenheit = value * 9/5 + 32 ;

  return parseFloat(valueFahrenheit.toFixed(1));

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
