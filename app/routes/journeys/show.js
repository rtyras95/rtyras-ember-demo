import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
      return this.get('store').findRecord('journey', params.journey_id);
  }
});
