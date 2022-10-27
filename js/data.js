import {getRandomIntegerNumber, getRandomFloatNumber, getRandomArrayElement} from './util.js';

const AD_COUNT = 10;
const LOCATION = {
  LAT_MIN: 35.65000,
  LAT_MAX: 35.70000,
  LNG_MIN: 139.7000,
  LNG_MAX: 139.8000,
};
const PRICE_MIN = 1000;
const PRICE_MAX = 9999;
const TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const TIME = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

const createAd = (index) => ({
  author: {
    avatar: `img/avatars/user${index.toString().length === 1 ? `0${index}` : index }.png`,
  },
  offer: {
    title: 'Заголовок предложения',
    // Как получить доступ к свойству объекта и другого объекта в общем объекте
    // address:  `${this.location.lat} ${this.location.lat}`,
    price: getRandomIntegerNumber(PRICE_MIN, PRICE_MAX),
    type: getRandomArrayElement(TYPES),
    rooms: getRandomIntegerNumber(1, 5),
    guests: getRandomIntegerNumber(1, 10),
    checkin: getRandomArrayElement(TIME),
    checkout: getRandomArrayElement(TIME),
    features: Array.from({length: getRandomIntegerNumber(1, FEATURES.length)},
      (_, i) => FEATURES[i]),
    description: 'Описание помещения',
    photos: Array.from({length: getRandomIntegerNumber(1, 3)}, (_, i) => PHOTOS[i])
  },
  location: {
    lat: getRandomFloatNumber(LOCATION.LAT_MIN, LOCATION.LAT_MAX),
    lng: getRandomFloatNumber(LOCATION.LNG_MIN, LOCATION.LNG_MAX),
  }
});

const createAds = () => Array.from({length: AD_COUNT}, (_, index) => createAd(index + 1));

export  {createAds};
