import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  size: DS.attr('string'),
  caption: DS.attr('string'),
  name: DS.attr('string'),
  url: DS.attr('string')
});
