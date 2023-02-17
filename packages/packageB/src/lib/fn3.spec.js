import { fn3 } from './fn3';

// const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

describe('fn3', () => {
  it('should work', async () => {
    // await wait(3000);
    expect(fn3()).toEqual('fn3');
  });
});
