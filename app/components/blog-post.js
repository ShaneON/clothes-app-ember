import Component from '@ember/component';
import { alias } from '@ember/object/computed';

export default Component.extend({
  tagName: '',

  title: alias('blogPost.title'),
  text: alias('blogPost.text')
});
