import GameSavingLoader from './GameSavingLoader';

(async () => {
  try {
    return await GameSavingLoader.load();
  } catch (err) {
    return Promise.reject(err);
  }
})();
