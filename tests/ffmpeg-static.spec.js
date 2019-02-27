import ffmpeg from 'ffmpeg-static';
import ffprobe from 'ffprobe-static';
import ffmpegCommand from 'fluent-ffmpeg';
import { Writable } from 'stream';
import { join } from 'path';
import fs from 'fs';

process.env.FFMPEG_PATH = ffmpeg.path;
process.env.FFPROBE_PATH = ffprobe.path;

const audioFile = join(__dirname, '__fixtures__', 'example.mp3');

class WritableCounter extends Writable {
  constructor() {
    super();
    this.counter = 0;
  }

  _write(chunk, encoding, callback) {
    this.counter += chunk.length;
    callback();
  }
}

test('Should return the path of a statically linked ffmpeg binary on the local filesystem', () => {
  const { path } = ffmpeg;
  expect(fs.existsSync(path)).toBeTruthy();
});

test('Should return the path of a statically linked ffprobe binary on the local filesystem', () => {
  const { path } = ffprobe;
  expect(fs.existsSync(path)).toBeTruthy();
});

test('Should correctly read audio file format and tags', done => {
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

test('Should correctly decode mp3 file to pcm', done => {
  const writer = new WritableCounter();
  const decoder = ffmpegCommand(audioFile)
    .audioCodec('pcm_s16le')
    .audioChannels(2)
    .audioFrequency(44100)
    .outputFormat('s16le');

  decoder.on('end', () => {
    expect(writer.counter).toBe(17648640);
    done();
  });

  decoder.pipe(writer);
}, 10000);
