import {mergeArrays} from "./merge-arrays";

describe('mergeArrays', () => {
  it('should merge less than 10', () => {
    const first = [1, 2, 3];
    const second = [4, 5, 6];
    const result = mergeArrays(first, second, 10);
    expect(result.length).toEqual(6);
  });

  it('should merge 10', () => {
    const first = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const second = [11, 12, 13, 14];
    const result = mergeArrays(first, second, 10);
    expect(result.length).toEqual(10);
  });

  it('should merge correctly', () => {
    const first = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const second = [11, 12, 13, 14];
    const result = mergeArrays(first, second, 10);
    expect(result).toEqual([4, 5, 6, 7, 8, 9, 11, 12, 13, 14]);
  });
});
