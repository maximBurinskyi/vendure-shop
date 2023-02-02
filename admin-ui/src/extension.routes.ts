export const extensionRoutes = [  {
    path: 'extensions/greet',
    loadChildren: () => import('./extensions/b76316e957cf7ba5722f7f357122f04ac07e081d24dcdc00223edf79ed84dbde/greeter.module').then(m => m.GreeterModule),
  }];
