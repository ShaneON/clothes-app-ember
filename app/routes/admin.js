import Route from '@ember/routing/route';
import Ember from 'ember';
// import { inject as service } from '@ember/service';

const { get, set } = Ember;

export default Route.extend({
  // media: service(),

  setupController(controller) {
    this._super(...arguments);
    // controller.set('isMobile', this.media.isMobile),
    controller.set('header', "header")
    this._checkScroll(controller);
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
});
