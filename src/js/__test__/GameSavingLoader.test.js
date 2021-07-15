import GameSavingLoader from '../GameSavingLoader';
import read from '../reader';

afterEach(() => jest.resetModules());
// eslint-disable-next-line prefer-promise-reject-errors
jest.mock('../reader', () => jest.fn().mockImplementationOnce(() => Promise.reject('Error parsing data')));

test('error testing', async () => {
  try {
    await GameSavingLoader.load();
  } catch (error) {
    expect(error).toBe('Error parsing data');
  }
});

read.mockImplementationOnce(() => jest.requireActual('../reader').default());

test('checking the load method of the GameSavingLoader class correctness of work', async () => {
  const data = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: 'Hitman',
      level: 10,
      points: 2000,
    },
  };

  const objData = await GameSavingLoader.load();
  expect(objData).toEqual(data);
});
