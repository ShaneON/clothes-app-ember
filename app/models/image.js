import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  size: DS.attr('string'),
  caption: DS.attr('string'),
  // comments: DS.attr('comment')
});
