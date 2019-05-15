import Component from '@ember/component';
import { alias } from '@ember/object/computed';

export default Component.extend({
  tagName: '',

  url: alias('image.url'),
  name: alias('image.name'),
  caption: alias('image.caption'),
});
