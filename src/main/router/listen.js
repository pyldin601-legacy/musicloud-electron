import { createReadStream } from 'fs';

export default async function listen(ctx) {
  ctx.body = createReadStream('./test.mp3');
}
