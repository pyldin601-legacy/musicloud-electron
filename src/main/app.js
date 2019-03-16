import Application from 'koa';
import router from './router';

export function createApplication() {
  const app = new Application();

  app.use(router.routes(), router.allowedMethods());

  return app;
}
