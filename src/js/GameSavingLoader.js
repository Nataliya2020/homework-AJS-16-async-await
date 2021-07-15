import read from './reader';
import json from './parser';
import GameSaving from './GameSaving';

export default class GameSavingLoader {
  static async load() {
    try {
      const data = await read();
      const parseData = await json(data);
      return new GameSaving(parseData);
    } catch (error) {
      return Promise.reject(error);
    }
  }
}
