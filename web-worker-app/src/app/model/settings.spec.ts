import { Settings } from './settings';

describe('Settings', () => {
  it('should create an instance', () => {
    expect(new Settings({
      interval: 1,
      messageSize: 1,
      additionalIds: []
    })).toBeTruthy();
  });
});
