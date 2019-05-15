import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  name: DS.attr('string'),
  size: DS.attr('string'),
  text: DS.attr('string'),
  // comments: DS.attr('comment')
});
