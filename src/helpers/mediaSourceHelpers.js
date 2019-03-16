export function mediasourceFromStreamCallback(mimeType, readableCallback) {
  const mediaSource = new MediaSource();

  mediaSource.addEventListener('sourceopen', function onSourceOpen() {
    const sourceBuffer = mediaSource.addSourceBuffer(mimeType);
    const readable = readableCallback();

    const queue = [];
    let closed = false;

    const handleNextChunk = () => {
      if (queue.length > 0) {
        sourceBuffer.appendBuffer(queue.shift());
      } else if (closed) {
        mediaSource.endOfStream();
      }
    };

    readable.on('data', chunk => {
      queue.push(chunk);
    });

    readable.once('data', () => handleNextChunk());

    readable.on('end', () => {
      if (sourceBuffer.updating) {
        closed = true;
      } else {
        mediaSource.endOfStream();
      }
    });

    sourceBuffer.addEventListener('updateend', handleNextChunk);
  });

  return mediaSource;
}
