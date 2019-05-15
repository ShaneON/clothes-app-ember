import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({

  urlForFindAll(){
    return `http://localhost:3001/blog-posts`;
  },
});
