import Route from '@ember/routing/route';
import { task } from 'ember-concurrency';
// import { inject as service } from '@ember/service';

export default Route.extend({
  // media: service(),

  setupController(controller) {
    this._super(...arguments);
    // controller.set('isMobile', this.media.isMobile),
    controller.set('header', "header")
    this._checkScroll(controller);
  },

  model() {
    return this.store.findAll('image');
  },

  _checkScroll(controller) {
    window.addEventListener('scroll', (() => {
      let scrollPosition = Math.round(window.scrollY);
      if (scrollPosition > 90){
        controller.set('header', "sticky");
      }
      else {
        controller.set('header', "header");
      }
    }));
  },

  // uploadPhoto: task(function * (file) {
  //   let photo = this.store.createRecord('image', {
  //     filename: get(file, 'name'),
  //     filesize: get(file, 'size')
  //   });
  //
  //   try {
  //     file.readAsDataURL().then(function (url) {
  //       if (get(photo, 'url') == null) {
  //         set(photo, 'url', url);
  //       }
  //     });
  //
  //     let response = yield file.upload('http://localhost:3001/image-upload');
  //     set(photo, 'url', response.headers.Location);
  //     yield photo.save();
  //   } catch (e) {
  //     photo.rollback();
  //   }
  // }).maxConcurrency(3).enqueue(),

  actions: {
    uploadPhoto(file) {
    //   get(this, 'uploadPhoto').perform(file);
    },
  }
});
