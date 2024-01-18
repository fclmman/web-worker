import { DecimalPrecisionPipe } from './decimal-precision.pipe';

describe('DecimalPrecisionPipe', () => {
  it('create an instance', () => {
    const pipe = new DecimalPrecisionPipe();
    expect(pipe).toBeTruthy();
  });

  it('parse number', () => {
    const pipe = new DecimalPrecisionPipe();
    expect(pipe.transform(156.88, 10)).toBeTruthy();
  });
});
