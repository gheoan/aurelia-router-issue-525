export default class {
  configureRouter(config) {
    config.mapRoute({
      route: 'test',
      moduleId: 'test',
    });
    console.log('child router configured');
  }
}
