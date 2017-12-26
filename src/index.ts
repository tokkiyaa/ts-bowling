export function calculate(input: string) {
  console.log(getScore(getFrames(input)));
}

export function getScore(frames: string[]): number {
  let score = 0;

  frames.forEach((frame, i) => {
    const first = frame[0];
    if(first === 'X') { // ストライク
      score += getNumber(first);

      let s = (frames[i + 1] || '') + (frames[i + 2] || '');

      if (s[1] === 'X' && s[0] !== 'X')
        score += 10;

      else
         score += getNumber(s[0]) + getNumber(s[1]);
    } else {
      const second = frame[1];

      if (second === 'X') { //スペア
        score += getNumber(second) + getNumber(frames[i + 1][0]);
      } else {
        score += getNumber(first) + getNumber(second);
      }
    }
  });

  return score;
}

function getNumber(s: string): number {
  s = s || '0';

  if (s === 'X')
    return 10;

  return parseInt(s, 10);
}

export function getFrames(line: string): string[] {
  line = line.replace(/[^0-9X]/g, '');

  return line.match(/X|.?X|..?/g) || [];
}
