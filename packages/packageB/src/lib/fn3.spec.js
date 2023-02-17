import { fn3 } from './fn3';

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

describe('fn3', () => {
  it('should work', async () => {
    // Defer to indicate wether the test is running or not
    await wait(4000);
    expect(fn3()).toEqual('fn3');
  });
});
