import { PseudoConnection } from './pseudo-connection';

describe('PseudoConnection', () => {
  it('should create an instance', () => {
    expect(new PseudoConnection(100,100)).toBeTruthy();
  });

  it('should set interval defaults on invalid', () => {
    const item = new PseudoConnection(-100,10);
    expect(item['_interval'] === 1).toBeTruthy();
  });

  it('should set size defaults on invalid', () => {
    const item = new PseudoConnection(100,-10);
    expect(item['_messageSize'] === 1).toBeTruthy();
  });
});
