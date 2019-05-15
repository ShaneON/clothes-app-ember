import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  // urlForFindRecord(id){
  //   return `http://localhost:5000/image/${id}`;
  // },
  //
  urlForFindAll(){
    return `http://localhost:3001/images`;
  },

  // urlForCreateRecord() {
  //   return `http://localhost:5000/image`;
  // },

  // urlForUpdateRecord(id) {
  //   return `http://localhost:5000/image/${id}`;
  // },
});
