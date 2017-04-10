import Ember from 'ember';

export default Ember.Route.extend({

	model(params) {
		let journey = this.get('store').findRecord('journey', params.journey_id);
		journey.photos = this.get('store').query('photo', {journeyId: param.journeyId});
		alert(journey.photos);
		return journey;
	}
});
