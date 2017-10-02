export class App {
  configureRouter(config) {
    config.mapRoute({
      route: '',
      moduleId: 'child',
    });
    console.log('parent router configured');
  }
}
