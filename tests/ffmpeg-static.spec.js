import ffmpeg from 'ffmpeg-static';
import ffprobe from 'ffprobe-static';
import ffmpegCommand from 'fluent-ffmpeg';
import fs from 'fs';

process.env.FFMPEG_PATH = ffmpeg.path;
process.env.FFPROBE_PATH = ffprobe.path;

test('Should return the path of a statically linked ffmpeg binary on the local filesystem', () => {
  const { path } = ffmpeg;
  expect(fs.existsSync(path)).toBeTruthy();
});

test('Should return the path of a statically linked ffprobe binary on the local filesystem', () => {
  const { path } = ffprobe;
  expect(fs.existsSync(path)).toBeTruthy();
});

test('Should correctly read audio file format and tags', done => {
  const audioFile = `${__dirname}/__fixtures__/example.mp3`;
  ffmpegCommand(audioFile).ffprobe((err, metadata) => {
    expect(err).toBeNull();

    expect(metadata.format).toMatchObject({
      bit_rate: 256081,
      duration: 100.052969,
      format_name: 'mp3',
      format_long_name: 'MP2/3 (MPEG audio layer 2/3)',
      size: 3202719,
      tags: {
        artist: 'Ted Irens',
        composer: 'Ted Irens',
        date: '2009',
        genre: 'Instrumental',
        title: 'New Track Demo on Keyboard',
      },
    });
    done();
  });
});
