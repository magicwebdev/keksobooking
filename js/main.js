function getRandomIntegerNumber(a, b) {
  const min = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const max = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomFloatNumber(a, b, decimalPlaces = 2) {
  const min = Math.min(Math.abs(a), Math.abs(b));
  const max = Math.max(Math.abs(a), Math.abs(b));
  return +(Math.random() * (max - min) + min).toFixed(decimalPlaces);
}

getRandomIntegerNumber(0, 3);
getRandomFloatNumber(1.197, 1.200, 3);
