import DS from 'ember-data';

export default DS.Model.extend({
	journeyId: DS.attr(),
	img: DS.attr()
});
