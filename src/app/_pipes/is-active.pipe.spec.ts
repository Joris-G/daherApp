import { IsActivePipe } from './is-active.pipe';

describe('IsActivePipe', () => {
  it('create an instance', () => {
    const pipe = new IsActivePipe();
    expect(pipe).toBeTruthy();
  });
});
