import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		filterByCountry(param) {
			if(param !== ''){
				return this.get('store').query('journey', {country: param});
			} else {
				return this.get('store').findAll('journey');
			}
		}
	}
});
