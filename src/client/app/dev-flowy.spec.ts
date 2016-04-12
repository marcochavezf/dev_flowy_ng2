import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {DevFlowyApp} from '../app/dev-flowy';

beforeEachProviders(() => [DevFlowyApp]);

describe('App: DevFlowy', () => {
  it('should have the `defaultMeaning` as 42', inject([DevFlowyApp], (app: DevFlowyApp) => {
    expect(app.defaultMeaning).toBe(42);
  }));

  describe('#meaningOfLife', () => {
    it('should get the meaning of life', inject([DevFlowyApp], (app: DevFlowyApp) => {
      expect(app.meaningOfLife()).toBe('The meaning of life is 42');
      expect(app.meaningOfLife(22)).toBe('The meaning of life is 22');
    }));
  });
});

