export const shuffleArray = (items) => {
  for (let i = items.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [items[i], items[j]] = [items[j], items[i]];
  }

  return items;
};

export const getRandomItemsArray = (items, count) => shuffleArray([...items]).slice(0, count);

export const isEscapeKey = (evt) => evt.key === 'Escape';
