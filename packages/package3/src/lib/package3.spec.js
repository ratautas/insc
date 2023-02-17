import { package3 } from './package3';

// const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

describe('package3', () => {
  it('should work', async () => {
    // await wait(3000);
    expect(package3()).toEqual('package3');
  });
});
