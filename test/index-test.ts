import { expect } from 'chai';
import { getFrames, getScore } from '../src';

describe('test getFrames', () => {
  it('与えられた文字列をフレームの配列に変換できる(Xなし)', () => {
    expect(getFrames('1')).to.deep.equal(['1']);
    expect(getFrames('10')).to.deep.equal(['10']);
    expect(getFrames('123')).to.deep.equal(['12','3']);
    expect(getFrames('1234')).to.deep.equal(['12','34']);
    expect(getFrames('12345')).to.deep.equal(['12','34','5']);
    expect(getFrames('0000000000')).to.deep.equal(['00', '00', '00', '00', '00']);
    expect(getFrames('1234123412')).to.deep.equal(['12', '34', '12', '34', '12']);
    expect(getFrames('XXXXX')).to.deep.equal(['X', 'X', 'X', 'X', 'X']);
    expect(getFrames('1X63X5300')).to.deep.equal(['1X', '63', 'X', '53', '00']);
    expect(getFrames('2XX3X41X')).to.deep.equal(['2X', 'X', '3X', '41', 'X']);
  });

  it('与えられた文字列をフレームの配列に変換できる(Xあり)', () => {
    expect(getFrames('X')).to.deep.equal(['X']);
    expect(getFrames('X1')).to.deep.equal(['X', '1']);
    expect(getFrames('1X')).to.deep.equal(['1X']);
    expect(getFrames('12X')).to.deep.equal(['12','X']);
    expect(getFrames('1X23')).to.deep.equal(['1X','23']);
    expect(getFrames('12345')).to.deep.equal(['12','34','5']);
    expect(getFrames('XXXXX')).to.deep.equal(['X', 'X', 'X', 'X', 'X']);
  });
});

describe('test getScore', () => {
  it('フレームの配列から点数を計算する', () => {
    expect(getScore(['00', '00', '00', '00', '00'])).to.equal(0);
    expect(getScore(['12', '34', '12', '34', '12'])).to.equal(23);
    expect(getScore(['X', 'X', 'X', 'X', 'X'])).to.equal(120);
    expect(getScore(['1X', '63', 'X', '53', '00'])).to.equal(51);
    expect(getScore(['2X', 'X', '3X', '41', 'X'])).to.equal(69);
    expect(getScore(['10'])).to.equal(1);
    expect(getScore(['12','3'])).to.equal(6);
    expect(getScore(['12','34'])).to.equal(10);
    expect(getScore(['12','34','5'])).to.equal(15);
  });
});
