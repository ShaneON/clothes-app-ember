import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | gallery/image', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:gallery/image');
    assert.ok(route);
  });
});
