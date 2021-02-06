import classes from '../classes';

describe('button', () => {
  it('接受一个className', () => {
    const result = classes('a');
    expect(result).toEqual('a');
  });
  it('接受2个 className', () => {
    const result = classes('a', 'b');
    expect(result).toEqual('a b');
  });
  it('接受奇怪值', () => {
    const result = classes('a', undefined, 'b', null, '中文');
    expect(result).toEqual('a b 中文');
  });
  it('接受0个参数', () => {
    const result = classes();
    expect(result).toEqual('');
  });
});
