import Application from 'koa';

export function createApplication() {
  const app = new Application();

  return app;
}
