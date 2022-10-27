const getRandomIntegerNumber = (a, b) => {
  const min = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const max = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomFloatNumber = (a, b, decimalPlaces = 5) => {
  const min = Math.min(Math.abs(a), Math.abs(b));
  const max = Math.max(Math.abs(a), Math.abs(b));
  return +(Math.random() * (max - min) + min).toFixed(decimalPlaces);
};

const getRandomArrayElement = (array) => array[getRandomIntegerNumber(0, array.length - 1)];

export {getRandomIntegerNumber, getRandomFloatNumber, getRandomArrayElement};
