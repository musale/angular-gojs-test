import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { AngularGojsTestAppComponent } from '../app/angular-gojs-test.component';

beforeEachProviders(() => [AngularGojsTestAppComponent]);

describe('App: AngularGojsTest', () => {
  it('should create the app',
      inject([AngularGojsTestAppComponent], (app: AngularGojsTestAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'angular-gojs-test works!\'',
      inject([AngularGojsTestAppComponent], (app: AngularGojsTestAppComponent) => {
    expect(app.title).toEqual('angular-gojs-test works!');
  }));
});
