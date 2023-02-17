import { fn4 } from './fn4';

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

describe('fn4', () => {
  it('should work', async () => {
    await wait(1500);
    expect(fn4()).toEqual('fn4');
  });
});
