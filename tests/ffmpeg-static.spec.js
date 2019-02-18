const ffmpeg = require('ffmpeg-static');
const fs = require('fs');

test('Should return the path of a statically linked ffmpeg binary on the local filesystem', () => {
  const path = ffmpeg.path;
  expect(fs.existsSync(path)).toBeTruthy();
});
