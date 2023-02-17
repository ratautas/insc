import { fn1 } from '@insc/packageA';

fn1();

export function fn3() {
  console.log('this functions has tests which are potentially very long');
  console.log('hopefully, these tests should only run only when @insc/packageB/fn1 or itself is updated');

  return 'fn3';
}
