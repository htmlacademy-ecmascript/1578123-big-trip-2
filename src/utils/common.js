export const getRandomArrayElement = (items) => items[Math.floor(Math.random() * items.length)];

export const isEscapeKey = (evt) => evt.key === 'Escape';
