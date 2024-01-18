import { MessageGenerator } from './message-generator';

describe('MessageGenerator', () => {
  it('should create an instance', () => {
    expect(new MessageGenerator()).toBeTruthy();
  });

  it('should create an 10 items', () => {
    const result = MessageGenerator.getMessage(10);
    expect(result.length).toEqual(10);
  });

  it('should create 1 item on invalid input', () => {
    const result = MessageGenerator.getMessage(-100);
    expect(result.length).toEqual(1);
  });
});
