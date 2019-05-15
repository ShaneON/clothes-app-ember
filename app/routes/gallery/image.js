import Route from '@ember/routing/route';

export default Route.extend({

  model(params) {
    return this.store.find('image', params.image_id);
  },

  actions: {
    closeModal() {
      this.transitionTo('gallery');
    }
  }

});
