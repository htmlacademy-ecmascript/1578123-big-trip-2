export const getRandomArrayElement = (items) => items[Math.floor(Math.random() * items.length)];

export const isEscapeKey = (evt) => evt.key === 'Escape';

export const updateItem = (items, update) => items.map((item) => item.id === update.id ? update : item);
