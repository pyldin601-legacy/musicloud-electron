import ffmpeg from 'ffmpeg-static';
import ffprobe from 'ffprobe-static';
import fs from 'fs';

test('Should return the path of a statically linked ffmpeg binary on the local filesystem', () => {
  const path = ffmpeg.path;
  expect(fs.existsSync(path)).toBeTruthy();
});

test('Should return the path of a statically linked ffprobe binary on the local filesystem', () => {
  const path = ffprobe.path;
  expect(fs.existsSync(path)).toBeTruthy();
});
