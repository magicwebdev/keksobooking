function getRandomIntegerNumber(min, max) {
  if (isNaN(Number(min)) || isNaN(Number(max)) || min < 0 || min >= max) {
    throw new Error('Задан неверный диапазон');
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
getRandomIntegerNumber(1, 10);

function getRandomFloatNumber(min, max, decimalPlaces = 2) {
  if (isNaN(parseFloat(min)) || isNaN(parseFloat(max)) || min < 0 || min >= max) {
    throw new Error('Задан неверный диапазон');
  }
  return (Math.random() * (max - min) + min).toFixed(decimalPlaces);
}
getRandomFloatNumber(1.197, 1.200, 4);
