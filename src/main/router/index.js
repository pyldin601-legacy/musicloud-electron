import Router from 'koa-router';
import listen from './listen';

const router = new Router();

router.get('/listen', listen);

export default router;
