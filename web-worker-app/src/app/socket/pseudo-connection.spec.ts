import { PseudoConnection } from './pseudo-connection';

describe('PseudoConnection', () => {
  it('should create an instance', () => {
    expect(new PseudoConnection(100,100)).toBeTruthy();
  });
});
